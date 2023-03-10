import { createApi } from "@reduxjs/toolkit/query/react";
import { realWorldBaseQuery } from "../../../core/api/real-world-api";

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: realWorldBaseQuery,
  endpoints: (build) => ({
    getGlobalFeed: build.query({
      query: () => ({
        url: "/articles",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetGlobalFeedQuery } = feedApi;
