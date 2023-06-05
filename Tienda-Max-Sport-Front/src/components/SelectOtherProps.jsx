import { useState } from 'react';
import { InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@mui/material';
import React from 'react'

const SelectOtherProps = ({typeOfDocument, formHelperText, value, menuItem}) => {
  const [item, setItem] = useState([])
  const [age, setAge] = useState("")
  console.log(typeOfDocument);
  console.log(formHelperText);
  console.log(value);
  console.log(menuItem);
  console.log("hola",item);
    const handleChange = (event) => {
    setAge(event.target.value);
  };

  //   setItem(state => {
  //   state=[...menuItem, ...value]
  //   return state;
  // })

  return (
    <div>SelectOtherProps</div>
  )
}

export default SelectOtherProps

// export default function SelectOtherProps( {typeOfDocument, formHelperText, valor, menuItem}  ) {
//   const [age, setAge] = useState('');
//   const [item, setItem] = useState([])
  
//   // const handleChange = (event) => {
//   //   setAge(event.target.value);
//   // };
  
//   setItem(state => {
//     state=[menuItem, valor]
//     return state;
//   })

//   return (
//     <div>
//       <FormControl required sx={{ m: 1, width: '25ch' }}>
//         <InputLabel id="demo-simple-select-required-label">{typeOfDocument}</InputLabel>
//         <Select
//           labelId="demo-simple-select-required-label"
//           id="demo-simple-select-required"
//           value={age}
//           label={typeOfDocument}
//           onChange={handleChange}
//           variant='outlined'
//         >
//           { 
//             item.map(item =>
//               <MenuItem key={item} value={valor}>{item}</MenuItem>
//             )
//           }

//         </Select>
//         <FormHelperText>{formHelperText}</FormHelperText>
//       </FormControl>
//       </div>
// );
// }
