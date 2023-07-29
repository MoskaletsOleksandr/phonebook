import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrent, login, logout, register } from 'api/authApi';
import { deleteToken, setToken } from 'api/axiosConfig';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      const data = await register(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logout();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshCurrentUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === '' || null) {
      return thunkAPI.rejectWithValue();
    }

    setToken(persistedToken);
    try {
      const data = await getCurrent();
      return data;
    } catch (error) {
      deleteToken();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
