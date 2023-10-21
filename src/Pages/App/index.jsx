import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Login from '../Login'
import Contrato from '../Contrato'
import NotFound from '../NotFound'
import './index.css'

const AppRutas = () => useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/contrato', element: <Contrato /> },
    { path: '*', element: <NotFound /> },
])


function App() {
  return (
    <BrowserRouter>
      <AppRutas/>
    </BrowserRouter>
  )
}

export default App
