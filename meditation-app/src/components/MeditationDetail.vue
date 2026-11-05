<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useMeditationsStore } from '@/stores/meditations.store.ts';
import ButtonIcon from '@/components/ButtonIcon.vue';
import IconBack from '@/icons/IconBack.vue';
import IconRepeat from '@/icons/IconRepeat.vue';
import { ref } from 'vue';
import IconDone from '@/icons/IconDone.vue';
import IconPlay from '@/icons/IconPlay.vue';
import IconPause from '@/icons/IconPause.vue';

const isPlayed = ref<boolean>(false);
const isDone = ref<boolean>(false);

const route = useRoute();
const meditationsStore = useMeditationsStore();
const meditation = meditationsStore.meditations.find((m) => m.id === Number(route.params.alias));
</script>

<template>
  <div v-if="meditation" class="detail">
    <div class="detail__picture">
      <span class="detail__timer">5:00</span>
    </div>
    <div class="detail__info">
      <h1 class="detail__title">{{ meditation.title }}</h1>
      <p class="detail__description">{{ meditation.description }}</p>
    </div>
    <div class="detail__actions">
      <ButtonIcon>
        <IconBack />
      </ButtonIcon>

      <ButtonIcon class="detail__btn">
        <IconDone v-if="isDone" />
        <IconPause v-else-if="isPlayed" />
        <IconPlay v-else-if="!isPlayed" />
      </ButtonIcon>

      <ButtonIcon>
        <IconRepeat />
      </ButtonIcon>
    </div>
  </div>
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
