import { contactsInstance } from './axiosConfig';

export const getContacts = async () => {
  const { data } = await contactsInstance.get();
  return data;
};

export const createNewContact = async body => {
  const { data } = await contactsInstance.post('', body);
  return data;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  console.log(data);
};

export const updateContact = async (id, body) => {
  const { data } = await contactsInstance.patch(`/${id}`, body);
  console.log(data);
  return data;
};
