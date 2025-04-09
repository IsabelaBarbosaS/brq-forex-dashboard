import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark', primary: string, secondary: string) =>
  createTheme({
    palette: {
      mode,
      primary: { main: primary },
      secondary: { main: secondary },
    },
  });
