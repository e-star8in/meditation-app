<script lang="ts" setup>

</script>

<template>
<button class="btn"><slot></slot></button>
</template>

<style lang="scss" scoped>
.btn {
  font-size: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  padding: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: rgb(var(--color-light-rgb));
  border: none;
  border-radius: 16px;
  background-color: var(--color-primary-light);
  &:hover, &:focus {
    background-color: var(--color-primary-active);
  }

  &:active {
    background-color: var(--color-primary-dark);
  }
}
</style>
