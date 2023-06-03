import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {

  const fields = [
  {"required": true, "label":"Número de documento", "type": "number", "placeholder":"1099259997", "helperText": "solo ingrese números sin puntos, comas ni espacios ejemplo: 1099259997"},
  {"required": true, "label":"Primer Nombre", "type": "text", "placeholder":"Dimitri", "helperText": "escriba su primer nombre ejemplo: Dimitri"},
  {"required": false, "label":"Segundo Nombre", "type": "text", "placeholder":"Alukard", "helperText": "si tiene segundo nombre escribalo ejemplo: Alukard"},
  {"required": true, "label":"Primer Apellido", "type": "text", "placeholder":"Peskov", "helperText": "escriba su primer apellido ejemplo: Peskov"},
  {"required": false, "label":"Segundo Apellido", "type": "text", "placeholder":"Mendeléyev", "helperText": "si tiene segundo apellido escribalo ejemplo: Mendeléyev"},
  {"required": false, "label":"Número de celular", "type": "number", "placeholder":"3236642669", "helperText": "solo ingrese su número de celular sin puntos, comas ni espacios ejemplo: 3236642669"},
  {"required": false, "label":"Número de telefono", "type": "number", "placeholder":"7438096", "helperText": "si tiene numero de telefono solo ingrese números sin puntos, comas ni espacios ejemplo: 7438096"},
  {"required": true, "label":"Correo electrónico", "type": "email", "placeholder":"correo@dominio.com", "helperText": "escriba su correo ejemplo: correo@dominio.com"},
  {"required": true, "label":"Título del PQR", "type": "text", "placeholder":"Solicitud garantía", "helperText": "escriba el titulo que desea para la PQR ejemplo: \" Solicitud garantía \""},
  {"required": true, "label":"Contenido del ticket", "type":"text", "placeholder":"el producto que he recibido ha tenido fallos antes de cumplir su garantía", "helperText": "escriba el contenido que desea para la PQR ejemplo: \" el producto que he recibido ha tenido fallos antes de cumplir su garantía\""},

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
              helperText={field.helperText}
              placeholder={field.placeholder}
            />
          ))
        }
      </div>
    </Box>
  );
}