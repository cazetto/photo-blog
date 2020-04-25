import { axiosInstance } from './api';

const USERS_URI = '/users';
export function getAllUsers() {
  return axiosInstance.get(USERS_URI);
}
