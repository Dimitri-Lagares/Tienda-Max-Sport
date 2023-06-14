import { InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@mui/material';
import { useState } from 'react';

export default function SelectAutoWidth({typeOfDocument, formHelperText, item}) {
  const [age, setAge] = useState('');
  const [info, setInfo] = useState(item)

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(item);
  return (
    <div>
      <FormControl sx={{ m: 1, width: '22ch' }}>
        <InputLabel id="demo-simple-select-autowidth-label">{typeOfDocument}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          required
          label={typeOfDocument}
          variant='outlined'
        >
        {/* { 
          info.map((item, index) =>{
            return(
              <MenuItem
              key={index}
              value={item}>
              {item}
              </MenuItem>
            )
          })
        } */}
        </Select>
        <FormHelperText>{formHelperText}</FormHelperText>
      </FormControl>
    </div>
  );
}