import Dashboard from "../../Components/Dashboard"
import UserInformation from "../../Components/UserInformation"
import { AuthProvider } from '../../Context/auth'


function Instrucciones() {
      return (
            <AuthProvider>
                  <Dashboard />
                  <UserInformation />
            </AuthProvider>
      )
}

export default Instrucciones