import {defineStore} from "pinia";
import {ref} from "vue";
import type {Meditation} from "@/interfaces/meditation.interface";
import {API_ROUTES, http} from "@/api.ts";

export const useMeditationsStore = defineStore('meditations', ()=>{
  const meditations = ref<Meditation[]>([]);

  async function fetchMeditations() {
    const {data} = await http.get(API_ROUTES.meditations);
    const res = data.data.meditations;

    console.log(data.data.meditations);
    meditations.value = res;
  }

  return {
    meditations, fetchMeditations
  }
});
