import axios from 'axios';

const api = axios.create({
  baseURL: 'seu-ip-local'
});

export default api;