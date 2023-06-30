import { authInstance, deleteToken, setToken } from './axiosConfig';

export const register = async body => {
  return await authInstance.post('/signup', body);
};

export const login = async body => {
  const { data } = await authInstance.post('/login', body);
  if ('token' in data) setToken(`Bearer ${data.token}`);
  return data;
};

export const logout = async () => {
  await authInstance.post('/logout');
  deleteToken();
};

export const getCurrent = async () => {
  const { data } = await authInstance.get('/current');
  return data;
};
