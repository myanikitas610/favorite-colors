import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Color } from '../../types';

// Redux state interface
interface ColorsState {
  colors: Color[];
}

// Initial local colors state
const initialState: ColorsState = {
  colors: [],
};

export const colorsSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {
    // Add a new color
    addColor: (state, action: PayloadAction<Color>) => {
      state.colors.push(action.payload);
    },
    // Remove a color by id
    removeColor: (state, action: PayloadAction<number>) => {
      state.colors = state.colors.filter(
        (color) => color.id !== action.payload
      );
    },
  },
});

// Export actions and reducer
export const { addColor, removeColor } = colorsSlice.actions;
export default colorsSlice.reducer;
