import { Post } from '@/config/stores/reducers/post/types';
import { api } from '@/config/api';

export const getPosts = async (): Promise<Post[]> => {
  const { data } = await api.get<Post[]>('/posts');
  return data;
};