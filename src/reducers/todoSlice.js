import { createSlice } from '@reduxjs/toolkit';

export const toDoSlice = createSlice({
  name: 'todo',
  initialState: {
    isAuth: false,
  },
  reducers: {
    login: (state) => {
      state.isAuth = !state.isAuth;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
});

export const { login, logout } = toDoSlice.actions;

export default toDoSlice.reducer;
