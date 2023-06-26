import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users',
});

const setToken = token => {
  authInstance.defaults.headers.common['Authorization'] = token;
};

const deleteToken = () => {
  delete authInstance.defaults.headers.common['Authorization'];
};

export const register = async body => {
  return await authInstance.post('/signup', body);
};

export const login = async body => {
  const { data } = await authInstance.post('/login', body);
  if ('token' in data) setToken(`Bearer ${data.token}`);
  return data;
};

export const logout = async () => {
  const { data } = await authInstance.post('/logout');
  deleteToken();
  return data;
};
