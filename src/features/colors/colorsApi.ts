import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Color } from './colorsSlice';


export const colorsApi =createApi ({
    reducerPath: 'colorsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        getColors: builder.query<Color[], void>({
            query: () => 'colors.json',
        }),
    }),
});

export const { useGetColorsQuery } = colorsApi;