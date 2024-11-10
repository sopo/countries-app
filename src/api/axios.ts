import axios, { CreateAxiosDefaults } from 'axios';
const axiosConfig: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
};
const httpClient = axios.create(axiosConfig);
export default httpClient;
