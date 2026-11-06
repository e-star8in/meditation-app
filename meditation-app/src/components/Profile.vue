<script lang="ts" setup>
import { useProfileStore } from '@/stores/profile.store.ts';
import { onMounted } from 'vue';
import ProfileFeelings from '@/components/ProfileFeelings.vue';

const store = useProfileStore();

onMounted(() => {
  store.fetchProfile();
});
</script>

<template>
  <div v-if="store.loading" class="loading">Загрузка…</div>
  <div v-else-if="store.error" class="error">{{ store.error }}</div>
  <div v-else-if="store.profile" class="profile">
    <div class="profile__avatar">
      <img alt="" src="https://placehold.co/600x600?text=Hello+World" />
    </div>
    <div class="profile__hello">
      Добро пожаловать,
      <span class="profile__name">{{ store.profile.username }}</span>
      !
    </div>
    <ProfileFeelings />
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
}
</style>
