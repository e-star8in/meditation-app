<script lang="ts" setup>
const { title, description, fill, bg_color } = defineProps<{
  title: number;
  description: string;
  fill: string;
  bg_color: string;
}>();
</script>

<template>
  <div :style="{ backgroundColor: bg_color }" class="stat">
    <span class="stat__title">{{ title }}</span>
    <span class="stat__description">{{ description }}</span>
    <svg class="stat__img" fill="none" viewBox="0 0 300 98" xmlns="http://www.w3.org/2000/svg">
      <path
        :fill="fill"
        d="M64.954 11.692C32.0606 -3.80799 14.8439 2.692 -5.25808e-08 7.192L-5.82027e-07 79.6097C3.46357 94.0755 11.3391 97.692 14.8439 97.692L283.745 97.692C295.868 93.5589 299.745 84.029 299.745 79.7237L299.745 12.192C279.706 1.85927 218.375 2.19202 190.478 22.692C163.245 -2.80798 82.7451 -7.30801 64.954 11.692Z"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.stat {
  position: relative;
  z-index: 2;
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;
  margin-top: 60px;
  padding: 20px;
  transition: scale 0.3s;
  border-radius: 20px;
  background-color: var(--color-primary);
  will-change: scale;

  &:hover {
    transition: scale 0.3s;
    scale: 1.05;
    will-change: scale;
  }

  &__title {
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 50px;
    margin-left: auto;
    color: rgb(var(--color-light-rgb));
  }

  &__description {
    font-size: 20px;
    font-weight: 500;
    color: rgb(var(--color-light-rgb));
  }

  &__img {
    position: absolute;
    z-index: -1;
    right: -10px;
    bottom: -10px;
    left: -10px;
    height: auto;
  }
}
</style>
