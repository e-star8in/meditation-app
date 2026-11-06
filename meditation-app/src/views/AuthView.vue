<script lang="ts" setup>
import { useRouter } from 'vue-router';
import ButtonText from '@/components/ButtonText.vue';
import IconLogo from '@/icons/IconLogo.vue';
import { ref, watch } from 'vue';
import InputDefault from '@/components/InputDefault.vue';
import { useAuthStore } from '@/stores/auth.store.ts';

const router = useRouter();

const actionType = ref('');
const form = ref<{ username?: string; email?: string; password?: string }>({});
const authStore = useAuthStore();

watch(
  () => authStore.getToken,
  () => {
    if (authStore.getToken) {
      router.push({ name: 'main' });
    }
  },
);
async function createAccount(event: Event) {
  event.preventDefault();
  if (!form.value.username || !form.value.email || !form.value.password) return;
  await authStore.createAccount(form.value.username, form.value.email, form.value.password);
  form.value = {};
}

async function login(event: Event) {
  event.preventDefault();
  if (!form.value.username || !form.value.password) return;
  await authStore.login(form.value.username, form.value.password);
  form.value = {};
}
</script>

<template>
  <div class="auth">
    <IconLogo :height="202" :width="213" class="auth__logo" />

    <form v-if="actionType === 'create'" class="auth__form" @submit="createAccount">
      <InputDefault v-model="form.username" placeholder="Имя пользователя" />
      <InputDefault v-model="form.email" placeholder="Email" />
      <InputDefault v-model="form.password" placeholder="Пароль" type="password" />
      <ButtonText type="submit">Создать аккаунт</ButtonText>
    </form>

    <form v-else-if="actionType === 'login'" class="auth__form" @submit="login">
      <InputDefault v-model="form.username" placeholder="Имя пользователя" />
      <InputDefault v-model="form.password" placeholder="Пароль" type="password" />
      <ButtonText type="submit">Войти в приложение</ButtonText>
    </form>
    <template v-else>
      <div class="auth__welcome">
        <h1 class="auth__title">Добро пожаловать!</h1>
        <p class="auth__description">Медитируй и оставайся в фокусе, чтобы быть счастливым.</p>
      </div>
      <div class="auth__actions">
        <ButtonText @click="actionType = 'create'">Создать аккаунт</ButtonText>
        <ButtonText @click="actionType = 'login'">Войти в приложение</ButtonText>
      </div>
    </template>
    <template v-if="authStore.error">
      <div class="auth__error">
        {{ authStore.error }}
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.auth {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  padding: 20vh 20px 20px;
  background-image: url('/auth-bg.webp');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &__logo {
    margin-bottom: 40px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 317px;
    gap: 40px;
  }

  &__title {
    font-family: var(--font-heading), serif;
    font-size: 34px;
    margin: 0;
    text-align: center;
  }

  &__description {
    font-size: 20px;
    font-weight: 500;
    margin: 0;
    text-align: center;
  }

  &__welcome {
    max-width: 317px;
    margin: 0 auto 64px;
  }

  &__error {
    font-size: 22px;
    margin-top: 10px;
    color: rgba(255, 0, 0, 0.7);
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
