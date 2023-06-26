import { contactsInstance } from './axiosConfig';

export const getContacts = async () => {
  const { data } = await contactsInstance.get();
  return data;
};

export const createNewContact = async body => {
  const { data } = await contactsInstance.post('', body);
  console.log(data);
  return data;
};
