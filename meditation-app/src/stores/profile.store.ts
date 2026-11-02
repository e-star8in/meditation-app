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

  async function fetchProfile() {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await client().get<ApiResponse<ProfileResponse>>(API_ROUTES.profile);
      profile.value = data.data.user;
    } catch (e) {
      console.error(e);
      const err = e as AxiosError<{ message?: string }>;
      error.value = err.response?.data?.message ?? err.message ?? 'Произошла ошибка';

      console.log(error.value);
    } finally {
      loading.value = false;
    }
  }

  return { profile, loading, error, fetchProfile };
});
