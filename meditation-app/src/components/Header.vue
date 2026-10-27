<script lang="ts" setup>

import HeaderNav from "@/components/HeaderNav.vue";
import IconLogo from "@/icons/IconLogo.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <a class="" href="/" title="Meditation App">
          <IconLogo :height="86" :width="76"/>
        </a>
        <HeaderNav class="header__nav"/>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 40px 0;
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
}
</style>
