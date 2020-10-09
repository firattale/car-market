import axios from 'axios';

const baseURL = 'https://auto1-mock-server.herokuapp.com/api/';

const api = () => {
  const instance = axios.create({ baseURL, timeout: 30000 });
  return instance;
};

export default api;
