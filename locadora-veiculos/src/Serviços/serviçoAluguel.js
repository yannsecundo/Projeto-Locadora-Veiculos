import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001`,
});

export const getAluguel = async () => {
  const data = await api.get('/alugueis');
  return data;
} 

export const createAluguel = async (body) => { 
  const data = await api.post('/alugueis/criar-aluguel', body);
  return data;
}

export const deletAluguel = async (id) => { 
  const data = await api.delete(`/alugueis/delete-aluguel/${id}`);
  return data;
}