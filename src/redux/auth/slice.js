import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { loginThunk, logoutThunk, refreshCurrentUserThunk } from './thunks';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleLoginFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.user = payload.user;
};

const handleLogoutFulfilled = state => {
  state.token = '';
  state.user = null;
  state.isLoading = false;
  state.error = null;
};

const handleRefreshCurrentUser = (state, { payload }) => {
  console.log(payload);
  state.user = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleLoginFulfilled)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled)
      .addCase(refreshCurrentUserThunk.fulfilled, handleRefreshCurrentUser)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
