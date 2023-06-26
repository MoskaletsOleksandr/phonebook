import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { createNewContactThunk, getContactsThunk } from './thunks';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleGetContactsFulfilled = (state, { payload }) => {
  console.log(payload);
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const handleAddContactFulfilled = (state, { payload }) => {
  console.log(payload);
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, payload];
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleGetContactsFulfilled)
      .addCase(createNewContactThunk.fulfilled, handleAddContactFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending);
  },
});

export const contactsReducer = contactsSlice.reducer;