import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Stats, StatsResponse } from '@/interfaces/stats.interface.ts';
import type { ApiResponse } from '@/interfaces/api.interface.ts';
import { API_ROUTES, client } from '@/api.ts';
import type { AxiosError } from 'axios';

export const useStatsStore = defineStore('stats', () => {
  const stats = ref<Stats[]>();
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchStats() {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await client().get<ApiResponse<StatsResponse>>(API_ROUTES.stats);
      stats.value = data.data.stats;
    } catch (e) {
      console.error(e);
      const err = e as AxiosError<{ message?: string }>;
      error.value = err.response?.data?.message ?? err.message ?? 'Произошла ошибка';

      console.log(error.value);
    } finally {
      loading.value = false;
    }
  }

  async function setStats(type: string, value: number) {
    loading.value = true;
    error.value = null;
    try {
      await client().post(API_ROUTES.stats, {
        type,
        value,
      });
    } catch (e) {
      console.error(e);
      const err = e as AxiosError<{ message?: string }>;
      error.value = err.response?.data?.message ?? err.message ?? 'Произошла ошибка';

      console.log(error.value);
    } finally {
      loading.value = false;
    }
  }

  return { stats, loading, error, fetchStats, setStats };
});
