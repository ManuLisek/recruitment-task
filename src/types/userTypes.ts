export interface UserColumns {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface User extends UserColumns {
  id: number;
  key: number;
}

export interface UsersState {
  users: User[];
  filters: UserColumns;
  filteredUsers: User[];
  loading: boolean;
  error: string | null;
}
