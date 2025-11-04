import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Color } from '../../types';

interface ColorsState{
    colors: Color[];
}

const initialState: ColorsState = {
    colors: [],
};

export const colorsSlice = createSlice({
    name: 'colors',
    initialState,
    reducers:{
        addColor: (state, action: PayloadAction<Color>) =>{
            state.colors.push(action.payload);
        },
        removeColor: (state, action: PayloadAction<number>) => {
            state.colors = state.colors.filter(color => color.id !== action.payload);
        },
    },
});

export const { addColor, removeColor } = colorsSlice.actions;
export default colorsSlice.reducer;