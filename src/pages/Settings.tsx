import { Button, Typography, Paper, Box } from '@mui/material';
import { useState } from 'react';
import { useAppSelector } from '../redux/hooks';
import UserModal from '../components/UserModal';

export default function Settings() {
  const user = useAppSelector((state) => state.user);
  const [open, setOpen] = useState(false);

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Informações do Usuário
      </Typography>

      <Box mb={2}>
        <Typography><strong>Nome:</strong> {user.name}</Typography>
        <Typography><strong>Sobrenome:</strong> {user.lastName}</Typography>
        <Typography><strong>País:</strong> {user.country}</Typography>
        <Typography><strong>Email:</strong> {user.email}</Typography>
      </Box>

      <Button variant="contained" onClick={() => setOpen(true)}>
        Editar Informações
      </Button>

      <UserModal open={open} onClose={() => setOpen(false)} />
    </Paper>
  );
}
