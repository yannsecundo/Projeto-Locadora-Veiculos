import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001`,
});

export const loginFuncionario = async (body) => {
  console.log(body);
  const data = await api.post('/funcionarios/login', body);
  return data;
}

export const createFunc = async (body) => { 
  const data = await api.post('/funcionarios/create-funcionario/', body);
  return data;
}