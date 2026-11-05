<script lang="ts" setup>
import ButtonText from '@/components/ButtonText.vue';

const { isOpened, text } = defineProps<{
  isOpened: boolean;
  text: string;
}>();

const emit = defineEmits<{
  (e: 'ok'): void;
}>();
</script>

<template>
  <Transition name="fade">
    <Teleport to="body">
      <div v-if="isOpened" class="cover">
        <div class="popup">
          <p class="popup__message">
            {{ text }}
          </p>
          <div class="popup__actions">
            <ButtonText @click="emit('ok')">Ок</ButtonText>
          </div>
        </div>
      </div>
    </Teleport>
  </Transition>
</template>

<style lang="scss" scoped>
.cover {
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  background-color: var(--color-primary-dark);
  backdrop-filter: blur(12px);
  inset: 0;
}

.popup {
  display: flex;
  flex-direction: column;
  min-width: min(300px, 90vw);
  padding: 20px;
  border-radius: 20px;
  background-color: var(--color-primary);

  &__message {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    gap: 16px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
