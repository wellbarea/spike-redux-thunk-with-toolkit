import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "@/services/posts";
import { Post } from "@/config/stores/reducers/post/types";

export const fetchPosts = createAsyncThunk<Post[], void>(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      return await getPosts();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);