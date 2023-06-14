import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pqr from './pages/Pqr'
import { useState } from 'react'

const App = () => {
  
  const [previousTitle, setPreviousTitle] = useState(document.title)
  
  window.addEventListener('blur', () => {
    document.title = 'Aqui te esperamos! 😏Vuelve😀'
  })
  
  window.addEventListener('focus', () => {
    document.title = previousTitle })

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