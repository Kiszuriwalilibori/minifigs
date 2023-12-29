import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Results } from "types";
import { BASE_URL } from "../../../config";

export const partsApi = createApi({
    reducerPath: "partsApi",
    refetchOnReconnect: true,
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: builder => ({
        getParts: builder.query({
            query: name => `/${name}/parts/?key=${process.env.REACT_APP_MINIFIGS_KEY}`,
            transformResponse: (response: Results) => {
                return response?.results ? response.results : [];
            },
        }),
    }),
});

export const { useGetPartsQuery } = partsApi;
