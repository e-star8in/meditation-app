import {defineStore} from "pinia";
import {ref} from "vue";
import type {Meditation} from "@/interfaces/meditation.interface";
import {API_ROUTES, http} from "@/api.ts";

export const useMeditationsStore = defineStore('meditations', () => {
  const meditations = ref<Meditation[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchMeditations() {
    loading.value = true
    error.value = null
    try {
      const {data} = await http.get(API_ROUTES.meditations);
      meditations.value = data.data.meditations;
    } catch (e) {
      console.error(e)
      error.value = e instanceof Error ? e.message : 'Произошла ошибка'
    } finally {
      loading.value = false
    }
  }

  return {
    meditations, loading, error, fetchMeditations
  }
});
