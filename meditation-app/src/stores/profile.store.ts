import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Profile, ProfileResponse } from '@/interfaces/profile.interface.ts';
import type { ApiResponse } from '@/interfaces/api.interface.ts';
import { API_ROUTES, client } from '@/api.ts';
import type { AxiosError } from 'axios';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>();
  const loading = ref(false);
  const error = ref<string | null>(null);

  function handleError(e: unknown) {
    const err = e as AxiosError;
    console.error('[fetchBookmarks] status:', err.response?.status);
    console.error('[fetchBookmarks] server said:', err.response?.data);
    error.value = err.message;
  }
  async function fetchProfile() {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await client().get<ApiResponse<ProfileResponse>>(API_ROUTES.profile);
      profile.value = data.data.user;
    } catch (e) {
      handleError(e);
    } finally {
      loading.value = false;
    }
  }

  return { profile, loading, error, fetchProfile };
});
