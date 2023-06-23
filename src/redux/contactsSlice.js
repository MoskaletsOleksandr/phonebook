import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
  getFilteredContactThunk,
} from './thunks';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const handleAddContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, payload];
};

const handleDeleteContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items.filter(item => item.id !== payload.id)];
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(getFilteredContactThunk.fulfilled, handleFulfilled)
      .addCase(addContactThunk.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContactFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending);
  },
});

export const contactsReducer = contactsSlice.reducer;
