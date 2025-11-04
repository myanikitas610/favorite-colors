import { configureStore } from '@reduxjs/toolkit';
import colorsReducer from '../features/colors/colorsSlice';
import { colorsApi } from '../features/colors/colorsApi';

export const store = configureStore({
    reducer:{
        colors: colorsReducer,
        [colorsApi.reducerPath]: colorsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(colorsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
