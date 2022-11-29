import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001`,
});

export const getCarro = async () => {
  const data = await api.get('/carros/');
  return data;
} 

export const createCarro = async (body) => { 
  const data = await api.post('/carros/cadastrar-carro', body);
  return data;
}

export const deletCarro = async (id) => { 
  const data = await api.delete(`/carros/deletar-carro/${id}`);
  return data;
}

export const attCarro = async (id) => { 
  await api.put(`/carros/atualizar-carro/${id}`);
  
}