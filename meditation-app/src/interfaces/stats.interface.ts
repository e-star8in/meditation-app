export interface Stats {
  id: number;
  created_at: string;
  updated_at: string;
  user_id: number;
  date: string;
  duration_min: number;
  feeling_calm: number;
  feeling_relax: number;
  feeling_focus: number;
  feeling_anxiety: number;
}

export interface StatsResponse {
  stats: Stats[];
  summary: {
    total_anxiety: number;
    total_calm: number;
    total_duration: number;
    total_focus: number;
    total_relax: number;
    total_minutes: number;
  };
}
