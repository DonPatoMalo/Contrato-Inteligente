import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Login from '../Login'
import './index.css'

const AppRutas = () => useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> }
])


function App() {
  return (
    <BrowserRouter>
      <AppRutas/>
    </BrowserRouter>
  )
}

export default App
