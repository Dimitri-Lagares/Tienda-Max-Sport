import EnhancedTable from '../components/EnhancedTable'
import IconLabelButtons from '../components/IconLabelButtons'
import FormPropsTextFields from '../components/FormPropsTextFields'
import SelectOtherProps from '../components/SelectOtherProps'
import CountrySelect from '../components/CountrySelect'
import DepartmentSelect from '../components/DepartmentSelect'
import './Home.css'

function Home() {

  return (
    <>
      <EnhancedTable/>
      <IconLabelButtons/>
      <FormPropsTextFields/>
      <SelectOtherProps/>
      <CountrySelect/>
      <DepartmentSelect/>
    </>
  )
}

export default Home