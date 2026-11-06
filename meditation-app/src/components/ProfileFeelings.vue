<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useStatsStore } from '@/stores/stats.store.ts';
import { FEELINGS } from '@/interfaces/feeling.intarface.ts';
import PopupConfirm from '@/components/PopupConfirm.vue';

const isOpened = ref<boolean>(false);
const store = useStatsStore();

const activeKey = ref<number | string | null>(null);
const isLocked = ref<boolean>(false);

const DURATION = 90;

const remaining = ref<number>(0);

let endTimer: ReturnType<typeof setTimeout> | null = null;
let tickTimer: ReturnType<typeof setInterval> | null = null;

const formattedRemaining = computed(() => {
  const m = Math.floor(remaining.value / 60);
  const s = remaining.value % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
});

const stopTimers = () => {
  if (endTimer) {
    clearTimeout(endTimer);
    endTimer = null;
  }
  if (tickTimer) {
    clearInterval(tickTimer);
    tickTimer = null;
  }
};

const handleClick = (key: number | string, label: string) => {
  if (isLocked.value) return;

  stopTimers();

  activeKey.value = key;
  isLocked.value = true;
  remaining.value = DURATION;

  store.setStats(label, 1);
  isOpened.value = true;

  tickTimer = setInterval(() => {
    if (remaining.value > 0) remaining.value -= 1;
  }, 1000);

  endTimer = setTimeout(() => {
    activeKey.value = null;
    isLocked.value = false;
    remaining.value = 0;
    stopTimers();
  }, DURATION * 1000);
};

onMounted(() => {
  store.fetchStats();
});

onUnmounted(() => {
  stopTimers();
});
</script>

<template>
  <p class="question">Как вы сегодня себя чувствуете?</p>

  <ul class="profile__list feelings">
    <li v-for="(item, key) in FEELINGS" :key="key" class="feelings__item">
      <button
        :class="{ active: activeKey === key }"
        :disabled="isLocked"
        :style="{ '--hover-color': item.primary }"
        class="feelings__link"
        @click="handleClick(key, item.label)"
      >
        <component :is="item.icon" />
        <span class="feelings__text">{{ item.translate }}</span>
      </button>
    </li>
  </ul>
  <p v-if="isLocked" class="question">
    Следующая отправка будет доступна через {{ formattedRemaining }}
  </p>
  <PopupConfirm :is-opened="isOpened" text="Успешно сохранили!" @ok="isOpened = false" />
</template>

<style lang="scss" scoped>
.question {
  font-size: 22px;
  margin: 0 0 40px;
  color: rgba(var(--color-light-rgb), 0.7);
}

.feelings {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
  gap: 20px;

  &__link {
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition:
      color 0.2s ease-in-out,
      opacity 0.2s ease-in-out;
    text-decoration: none;
    color: rgba(var(--color-light-rgb), 1);
    border: none;
    outline: none;
    background: transparent;
    gap: 8px;

    svg {
      transition: color 0.2s;
      color: rgba(var(--color-light-rgb), 0.9);
    }

    &:hover,
    &.active {
      svg {
        transition: color 0.2s;
        color: var(--hover-color, var(--color-primary-active));
      }
    }

    &.active .feelings__text {
      color: var(--hover-color, var(--color-primary-active)) !important;
    }

    &:disabled {
      cursor: progress;
      opacity: 0.5;
    }
  }

  &__text {
    font-size: 12px;
    transition: color 0.2s;
    color: rgba(var(--color-light-rgb), 1) !important;
  }
}
</style>
