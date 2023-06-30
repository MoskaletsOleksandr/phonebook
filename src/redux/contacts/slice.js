import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import {
  createNewContactThunk,
  getContactsThunk,
  updateContactThunk,
} from './thunks';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  console.log(payload);

  state.isLoading = false;
  state.items = [];
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
};

const handleUpdateContactFulfilled = (state, { payload }) => {
  console.log(payload);

  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleGetContactsFulfilled)
      .addCase(createNewContactThunk.fulfilled, handleAddContactFulfilled)
      .addCase(updateContactThunk.fulfilled, handleUpdateContactFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { setFilter } = contactsSlice.actions;
