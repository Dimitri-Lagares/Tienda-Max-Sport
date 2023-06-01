import * as React from 'react';
import Button from '@mui/material/Button';
import BackspaceIcon from '@mui/icons-material/Backspace';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" endIcon={<BackspaceIcon />}>
        Limpiar todos los campos
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Enviar PQR
      </Button>
    </Stack>
  );
}