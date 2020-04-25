import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/';
export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});
