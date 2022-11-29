import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001`,
});

export const loginCliente = async (body) => {
  const data = await api.post('/clientes/login-cliente', body);
  return data;
}

export const createCliente = async (body) => { 
  const data = await api.post('/clientes/criar-cliente', body);
  return data;
}