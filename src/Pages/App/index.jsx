import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../../Context/auth'
import Home from '../Home'
import Login from '../Login'
// import Contrato from '../Contrato'
import Smart from '../../Components/CreateSmart'
import Dashboard from '../Dashboard'
import NotFound from '../NotFound'
import Create from '../Create'
import './index.css'


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/Contrato-Inteligente' element={<Home />} />
          <Route path='/Contrato-Inteligente/login' element={<Login />} />
          <Route path="/Contrato-Inteligente/contrato" element={<Dashboard />} />
          <Route path='/Contrato-Inteligente/smart' element={<Create />} />
          <Route path='/Contrato-Inteligente/*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
