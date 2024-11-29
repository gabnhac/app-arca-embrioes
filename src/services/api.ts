import axios from 'axios';

export const api = axios.create({
    timeout: 5000
})

export function configureApi(ipAPI: string) {
    api.defaults.baseURL = `http://${ipAPI}:8000/api`;
}
