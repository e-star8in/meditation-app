<script lang="ts" setup>
const data = defineModel<string>();
</script>

<template>
  <input v-model="data" class="input" />
</template>

<style lang="scss" scoped>
.input {
  font-family: var(--font), sans-serif;
  font-size: 24px;
  min-width: 274px;
  padding: 10px;
  transition: all 0.2s ease-in-out;
  color: rgba(var(--color-light-rgb), 0.9);
  border: none;
  border-bottom: 1px solid rgb(var(--color-light-rgb));
  outline: none;
  background-color: transparent;

  &:hover,
  &:focus {
    color: rgba(var(--color-light-rgb), 1);
    &::placeholder {
      color: rgba(var(--color-light-rgb), 1);
    }
  }

  &::placeholder {
    color: var(--color-placeholder);
  }
}
</style>
