import {defineStore} from "pinia";
import {ref} from "vue";
import type {Meditation} from "@/interfaces/meditation.interface";
import {API_ROUTES, http} from "@/api.ts";

export const useMeditationsStore = defineStore('meditations', () => {
  const meditations = ref<Meditation[]>([]);

  async function fetchMeditations() {
    try {
      const {data} = await http.get(API_ROUTES.meditations);
      meditations.value = data.data.meditations;

    } catch (error) {
      console.error(error)
    }
  }

  return {
    meditations, fetchMeditations
  }
});
