import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const createFetchBaseQuery = ({
  baseUrl = "https://my-json-server.typicode.com/typicode/demo/",
  additionalConfig = {},
  useAuth= true
}: {
  baseUrl?: string;
  additionalConfig?: Record<string, any>;
  useAuth?: boolean
}) => {
  return fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("authToken");
      if (token && useAuth) {
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
