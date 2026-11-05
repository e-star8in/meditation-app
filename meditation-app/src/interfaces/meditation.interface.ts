export interface Meditation {
  id: number;
  title: string;
  description: string;
  duration_min: number;
}

export interface MeditationResponse {
  meditations: Meditation[];
  status: string;
}
