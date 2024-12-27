import { createApi } from '@reduxjs/toolkit/query/react';
import { Post } from './types';
import { createSelector } from '@reduxjs/toolkit';
import { createFetchBaseQuery } from '../../_lib/utils';

export const postSlice = createApi({
  reducerPath: 'post',
  baseQuery: createFetchBaseQuery({}),
  endpoints: (builder) => ({ 
    getPosts: builder.query<Post[], void>({
      query: () => 'posts',
    }),
  }),
});

export const selectPost = createSelector(
  [postSlice.endpoints.getPosts.select()],
  (postResult) => postResult.data
);

export const { 
  useGetPostsQuery
} = postSlice;
