import { axiosInstance } from './api';

const USERS_URI = '/users';
export function getAllUsers() {
  return axiosInstance.get(USERS_URI);
}

const USER_PHOTOS_URI = '/photos';
export function getUserPhotos(userId: string) {
  return axiosInstance.get(`${USER_PHOTOS_URI}?albumId=${userId}`);
}

const USER_POSTS_URI = '/posts';
export function getUserPosts(userId: string) {
  return axiosInstance.get(`${USER_POSTS_URI}?userId=${userId}`);
}
