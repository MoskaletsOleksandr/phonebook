import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewContact,
  deleteContact,
  getContacts,
  updateContact,
} from 'api/contactsApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createNewContactThunk = createAsyncThunk(
  'contacts/createContact',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await createNewContact(body);
      dispatch(getContactsThunk());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateContactThunk = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, body }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await updateContact(id, body);
      dispatch(getContactsThunk());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const data = await deleteContact(id);
      dispatch(getContactsThunk());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
