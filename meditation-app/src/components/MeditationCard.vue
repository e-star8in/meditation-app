<script lang="ts" setup>
  import type {Meditation} from "@/interfaces/meditation.interface.ts";

  const {meditation} = defineProps<{meditation: Meditation}>()
</script>

<template>
  <div class="card">
    <div class="card__body">
      <h2 class="card__title">{{meditation.title}}</h2>
      <p class="card__text">{{meditation.description}}</p>
    </div>
    <div class="card__footer">
      <a class="card__start" href="#">Начать</a>
      <span class="card__long">{{meditation.duration_min}} мин</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 170px;
  padding: 16px;
  color: var(--color-dark);
  border-radius: 20px;
  background-color: var(--color-light-bg);
  @media (min-width: 768px) {
    padding: 22px 30px;
  }

  &__title {
    font-family: var(--font-heading), serif;
    font-size: 25px;
    font-weight: 500;
    margin: 0;
    color: var(--color-dark);
  }

  &__text {
    font-size: 15px;
    margin: 0;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
  }

  &__start {
    font-size: 15px;
    font-weight: 500;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    text-decoration: none;
    color: rgba(var(--color-light-rgb), 1);
    border-radius: 10px;
    background: var(--color-primary);
    gap: 12px;

    &:after {
      line-height: 0;
      display: inline-block;
      content: url("data:image/svg+xml,%3Csvg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.5 0C2.91568 0 0 2.91596 0 6.5C0 10.084 2.91568 13 6.5 13C10.0843 13 13 10.084 13 6.5C13 2.91596 10.0843 0 6.5 0ZM9.08403 6.72773L5.29237 9.16523C5.24794 9.19405 5.19662 9.20834 5.14584 9.20834C5.10141 9.20834 5.05644 9.19722 5.01625 9.17528C4.92896 9.12768 4.875 9.03668 4.875 8.9375V4.0625C4.875 3.96332 4.92896 3.87232 5.01625 3.82472C5.10194 3.77764 5.20932 3.78054 5.29237 3.83477L9.08403 6.27227C9.16127 6.32199 9.20834 6.40796 9.20834 6.5C9.20834 6.59204 9.16127 6.67799 9.08403 6.72773Z' fill='white'/%3E%3C/svg%3E%0A");
    }

    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
