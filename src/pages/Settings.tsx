import {
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { updateUser } from '../redux/userSlice';
import { useState } from 'react';

export default function Settings() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [form, setForm] = useState(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    dispatch(updateUser(form));
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Cadastro de Usuário
      </Typography>
      <Grid container spacing={2}>
        {['name', 'lastName', 'email', 'country'].map((field) => (
          <Grid item xs={12} sm={6} key={field}>
            <TextField
              fullWidth
              label={field}
              name={field}
              value={form[field as keyof typeof form]}
              onChange={handleChange}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSave}>
            Salvar
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
