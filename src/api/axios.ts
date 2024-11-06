import axios, {CreateAxiosDefaults} from 'axios';
const axiosConfig: CreateAxiosDefaults= {
    baseURL: import.meta.env.VITE_BASE_URL,
}
const httpClient = axios.create(axiosConfig);
export default httpClient;
