import { useEffect, useState } from 'react';
import CurrencyTable from '../components/CurrencyTable';
import { Typography, Box } from '@mui/material';
import { useAppSelector } from '../redux/hooks';

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const user = useAppSelector(state => state.user);

  useEffect(() => {
    // Mock temporário
    const exampleData = [
      { id: 1, currency: 'USD', value: 4.85, timestamp: '10/06/2023 às 22:30' },
      { id: 2, currency: 'EUR', value: 5.27, timestamp: '10/06/2023 às 22:30' },
    ];
    setData(exampleData);
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Olá, {user.name || 'usuário'}!
      </Typography>
      <CurrencyTable rows={data} />
    </Box>
  );
}
