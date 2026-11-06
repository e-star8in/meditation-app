import { ref, computed, onUnmounted } from 'vue';
import { toNumber } from '@/utils/toNumber.ts';

export function useCountdown(initialMinutes: number = 0) {
  const totalSeconds = ref(initialMinutes * 60);
  const remainingSeconds = ref(initialMinutes * 60);
  const isRunning = ref(false);
  const isDone = ref(false);

  const elapsedMinutes = computed(() => {
    return toNumber(Math.round((totalSeconds.value - remainingSeconds.value) / 60));
  });

  let intervalId: ReturnType<typeof setInterval> | null = null;
  let endTime = 0;

  const formattedTime = computed(() => {
    const totalM = Math.floor(totalSeconds.value / 60);
    const m = Math.floor(remainingSeconds.value / 60);
    const s = remainingSeconds.value % 60;
    const mm = totalM > 9 ? m.toString().padStart(2, '0') : m.toString();
    return `${mm}:${s.toString().padStart(2, '0')}`;
  });

  const tick = () => {
    const left = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
    remainingSeconds.value = left;

    if (left <= 0) {
      stop();
      isDone.value = true;
    }
  };

  const start = () => {
    if (isRunning.value) return;

    if (isDone.value) {
      isDone.value = false;
      remainingSeconds.value = totalSeconds.value;
    }

    isRunning.value = true;
    endTime = Date.now() + remainingSeconds.value * 1000;
    intervalId = setInterval(tick, 250);
  };

  const stop = () => {
    isRunning.value = false;
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  const toggle = () => (isRunning.value ? stop() : start());

  const reset = (minutes: number) => {
    stop();
    isDone.value = false;
    const seconds = toNumber(minutes) * 60;
    totalSeconds.value = seconds;
    remainingSeconds.value = seconds;
  };

  onUnmounted(stop);

  return {
    remainingSeconds,
    elapsedMinutes,
    formattedTime,
    isRunning,
    isDone,
    start,
    stop,
    toggle,
    reset,
  };
}
