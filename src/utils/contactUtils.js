export const checkContactExists = (contacts, name) => {
  const normalizedName = name.toLowerCase();

  return contacts.some(
    contact => contact.name.toLowerCase() === normalizedName
  );
};
