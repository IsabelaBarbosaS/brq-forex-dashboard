import { Switch } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { toggleMode } from '../redux/themeSlice';

export default function ThemeToggle() {
  const mode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();

  return (
    <Switch
      checked={mode === 'dark'}
      onChange={() => dispatch(toggleMode())}
      inputProps={{ 'aria-label': 'Alternar tema' }}
    />
  );
}
