export interface Profile {
  id: number;
  email: string;
  username: string;
  last_login_at: string;
}

export interface ProfileResponse {
  user: Profile;
}
