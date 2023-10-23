import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useLocalStorage } from 'react-use'
import Home from '../Home'
import Login from '../Login'
import Contrato from '../Contrato'
import NotFound from '../NotFound'
import RutasProtegidas from '../../Utils/RutasProtegidas'
import './index.css'


function App() {

  const [user, setUser] = useLocalStorage('user')

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Contrato-Inteligente' element={<Home />} />
        <Route path='/Contrato-Inteligente/login' element={<Login />} />
        <Route element={<RutasProtegidas Activar={user} redireccion='/Contrato-Inteligente/login'/>}>
          <Route path="/Contrato-Inteligente/contrato" element={<Contrato />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
