import IconLabelButtons from '../components/IconLabelButtons'
import FormPropsTextFields from '../components/FormPropsTextFields'
import SelectOtherProps from '../components/SelectOtherProps'
import CountrySelect from '../components/CountrySelect'
import DepartmentSelect from '../components/DepartmentSelect'
import './Home.css'
import { MenuItem } from '@mui/material'

function Home() {

  return (
    <>
      <IconLabelButtons/>
      <FormPropsTextFields/>
      <SelectOtherProps typeOfDocument={"Tipo de documento"} formHelperText={"Seleccione su tipo de documento, ejemplo: Cédula de ciudadanía"} value={"CC"} menuItem={["Cédula de ciudadanía (CC)", "tarjeta de identidad (TI)", "Cédula de extrangeria (CE)"]}/>
      <CountrySelect/>
      <DepartmentSelect/>
    </>
  )
}

export default Home