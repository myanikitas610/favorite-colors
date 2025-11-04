import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Color } from '../../types';

export interface ApiColor extends Color {
  fromApi: boolean; // Mark API colors as read-only
}

export const colorsApi = createApi({
  reducerPath: 'colorsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }), // public folder is served at root
  endpoints: (builder) => ({
    getColors: builder.query<ApiColor[], void>({
      query: () => 'colors.json', // Fetches from public/colors.json
      transformResponse: (response: Color[]) => {
        // Add `fromApi: true` to each color
        return response.map((color) => ({ ...color, fromApi: true }));
      },
    }),
  }),
});

export const { useGetColorsQuery } = colorsApi;
