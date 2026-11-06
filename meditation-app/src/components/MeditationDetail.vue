<script lang="ts" setup>
import ButtonIcon from '@/components/ButtonIcon.vue';
import IconBack from '@/icons/IconBack.vue';
import IconRepeat from '@/icons/IconRepeat.vue';
import IconDone from '@/icons/IconDone.vue';
import IconPlay from '@/icons/IconPlay.vue';
import IconPause from '@/icons/IconPause.vue';
import { useRoute } from 'vue-router';
import { useMeditationsStore } from '@/stores/meditations.store.ts';
import { useStatsStore } from '@/stores/stats.store.ts';
import { useCountdown } from '@/utils/countdown.ts';
import { computed, onBeforeUnmount, onMounted, watch } from 'vue';
import { toNumber } from '@/utils/toNumber.ts';

const route = useRoute();
const statsStore = useStatsStore();
const meditationsStore = useMeditationsStore();

onMounted(async () => {
  if (!meditationsStore.meditations.length && !meditationsStore.loading) {
    await meditationsStore.fetchMeditations(); // имя метода из твоего стора
  }
});

const meditation = computed(() =>
  meditationsStore.meditations.find((m) => m.id === Number(route.params.alias)),
);

const duration = computed(() => toNumber(meditation.value?.duration_min));

const { formattedTime, elapsedMinutes, isRunning, toggle, reset, isDone } = useCountdown(0);
watch(
  duration,
  (value) => {
    if (value > 0) reset(value);
  },
  { immediate: true },
);
function resetMeditation() {
  statsStore.setStats('duration_min', toNumber(elapsedMinutes));
  reset(toNumber(duration.value));
}

watch(isDone, () => {
  if (isDone.value) {
    statsStore.setStats('duration_min', duration.value);
  }
});

onBeforeUnmount(() => {
  statsStore.setStats('duration_min', toNumber(elapsedMinutes));
});
</script>

<template>
  <div v-if="meditationsStore.loading">Загрузка…</div>
  <div v-else-if="meditation" class="detail">
    <div class="detail__picture">
      <span class="detail__timer">{{ formattedTime }}</span>
    </div>
    <div class="detail__info">
      <h1 class="detail__title">{{ meditation.title }}</h1>
      <p class="detail__description">{{ meditation.description }}</p>
    </div>
    <div class="detail__actions">
      <ButtonIcon @click="$router.push({ name: 'main' }).catch(() => {})">
        <IconBack />
      </ButtonIcon>

      <ButtonIcon class="detail__btn" @click="toggle">
        <IconDone v-if="isDone" />
        <IconPause v-else-if="isRunning" />
        <IconPlay v-else-if="!isRunning" />
      </ButtonIcon>

      <ButtonIcon @click="resetMeditation">
        <IconRepeat />
      </ButtonIcon>
    </div>
  </div>
  <div v-else>Медитация не найдена</div>
</template>

<style lang="scss" scoped>
.detail {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: 27px;
  &__picture {
    display: flex;
    align-items: center;
    justify-content: center;
    width: min(250px, 90vw);
    border-radius: 50%;
    background-image: url('/detail-meditation-picture.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    aspect-ratio: 1;
  }
  &__timer {
    font-size: 44px;
    margin: 0;
  }
  &__info {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
  &__title {
    font-family: var(--font-heading), serif;
    font-size: 35px;
    font-weight: 500;
    margin: 0;
    text-align: center;
  }
  &__description {
    font-size: 25px;
    max-width: 560px;
    margin: 0;
    text-align: center;
    text-wrap: balance;
    color: rgba(var(--color-light-rgb), 0.5);
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    height: 75px;
    cursor: pointer;
    border-radius: 50%;
    background: var(--color-light-bg) !important;
  }
}
</style>
