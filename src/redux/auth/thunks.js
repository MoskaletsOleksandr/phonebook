import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from 'api/authApi';

export const loginThunk = createAsyncThunk('auth/login', body => {
  return login(body);
});
