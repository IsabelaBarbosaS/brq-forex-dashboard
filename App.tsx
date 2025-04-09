import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from './redux/hooks';
import { getTheme } from './styles/theme';
import Settings from './pages/Settings';
import Home from './pages/Home';

function App() {
  const { mode, primary, secondary } = useAppSelector((state) => state.theme);
  const theme = getTheme(mode, primary, secondary);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;