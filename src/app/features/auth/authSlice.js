// src/features/auth/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  email: '',
  password: '',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      // Mock authentication logic (you can replace this with actual API calls)
      if (email === '' && password === '') {
        state.isLoggedIn = true;
        state.email = email;
        state.password = password;
        state.error = null;
      } else {
        state.error = 'Invalid email or password';
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.email = '';
      state.password = '';
      state.error = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
