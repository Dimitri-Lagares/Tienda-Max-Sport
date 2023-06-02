import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pqr from './pages/Pqr'


var isAllowed = true
let previousTitle = document.title

window.addEventListener('blur', () => {
  previousTitle = document.title
  document.title = 'Aqui te esperamos! 😏Vuelve😀'
})

window.addEventListener('focus', () => {
  document.title = previousTitle })

const functionToGetchildData = (validateRouteLogin) => {
  if (validateRouteLogin === ''){
    isAllowed=true
  } else {
    isAllowed=false
  }
}

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='pqr' element={<Pqr/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App