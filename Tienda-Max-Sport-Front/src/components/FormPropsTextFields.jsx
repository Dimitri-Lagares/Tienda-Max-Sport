import { Box, TextField } from '@mui/material';
import { useState } from 'react';

export default function FormPropsTextFields({ required, label, type, placeholder, helperText }) {
  const [field, setField] = useState("amarillos")
  // console.log( field == "amarillo" ? "si" : "no");

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="on"
    >
      <div>
            <TextField
              required={required}
              id="outlined-required"
              label={label}
              variant="outlined"
              type={type}
              helperText={helperText}
              placeholder={placeholder}
              onChange={(e)=> setField(e.target.value)}
            />
      </div>
    </Box>
  );
}