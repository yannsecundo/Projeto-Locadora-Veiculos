import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001`,
});

export const getCarro = async () => {
  const data = await api.get('/carros/');
  return data;
} 