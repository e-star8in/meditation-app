<script lang="ts" setup>
import { useStatsStore } from '@/stores/stats.store.ts';
import { computed, onMounted } from 'vue';
import StatCard from '@/components/StatCard.vue';
import { type FeelingKey, FEELINGS } from '@/interfaces/feeling.intarface.ts';

const statsStore = useStatsStore();
onMounted(async () => {
  await statsStore.fetchStats();
});

const totalMinutes = computed(() => ({
  title: (statsStore.summary as Record<string, number> | undefined)?.total_minutes ?? 0,
  description: 'Минут медитации',
  fill: '#2B5B54',
  bg_color: '#69B09C',
}));

const feelingCards = computed(() => {
  const summary = statsStore.summary as Record<string, number> | undefined;

  return (Object.keys(FEELINGS) as FeelingKey[]).map((key) => {
    const config = FEELINGS[key];

    return {
      label: key,
      title: summary?.[config.back_key] ?? 0,
      description: config.description,
      fill: config.secondary.trim(),
      bg_color: config.primary,
    };
  });
});
</script>

<template>
  <div class="container">
    <div v-if="statsStore.loading" class="loading">Загрузка...</div>
    <div v-else-if="statsStore.error">Статистики не найдено. Перезагрузите страницу</div>
    <template v-else-if="statsStore.summary">
      <div class="grid">
        <StatCard v-bind="totalMinutes" />
        <StatCard
          v-for="card in feelingCards"
          :key="card.label"
          :bg_color="card.bg_color"
          :description="card.description"
          :fill="card.fill"
          :title="card.title"
        />
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  justify-content: space-between;
  gap: 48px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>
