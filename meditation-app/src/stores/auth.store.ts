import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { API_ROUTES, client } from '@/api.ts';
import type { LoginResponse } from '@/interfaces/auth.interface.ts';
import type { AxiosError } from 'axios';

const TOKEN_STORE_KEY = 'token-store';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>();
  const loading = ref(false);
  const error = ref<string | null>(null);

  const initialValue = localStorage.getItem(TOKEN_STORE_KEY);

  if (initialValue) {
    token.value = initialValue;
  }

  function setToken(newToken: string) {
    token.value = newToken;
    localStorage.setItem(TOKEN_STORE_KEY, newToken);
  }

  function clearToken() {
    token.value = undefined;
    localStorage.removeItem(TOKEN_STORE_KEY);
  }

  const getToken = computed(() => token.value);

  async function createAccount(username: string, email: string, password: string) {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await client().post<LoginResponse>(API_ROUTES.auth.register, {
        username,
        email,
        password,
      });
      setToken(data.data.token);
    } catch (e) {
      console.error(e);
      const err = e as AxiosError<{ message?: string }>;
      error.value = err.response?.data?.message ?? err.message ?? 'Произошла ошибка';
      console.log(error.value);
    } finally {
      loading.value = false;
    }
  }

  async function login(username: string, password: string) {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await client().post<LoginResponse>(API_ROUTES.auth.login, {
        username,
        password,
      });
      setToken(data.data.token);
    } catch (e) {
      console.error(e);
      const err = e as AxiosError<{ message?: string }>;
      error.value = err.response?.data?.message ?? err.message ?? 'Произошла ошибка';

      console.log(error.value);
    } finally {
      loading.value = false;
    }
  }

  return { getToken, loading, error, login, createAccount, setToken, clearToken };
});
