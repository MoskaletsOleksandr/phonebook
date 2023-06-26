import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout } from 'api/authApi';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await login(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  try {
    await logout();
  } catch (error) {}
});
