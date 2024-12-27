import { createApi } from "@reduxjs/toolkit/query/react";
import { Comment } from "./types";
import { createSelector } from "@reduxjs/toolkit";
import { createFetchBaseQuery, saveToken } from "../../_lib/utils";

export const commentSlice = createApi({
  reducerPath: "comment",
  baseQuery: createFetchBaseQuery({}),
  endpoints: (builder) => ({
    login: builder.mutation<any, void>({
      query: () => ({
        url: `comments`,
      }),
      transformResponse: (response) => {
        const data = {
          username: 'siapa', 
          token: 'sakjdsagdsadiuasydyisa'
        }

        saveToken(data.token)
        return data
      },
    }),
    getComments: builder.query<Comment[], void>({
      query: () => "comments",
    }),
  }),
});

export const selectComments = createSelector(
  [commentSlice.endpoints.getComments.select()],
  (commentsResult) => commentsResult.data
);

export const { useGetCommentsQuery, useLoginMutation } = commentSlice;
