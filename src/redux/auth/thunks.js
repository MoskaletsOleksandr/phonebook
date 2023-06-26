import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrent, login, logout } from 'api/authApi';
import { setToken } from 'api/axiosConfig';

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

export const refreshCurrentUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log(persistedToken);

    if (persistedToken === '') {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    setToken(persistedToken);
    const data = await getCurrent();
    return data;
  }
);
