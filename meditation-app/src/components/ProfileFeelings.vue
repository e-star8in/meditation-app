<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import {useStatsStore} from '@/stores/stats.store.ts';
import {FEELINGS} from "@/interfaces/feeling.intarface.ts";
import PopupConfirm from "@/components/PopupConfirm.vue";

const isOpened = ref<boolean>(false);
const store = useStatsStore();
const isFeelingActive = ref<string>('');

onMounted(() => {
  store.fetchStats();
});

</script>

<template>
  <p class="question">Как вы сегодня себя чувствуете?</p>
  <ul class="profile__list feelings">
    <li v-for="(item, key) in FEELINGS" :key="key" class="feelings__item">
      <button
        :style="{ '--hover-color': item.primary }"
        class="feelings__link"
        @click="isOpened = !isOpened; store.setStats(item.label, 1)"
      >
        <component :is="item.icon"/>
        <span class="feelings__text">{{ item.translate }}</span>
      </button>
      <PopupConfirm
        :is-opened="isOpened"
        text="Успешно сохранили!"
        @ok="isOpened = !isOpened"
      />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.question {
  font-size: 22px;
  margin: 0 0 40px;
  color: rgba(var(--color-light-rgb), 0.7);
}

.feelings {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 20px;

  &__link {
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    text-decoration: none;
    color: rgba(var(--color-light-rgb), 1);
    border: none;
    outline: none;
    background: transparent;
    gap: 8px;

    svg {
      transition: color 0.2s;
      color: rgba(var(--color-light-rgb), 0.9);
    }

    &:hover, &.active {
      svg {
        transition: color 0.2s;
        color: var(--hover-color, var(--color-primary-active));
      }
    }
  }

  &__text {
    font-size: 12px;
    color: rgba(var(--color-light-rgb), 1) !important;
  }
}
</style>
