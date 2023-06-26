import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFilteredContacts } from 'api/contactsApi';
import { deleteContact, getContacts } from 'api/contactsApiNew';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {}
  }
);

export const createNewContactThunk = createAsyncThunk(
  'contacts/createContact',
  async body => {
    try {
      const { data } = await createNewContactThunk(body);
      console.log(data);
      return data;
    } catch (error) {}
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await deleteContact(id);
      return contacts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getFilteredContactThunk = createAsyncThunk(
  'contacts/getFilteredContact',
  async (query, { rejectWithValue }) => {
    try {
      const contacts = await fetchFilteredContacts(query);
      return contacts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
