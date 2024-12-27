import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const createFetchBaseQuery = ({
  baseUrl = "https://my-json-server.typicode.com/typicode/demo/",
  additionalConfig = {},
}: {
  baseUrl?: string;
  additionalConfig?: Record<string, any>;
}) => {
  return fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("authToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    ...additionalConfig,
  });
};

export const saveToken = (token: string) => {
  localStorage.setItem("authToken", token);
};
