import axios from 'axios';

const perPage = 10;
axios.defaults.baseURL = 'https://648dd8ac2de8d0ea11e848cd.mockapi.io';

export const fetchContacts = async page => {
  const { data } = await axios.get(`/contacts?p=${page}&l=${perPage}`);
  return data;
};

export const addContact = async contactData => {
  const { data } = await axios.post('/contacts', contactData);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

export const fetchFilteredContacts = async query => {
  const { data } = await axios.get(`/contacts?name=${query}`);
  console.log(data);
  return data;
};
