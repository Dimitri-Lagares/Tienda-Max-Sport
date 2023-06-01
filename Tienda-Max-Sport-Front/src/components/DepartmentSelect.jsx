import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function DepartmentSelect() {
  return (
    <Autocomplete
      id="department-select-demo"
      sx={{ width: 300 }}
      options={departments}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={option.flag}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Selecciona un departamento"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

const departments = [
    { code: 'CUN', label: 'Cundinamarca', phone: '601', flag: "/src/assets/departments-flags/Cundinamarca.webp" },
    { code: 'BOG', label: 'Bogotá', phone: '601', flag: "/src/assets/departments-flags/Bogotá.webp" },
    { code: 'CAU', label: 'Cauca', phone: '602', flag: "/src/assets/departments-flags/Cauca.webp" },
    { code: 'NAR', label: 'Nariño', phone: '602', flag: "/src/assets/departments-flags/Nariño.webp" },
    { code: 'VAC', label: 'Valle', phone: '602', flag: "/src/assets/departments-flags/Valle_del_Cauca.webp" },
    { code: 'ANT', label: 'Antioquia', phone: '604', flag: "/src/assets/departments-flags/Antioquia.webp" },
    { code: 'COR', label: 'Córdoba ', phone: '604', flag: "/src/assets/departments-flags/Córdoba.webp" },
    { code: 'CHO', label: 'Chocó', phone: '604', flag: "/src/assets/departments-flags/Chocó.webp" },
    { code: 'ATL', label: 'Atlántico', phone: '605', flag: "/src/assets/departments-flags/Atlántico.webp" },
    { code: 'BOL', label: 'Bolívar', phone: '605', flag: "/src/assets/departments-flags/Bolívar.png" },
    { code: 'CES', label: 'Cesar', phone: '605', flag: "/src/assets/departments-flags/Cesar.webp" },
    { code: 'LAG', label: 'La Guajira', phone: '605', flag: "/src/assets/departments-flags/La_Guajira.png" },
    { code: 'MAG', label: 'Magdalena', phone: '605', flag: "/src/assets/departments-flags/Magdalena.webp" },
    { code: 'SUC', label: 'Sucre', phone: '605', flag: "/src/assets/departments-flags/Sucre.png" },
    { code: 'CAL', label: 'Caldas', phone: '606', flag: "/src/assets/departments-flags/Caldas.png" },
    { code: 'QUI', label: 'Quindío', phone: '606', flag: "/src/assets/departments-flags/Quindío.webp" },
    { code: 'RIS', label: 'Risaralda', phone: '606', flag: "/src/assets/departments-flags/Risaralda.webp" },
    { code: 'ARA', label: 'Arauca', phone: '607', flag: "/src/assets/departments-flags/Arauca.webp" },
    { code: 'NSA', label: 'Norte de Santander', phone: '607', flag: "/src/assets/departments-flags/Norte_de_Santander.webp" },
    { code: 'SAN', label: 'Santander', phone: '607', flag: "/src/assets/departments-flags/Santander.webp" },
    { code: 'AMA', label: 'Amazonas', phone: '608', flag: "/src/assets/departments-flags/Amazonas.webp" },
    { code: 'BOY', label: 'Boyacá', phone: '608', flag: "/src/assets/departments-flags/Boyacá.webp" },
    { code: 'CAS', label: 'Casanare', phone: '608', flag: "/src/assets/departments-flags/Casanare.webp" },
    { code: 'CAQ', label: 'Caquetá', phone: '608', flag: "/src/assets/departments-flags/Caquetá.webp" },
    { code: 'GUV', label: 'Guaviare', phone: '608', flag: "/src/assets/departments-flags/Guaviare.webp" },
    { code: 'GUA', label: 'Guainía', phone: '608', flag: "/src/assets/departments-flags/Guainía.png" },
    { code: 'HUI', label: 'Huila', phone: '608', flag: "/src/assets/departments-flags/Huila.webp" },
    { code: 'MET', label: 'Meta', phone: '608', flag: "/src/assets/departments-flags/Meta.webp" },
    { code: 'TOL', label: 'Tolima', phone: '608', flag: "/src/assets/departments-flags/Tolima.webp" },
    { code: 'PUT', label: 'Putumayo', phone: '608', flag: "/src/assets/departments-flags/Putumayo.webp" },
    { code: 'SAP', label: 'San Andrés', phone: '608', flag: "/src/assets/departments-flags/San_Andrés_y_Providencia.png" },
    { code: 'VAU', label: 'Vaupés', phone: '608', flag: "/src/assets/departments-flags/Vaupés.webp" },
    { code: 'VID', label: 'Vichada ', phone: '608', flag: "/src/assets/departments-flags/Vichada.webp" },
];