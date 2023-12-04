import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../../Context/auth'
import Home from '../Home'
import Login from '../Login'
import Instrucciones from '../Instrucciones'
import CreacionContrato from '../CreacionContrato'
import FirmarContrato from '../FirmarContrato'
import InformacionContrato  from '../InformacionContrato'
import NotFound from '../NotFound'
import './index.css'


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/Contrato-Inteligente' element={<Home />} />
          <Route path='/Contrato-Inteligente/login' element={<Login />} />
          <Route path="/Contrato-Inteligente/contrato" element={<Instrucciones />} />
          <Route path='/Contrato-Inteligente/create' element={<CreacionContrato />} />
          <Route path='/Contrato-Inteligente/firmar' element={<FirmarContrato />} />
          <Route path='/Contrato-Inteligente/historial' element={<InformacionContrato />} />
          <Route path='/Contrato-Inteligente/*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
