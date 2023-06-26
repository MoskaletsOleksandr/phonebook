export const checkContactExists = (contacts, name) => {
  const normalizedName = name.toLowerCase();

  const foundContact = contacts.find(
    contact => contact.name.toLowerCase() === normalizedName
  );

  return foundContact ? foundContact.id : null;
};
