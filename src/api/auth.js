import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users',
});

export const register = async body => {
  return await instance.post('/signup', body);
};

export const login = async body => {
  return await instance.post('/login', body);
};
