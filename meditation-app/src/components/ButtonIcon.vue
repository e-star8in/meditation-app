<script lang="ts" setup></script>

<template>
  <button class="btn-icon">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn-icon {
  position: relative;
  padding: 0;
  cursor: pointer;
  transition: opacity 0.3s;
  border: none;
  outline: none;
  background: none;

  &::before {
    position: absolute;
    content: '';
    inset: -10px;
  }

  &:hover {
    transition: opacity 0.3s;
    opacity: 0.8;
  }
}
</style>
