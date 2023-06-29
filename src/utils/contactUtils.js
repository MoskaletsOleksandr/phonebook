export const checkContactExists = (contacts, name) =>
  contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) ||
  null;
