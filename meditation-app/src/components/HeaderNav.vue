<script lang="ts" setup>

import IconPlayTriangle from "@/icons/iconPlayTriangle.vue";
import IconStatistic from "@/icons/IconStatistic.vue";
import IconExit from "@/icons/IconExit.vue";
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <a class="nav__link" href="#">
          <IconPlayTriangle/>
          <span>Медитация</span>
        </a>
      </li>
      <li class="nav__item">
        <a class="nav__link active" href="#">
          <IconStatistic/>
          <span>Статистика</span>
        </a>
      </li>
      <li class="nav__item">
        <a class="nav__link" href="#">
          <IconExit/>
          <span>Выход</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  &__list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    min-height: 92px;
    border-right: 1px solid var(--color-primary-dark);
    &:last-child {
      border: none;
    }
  }

  &__link {
    font-size: 22px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 10px 52px;
    transition: color 0.2s;
    text-decoration: none;
    color: rgba(var(--color-light-rgb), 0.5);
    gap: 0.5rem;

    > * {
      color: inherit;
    }

    &.active, &:hover {
      transition: color 0.2s;
      color: rgba(var(--color-light-rgb), 1);
    }
  }
}
</style>
