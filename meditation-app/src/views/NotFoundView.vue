<script lang="ts" setup>
import {useRouter} from "vue-router";
import IconLogo from "@/icons/IconLogo.vue";
import ButtonText from "@/components/ButtonText.vue";

const router = useRouter()

function redirectToMain() {
  router.push('/')
}

</script>

<template>
  <div class="notfound">
    <IconLogo :height="202" :width="213 " class="notfound__logo"/>
    <div class="notfound__welcome">
      <h1 class="notfound__title">404</h1>
      <p class="notfound__description ">Страница не найдена.</p>
    </div>
    <ButtonText @click="redirectToMain">На главную</ButtonText>
  </div>
</template>

<style lang="scss" scoped>
.notfound {
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
    font-size: 100px;
    margin: 0;
    text-align: center;
  }

  &__description {
    font-size: 24px;
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
