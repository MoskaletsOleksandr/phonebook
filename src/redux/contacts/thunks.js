import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from 'api/contactsApiNew';

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
