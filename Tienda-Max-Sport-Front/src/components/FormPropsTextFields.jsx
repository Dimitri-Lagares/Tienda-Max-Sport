import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {

  const fields = [
  {"required": true, "label":"Número de documento", "type": "number", "helperText": "solo ingrese números sin puntos, comas ni espacios ejemplo: 1099259997"},
  {"required": true, "label":"Primer Nombre", "type": "text", "helperText": "escriba su primer nombre ejemplo: Dimitri"},
  {"required": false, "label":"Segundo Nombre", "type": "text", "helperText": "si tiene segundo nombre escribalo ejemplo: Alukard"},
  {"required": true, "label":"Primer Apellido", "type": "text", "helperText": "escriba su primer apellido ejemplo: Peskov"},
  {"required": false, "label":"Segundo Apellido", "type": "text", "helperText": "si tiene segundo apellido escribalo ejemplo: Mendeléyev"},
  {"required": false, "label":"Número de celular", "type": "number", "helperText": "solo ingrese su número de celular sin puntos, comas ni espacios ejemplo: 3236642669"},
  {"required": false, "label":"Número de telefono", "type": "number", "helperText": "si tiene numero de telefono solo ingrese números sin puntos, comas ni espacios ejemplo: 7438096"},
  {"required": true, "label":"Correo electrónico", "type": "email", "helperText": "escriba su correo ejemplo: correo@dominio.com"},
  {"required": true, "label":"Título del PQR", "type": "text", "helperText": "escriba el titulo que desea para la PQR ejemplo: \" Solicitud garantía \""},
  {"required": true, "label":"Contenido del ticket", "type": "text", "helperText": "escriba el contenido que desea para la PQR ejemplo: \" el producto que he recibido ha tenido fallos antes de cumplir su garantía\""},

]

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
        {
          fields.map((field, index) => (
            <TextField
              required={field.required}
              id="outlined-required"
              label={field.label}
              variant="outlined"
              type={field.type}
              placeholder={field.helperText}
            />
          ))
        }
      </div>
    </Box>
  );
}