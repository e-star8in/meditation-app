<script lang="ts" setup>

import HeaderNav from "@/components/HeaderNav.vue";
import IconLogo from "@/icons/IconLogo.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <RouterLink class="" title="Meditation App" to="/main">
          <IconLogo :height="86" :width="76"/>
        </RouterLink>
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
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;

    @media (min-width: 768px) {
      align-items: center;
    }
  }
}
</style>
