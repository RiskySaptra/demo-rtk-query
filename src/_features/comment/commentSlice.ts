import { createApi } from "@reduxjs/toolkit/query/react";
import { Comment } from "./types";
import { createSelector } from "@reduxjs/toolkit";
import { createFetchBaseQuery } from "../../_lib/utils"; 

export const commentSlice = createApi({
  reducerPath: "comment",
  baseQuery:createFetchBaseQuery({}),
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], void>({
      query: () => "comments",
    }),
  }), 
});

export const selectComments = createSelector(
  [commentSlice.endpoints.getComments.select()],
  (commentsResult) => commentsResult.data
);

export const { useGetCommentsQuery } = commentSlice;
