import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import './index.css'

const AppRutas = () => useRoutes([
    { path: '/', element: <Home /> }
])


function App() {
  return (
    <BrowserRouter>
      <AppRutas/>
    </BrowserRouter>
  )
}

export default App
