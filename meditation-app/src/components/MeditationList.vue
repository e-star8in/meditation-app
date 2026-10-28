<script lang="ts" setup>

import {useMeditationsStore} from "@/stores/meditations.store.ts";
import {onMounted} from "vue";
import MeditationCard from "@/components/MeditationCard.vue";

const store = useMeditationsStore();
onMounted(() => {
  store.fetchMeditations()
})
</script>

<template>
  <section class="meditation">
    <div v-if="store.loading" class="loading">Загрузка...</div>
    <div v-else-if="store.error" class="meditation__empty">Медитаций не найдено. Перезагрузите страницу</div>
    <ul v-else-if="store.meditations.length" class="meditation__list">
      <li v-for="meditation in store.meditations" :key="meditation.id" class="meditation__item">
        <MeditationCard :meditation/>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.meditation {
  grid-column: span 7;

  &__list {
    display: grid;
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 16px;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      gap: 22px 24px;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__empty {
    font-size: 30px;
    padding: 20px;
    text-align: center;
  }
}


</style>
