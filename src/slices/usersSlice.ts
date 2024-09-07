import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../api/axiosConfig';
import { UsersState } from '../types/userTypes';

const initialState: UsersState = {
  users: [],
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axiosConfig.getUsersData();
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default usersSlice.reducer;
