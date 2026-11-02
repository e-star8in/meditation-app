import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Meditation, MeditationResponse } from '@/interfaces/meditation.interface';
import { API_ROUTES, client } from '@/api.ts';
import type { ApiResponse } from '@/interfaces/api.interface.ts';

export const useMeditationsStore = defineStore('meditations', () => {
  const meditations = ref<Meditation[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchMeditations() {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await client().get<ApiResponse<MeditationResponse>>(API_ROUTES.meditations);
      meditations.value = data.data.meditations;
    } catch (e) {
      console.error(e);
      error.value = e instanceof Error ? e.message : 'Произошла ошибка';
    } finally {
      loading.value = false;
    }
  }

  return {
    meditations,
    loading,
    error,
    fetchMeditations,
  };
});
