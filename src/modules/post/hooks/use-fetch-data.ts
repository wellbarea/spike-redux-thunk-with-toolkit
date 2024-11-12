import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/config/stores/hooks';
import { fetchPosts } from '@/config/stores/actions';

export const useFetchData = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(({ post }) => post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return { data, loading, error };
};