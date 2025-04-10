import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'currency', headerName: 'Moeda', flex: 1 },
  { field: 'value', headerName: 'Valor (em BRL)', type: 'number', flex: 1 },
  { field: 'timestamp', headerName: 'Horário', flex: 1 },
];

interface Props {
  rows: { id: number; currency: string; value: number; timestamp: string }[];
}

export default function CurrencyTable({ rows }: Props) {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        disableSelectionOnClick
        autoHeight
      />
    </Paper>
  );
}
