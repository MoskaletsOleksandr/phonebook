import { createSelector } from 'reselect';

const selectContactsItems = state => state.contacts.items;
const selectContactsError = state => state.contacts.error;
const selectContactsIsLoading = state => state.contacts.isLoading;
const selectContactsFilter = state => state.contacts.filter;

export const selectContacts = createSelector(
  [
    selectContactsItems,
    selectContactsError,
    selectContactsIsLoading,
    selectContactsFilter,
  ],
  (
    selectContactsItems,
    selectContactsError,
    selectContactsIsLoading,
    selectContactsFilter
  ) => {
    const sortedContacts = [...selectContactsItems].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return {
      items: sortedContacts,
      isLoading: selectContactsIsLoading,
      error: selectContactsError,
      filter: selectContactsFilter,
    };
  }
);

const selectAuthToken = state => state.auth.token;
const selectAuthUser = state => state.auth.user;
const selectAuthIsLoading = state => state.auth.isLoading;
const selectAuthError = state => state.auth.error;

export const selectAuth = createSelector(
  [selectAuthToken, selectAuthUser, selectAuthIsLoading, selectAuthError],
  (selectAuthToken, selectAuthUser, selectAuthIsLoading, selectAuthError) => {
    return {
      token: selectAuthToken,
      user: selectAuthUser,
      isLoading: selectAuthIsLoading,
      error: selectAuthError,
    };
  }
);
