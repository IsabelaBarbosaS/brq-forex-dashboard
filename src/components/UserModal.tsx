import {
  Box, Button, Fade, Modal, TextField, Typography
} from '@mui/material';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { updateUser } from '../redux/userSlice';

const style = {
  position: 'absolute', top: '50%', left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400, bgcolor: 'background.paper',
  borderRadius: 2, boxShadow: 24, p: 4,
};

export default function UserModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [form, setForm] = useState(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    dispatch(updateUser(form));
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Fade in={open}>
        <Box sx={style}>
          <Typography variant="h6" gutterBottom>Editar Usuário</Typography>
          <TextField fullWidth margin="normal" label="Nome" name="name" value={form.name} onChange={handleChange} />
          <TextField fullWidth margin="normal" label="Sobrenome" name="lastName" value={form.lastName} onChange={handleChange} />
          <TextField fullWidth margin="normal" label="País" name="country" value={form.country} onChange={handleChange} />
          <TextField fullWidth margin="normal" label="E-mail" name="email" value={form.email} onChange={handleChange} />
          <Box textAlign="right" mt={2}>
            <Button variant="contained" onClick={handleSave}>Salvar</Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
