import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosConfig from '../api/axiosConfig';
import { UsersState, User, UserColumns } from '../types/userTypes';

const initialState: UsersState = {
  users: [],
  filters: {
    name: '',
    username: '',
    email: '',
    phone: '',
  },
  filteredUsers: [],
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axiosConfig.getUsersData();
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{ key: keyof UserColumns; value: string }>,
    ) => {
      state.filters[action.payload.key] = action.payload.value;

      state.filteredUsers = state.users.filter(
        (user: User) =>
          user.name.toLowerCase().includes(state.filters.name.toLowerCase()) &&
          user.username
            .toLowerCase()
            .includes(state.filters.username.toLowerCase()) &&
          user.email
            .toLowerCase()
            .includes(state.filters.email.toLowerCase()) &&
          user.phone.toLowerCase().includes(state.filters.phone.toLowerCase()),
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.filteredUsers = action.payload;
    });
  },
});

export const { setFilter } = usersSlice.actions;
export default usersSlice.reducer;
