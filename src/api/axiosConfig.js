import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users',
});

export const contactsInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/contacts',
});

export const setToken = token => {
  if (token) {
    authInstance.defaults.headers.common['Authorization'] = token;
    contactsInstance.defaults.headers.common['Authorization'] = token;
  } else {
    deleteToken();
  }
};

export const deleteToken = () => {
  delete authInstance.defaults.headers.common['Authorization'];
  delete contactsInstance.defaults.headers.common['Authorization'];
};
