import { createSlice } from '@reduxjs/toolkit';
import { authInitialState } from './initialState';
import {
  loginThunk,
  logoutThunk,
  refreshCurrentUserThunk,
  registerThunk,
  updateAvatarThunk,
} from './thunks';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleRegisterFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.user = payload.user;
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

const handleUpdateAvatarFulfilled = (state, { payload }) => {
  state.user.avatarURL = payload.avatar;
  // state.isLoading = false;
  // state.error = null;
};

const handleRefreshCurrentUserFulfilled = (state, { payload }) => {
  state.user = payload;
};

const handleRefreshCurrentUserRejected = (state, { payload }) => {
  state.token = '';
  state.user = null;
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, handleRegisterFulfilled)
      .addCase(loginThunk.fulfilled, handleLoginFulfilled)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled)
      .addCase(updateAvatarThunk.fulfilled, handleUpdateAvatarFulfilled)
      .addCase(
        refreshCurrentUserThunk.fulfilled,
        handleRefreshCurrentUserFulfilled
      )
      .addCase(
        refreshCurrentUserThunk.rejected,
        handleRefreshCurrentUserRejected
      )
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
