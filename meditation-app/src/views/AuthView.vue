<script lang="ts" setup>
import {useRouter} from "vue-router";
import ButtonText from "@/components/ButtonText.vue";
import IconLogo from "@/icons/IconLogo.vue";

const router = useRouter()

function redirectToMain() {
  router.push({name: 'main'})
}

</script>

<template>
  <div class="auth">
    <IconLogo :height="202" :width="213 " class="auth__logo"/>
    <div class="auth__welcome">
      <h1 class="auth__title">Добро пожаловать!</h1>
      <p class="auth__description ">Медитируй и оставайся в фокусе, чтобы быть счастливым.</p>
    </div>
    <ButtonText @click="redirectToMain">Войти в приложение</ButtonText>
  </div>
</template>

<style lang="scss" scoped>
.auth {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background-image: url('./auth-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &__logo {
    margin-bottom: 40px;
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
}
</style>
