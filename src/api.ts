import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-bylou.vercel.app/'
});

export default api;