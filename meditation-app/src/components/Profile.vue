<script lang="ts" setup>

import IconCalm from "@/icons/IconCalm.vue";
import IconAnxious from "@/icons/IconAnxious.vue";
import IconFocus from "@/icons/IconFocus.vue";
import IconRelax from "@/icons/IconRelax.vue";
</script>

<template>
  <div class="profile">
    <div class="profile__avatar">
      <img alt="}" src="https://placehold.co/600x600?text=Hello+World"/>
    </div>
    <div class="profile__hello">
      Добро пожаловать,
      <span class="profile__name">Наталья</span>
      !
    </div>
    <p class="profile__question">Как вы сегодня себя чувствуете?</p>
    <ul class="profile__list feelings">
      <li class="feelings__item">
        <a class="feelings__link" href="#">
          <IconCalm/>
          <span class="feelings__text">Спокойно</span>
        </a>
      </li>
      <li class="feelings__item">
        <a class="feelings__link" href="#">
          <IconRelax/>
          <span class="feelings__text">Расслабленно</span>
        </a>
      </li>
      <li class="feelings__item">
        <a class="feelings__link" href="#">
          <IconFocus/>
          <span class="feelings__text">Фокусировано</span>
        </a>
      </li>
      <li class="feelings__item">
        <a class="feelings__link" href="#">
          <IconAnxious/>
          <span class="feelings__text">Тревожно</span>
        </a>
      </li>
    </ul>

  </div>
</template>

<style lang="scss" scoped>
.profile {
  padding: 23px 0;
  grid-column: span 5;

  &__avatar {
    overflow: hidden;
    width: 129px;
    margin-bottom: 30px;
    pointer-events: none;
    border-radius: 50%;
    background-color: var(--color-primary-inactive);
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;

    > * {
      width: 129px;
      height: 129px;
      object-position: center;
      object-fit: cover;
    }
  }

  &__hello {
    font-family: var(--font-heading), serif;
    font-size: 30px;
    font-weight: 500;
    margin: 0;
  }

  &__question {
    font-size: 22px;
    margin: 0 0 40px;
    color: rgba(var(--color-light-rgb), 0.7);
  }
}

.feelings {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 20px;

  &__link {
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    text-decoration: none;
    color: rgba(var(--color-light-rgb), 1);
    gap: 8px;

    svg {
      transition: color 0.2s;
      color: rgba(var(--color-light-rgb), 0.9);
    }

    &:hover {
      svg {
        transition: color 0.2s;
        color: var(--color-primary-active);
      }
    }
  }

  &__text {
    font-size: 12px;
    color: rgba(var(--color-light-rgb), 1) !important;
  }
}
</style>
