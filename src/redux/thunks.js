import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  fetchFilteredContacts,
} from 'api/contactsApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (page, { rejectWithValue }) => {
    try {
      const contacts = await fetchContacts(page);
      return contacts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contactData, { rejectWithValue }) => {
    try {
      const contact = await addContact(contactData);
      return contact;
    } catch (e) {
      return rejectWithValue(e.message);
    }
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
