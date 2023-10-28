import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../../Context/auth'
import Home from '../Home'
import Login from '../Login'
import Contrato from '../Contrato'
import NotFound from '../NotFound'
import './index.css'


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/Contrato-Inteligente' element={<Home />} />
          <Route path='/Contrato-Inteligente/login' element={<Login />} />
          <Route path="/Contrato-Inteligente/contrato" element={<Contrato />} />
          <Route path='/Contrato-Inteligente/*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
