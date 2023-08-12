import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'http://localhost:8000/users',
  // baseURL: 'https://connections-api.herokuapp.com/users',
});

export const contactsInstance = axios.create({
  baseURL: 'http://localhost:8000/contacts',
  // baseURL: 'https://connections-api.herokuapp.com/contacts',
});

// при поверненні на старий бекенд треба в списку контактів та у
//контактФорм виправити передачу ідентифікатора, бо на старому беці там немає символу _

export const setToken = token => {
  console.log(token);
  if (token) {
    authInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    contactsInstance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${token}`;
  } else {
    deleteToken();
  }
};

export const deleteToken = () => {
  delete authInstance.defaults.headers.common['Authorization'];
  delete contactsInstance.defaults.headers.common['Authorization'];
};
