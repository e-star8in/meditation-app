<script lang="ts" setup>
import Header from "@/components/Header.vue";
import Profile from "@/components/Profile.vue";
import Meditation from "@/components/Meditation.vue";
</script>

<template>
  <main class="main">
    <Header/>
    <div class="container">
      <section class="content">
        <Profile/>
        <Meditation/>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  height: 100%;
  min-height: 100vh;
}

.content {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 12px
}
</style>
