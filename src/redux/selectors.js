import { createSelector } from 'reselect';

const selectContactsItems = state => state.contacts.items;
const selectError = state => state.contacts.error;
const selectIsLoading = state => state.contacts.isLoading;

export const selectContacts = createSelector(
  [selectContactsItems, selectError, selectIsLoading],
  (selectContactsItems, selectError, selectIsLoading) => {
    const sortedContacts = [...selectContactsItems].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return {
      items: sortedContacts,
      isLoading: selectIsLoading,
      error: selectError,
    };
  }
);
