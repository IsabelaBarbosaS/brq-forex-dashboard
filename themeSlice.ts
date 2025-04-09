import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  mode: 'light' | 'dark';
  primary: string;
  secondary: string;
}

const initialState: ThemeState = {
  mode: 'light',
  primary: '#1976d2',
  secondary: '#9c27b0',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setColors(state, action: PayloadAction<{ primary: string; secondary: string }>) {
      state.primary = action.payload.primary;
      state.secondary = action.payload.secondary;
    },
  },
});

export const { toggleMode, setColors } = themeSlice.actions;
export default themeSlice.reducer;