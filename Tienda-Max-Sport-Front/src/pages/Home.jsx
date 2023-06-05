import IconLabelButtons from '../components/IconLabelButtons'
import FormPropsTextFields from '../components/FormPropsTextFields'
import SelectOtherProps from '../components/SelectOtherProps'
import CountrySelect from '../components/CountrySelect'
import DepartmentSelect from '../components/DepartmentSelect'
import './Home.css'

function Home() {

  return (
    <>
      <IconLabelButtons/>
      <FormPropsTextFields/>
      <SelectOtherProps typeOfDocument={"Tipo de documento"} formHelperText={"Seleccione su tipo de documento, ejemplo: Cédula de ciudadanía"} value={["CC", "TI", "CE"]} menuItem={["Cédula de ciudadanía (CC)", "tarjeta de identidad (TI)", "Cédula de extrangeria (CE)"]}/>
      <SelectOtherProps typeOfDocument={"Tipo de ticket"} formHelperText={"Seleccione el tipo de ticket, ejemplo: devolucion"} value={["GAR", "DEV"]} menuItem={["Garantía", "Devolucion"]}/> 
      <CountrySelect/>
      <DepartmentSelect/>
    </>
  )
}

export default Home