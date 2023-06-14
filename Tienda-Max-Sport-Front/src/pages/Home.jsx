import IconLabelButtons from '../components/IconLabelButtons'
import FormPropsTextFields from '../components/FormPropsTextFields'
import SelectAutoWidth from '../components/SelectAutoWidth'
import CountrySelect from '../components/CountrySelect'
import DepartmentSelect from '../components/DepartmentSelect'
import './Home.css'

function Home() {
  
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
  {"required": true, "label":"Contenido del ticket", "type":"text", "placeholder":"el producto que he recibido ha tenido fallos antes de cumplir su garantía", "helperText": "escriba el contenido que desea para la PQR ejemplo: \" el producto que he recibido ha tenido fallos antes de cumplir su garantía\""}
]
  return (
    <>
    {
      fields.map((item, index)=>{
        return(
          <FormPropsTextFields key={index} required={item.required} label={item.label} type={item.type} placeholder={item.placeholder} helperText={item.helperText}/>
        )
      })
    }

      {/* <IconLabelButtons/> */}
      {/* <SelectAutoWidth 
        typeOfDocument={"Tipo de documento"} 
        formHelperText={"Seleccione su tipo de documento, ejemplo: Cédula de ciudadanía"}
        item={
        {
        value:["CC", "TI", "CE"],
        menuItem:["Cédula de ciudadanía (CC)", "tarjeta de identidad (TI)", "Cédula de extrangeria (CE)"]
        }
      }/>

      <SelectAutoWidth 
        typeOfDocument={"Tipo de ticket"}
        formHelperText={"Seleccione el tipo de ticket, ejemplo: devolucion"} 
        item={{
        value:["GAR", "DEV"],
        menuItem:["Garantía", "Devolucion"]
      }}/> 
      
      <CountrySelect/>
      <DepartmentSelect/> */}
    </>
  )
}

export default Home