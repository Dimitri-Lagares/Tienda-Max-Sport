import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectOtherProps() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl required sx={{ m: 1, width: '25ch' }}>
        <InputLabel id="demo-simple-select-required-label">Tipo de documento</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          label="Tipo de documento"
          onChange={handleChange}s
          variant='outlined'
        >
          <MenuItem value={"CC"}>Cédula de ciudadanía (CC)</MenuItem>
          <MenuItem value={"PPT"}>Permiso por Protección Temporal (PPT)</MenuItem>
          <MenuItem value={"CE"}>Cédula de extrangeria (CE)</MenuItem>
        </Select>
        <FormHelperText>Seleccione su tipo de documento, ejemplo: Cédula de ciudadanía</FormHelperText>
      </FormControl>

      <FormControl required sx={{ m: 1, width: '25ch' }}>
        <InputLabel id="demo-simple-select-required-label">Tipo de ticket</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          label="Tipo de documento"
          onChange={handleChange}s
          variant='outlined'
        >
          <MenuItem value={"Gar"}>Garantía</MenuItem>
          <MenuItem value={"Dev"}>Devolucion</MenuItem>
        </Select>
        <FormHelperText>Seleccione el tipo de ticket, ejemplo: devolucion</FormHelperText>
      </FormControl>
    </div>
  );
}