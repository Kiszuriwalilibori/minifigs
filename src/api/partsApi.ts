import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Results } from "types";
export const partsApi = createApi({
    reducerPath: "partsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://rebrickable.com/api/v3/lego/minifigs/" }),
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
