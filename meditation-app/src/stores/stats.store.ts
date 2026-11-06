import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Stats, StatsResponse } from '@/interfaces/stats.interface.ts';
import type { ApiResponse } from '@/interfaces/api.interface.ts';
import { API_ROUTES, client } from '@/api.ts';
import type { AxiosError } from 'axios';

export const useStatsStore = defineStore('stats', () => {
  const stats = ref<Stats[]>();
  const summary = ref<StatsResponse['summary']>();

  const loading = ref(false);
  const saving = ref(false);
  const error = ref<string | null>(null);

  function handleError(e: unknown) {
    const err = e as AxiosError;
    console.error('[fetchBookmarks] status:', err.response?.status);
    console.error('[fetchBookmarks] server said:', err.response?.data);
    error.value = err.message;
  }

  async function fetchStats() {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await client().get<ApiResponse<StatsResponse>>(API_ROUTES.stats);
      stats.value = data.data.stats;
      summary.value = data.data.summary;
    } catch (e) {
      handleError(e);
    } finally {
      loading.value = false;
    }
  }

  async function setStats(type: string, value: number) {
    saving.value = true;
    error.value = null;
    try {
      await client().post(API_ROUTES.stats, { type, value });
    } catch (e) {
      handleError(e);
    } finally {
      saving.value = false;
    }
  }

  return { stats, summary, loading, saving, error, fetchStats, setStats };
});
