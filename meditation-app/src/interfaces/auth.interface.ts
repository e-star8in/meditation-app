export interface LoginResponse {
  data: {
    user: {
      email: string;
      id: number;
      username: string;
    };
    token: string;
  };
}
