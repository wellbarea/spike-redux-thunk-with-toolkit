import { createSlice } from '@reduxjs/toolkit';
import { InitialStateProps } from './types';
import { fetchPosts } from '../../actions';

export const initialState: InitialStateProps = {
  data: [],
  loading: false,
  error: null,
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchPosts.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          });
      },
});


export const postSlicReducer = postSlice.reducer;