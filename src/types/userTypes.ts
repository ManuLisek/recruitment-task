export interface User {
  id: number;
  key: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface UsersState {
  users: User[];
}
