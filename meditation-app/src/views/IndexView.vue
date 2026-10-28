<script lang="ts" setup>

import MeditationList from "@/components/MeditationList.vue";
import Profile from "@/components/Profile.vue";
</script>

<template>
  <div class="container">
    <section class="content">
      <Profile/>
      <MeditationList/>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 12px
}
</style>
