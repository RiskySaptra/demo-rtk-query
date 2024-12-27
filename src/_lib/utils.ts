import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const createFetchBaseQuery = ({
  baseUrl = "https://my-json-server.typicode.com/typicode/demo/", 
  additionalConfig = {},
}: { baseUrl?: string; additionalConfig?: Record<string, any> }) => {
  return fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      Object.entries(headers).forEach(([key, value]) => {
        headers.set(key, value);
      });
      return headers;
    },
    ...additionalConfig,
  });
};
