import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7108/api', // URL do seu backend
});

export default api;