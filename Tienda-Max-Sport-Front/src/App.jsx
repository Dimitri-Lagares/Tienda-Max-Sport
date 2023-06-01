import EnhancedTable from './components/EnhancedTable'
import IconLabelButtons from './components/IconLabelButtons'
import FormPropsTextFields from './components/FormPropsTextFields'
import SelectOtherProps from './components/SelectOtherProps'
import CountrySelect from './components/CountrySelect'
import DepartmentSelect from './components/DepartmentSelect'

import './App.css'

function App() {

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

export default App
