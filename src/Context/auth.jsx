import React, { useState, useEffect } from "react"
import { enviarAutenticacion } from "../Utils/Autenticacion"
import { useNavigate } from "react-router-dom"

const AuthContext = React.createContext()

function AuthProvider({ children }) {
      const navigate = useNavigate()
      const [rut, setRut] = useState(null)
      const [claveUnica, setClaveUnica] = useState(null)
      const [estadoLogin, setEstadoLogin] = useState(false)
      const [usuario, setUsuario] = useState(null)


      const login = async (user, password) => {
            try {
                  const resultado = await enviarAutenticacion(user, password)
                  if (resultado) {
                        setRut(user)
                        setClaveUnica(password)
                        setEstadoLogin(true)
                        navigate("/Contrato-Inteligente/contrato")
                  }

            } catch (error) {
                  console.error("Error al iniciar sesión:", error)
            }
      }

      const logout = () => {
            try {
                  setRut(null)
                  setClaveUnica(null)
                  navigate("/")
            } catch (error) {
                  console.error("Error al cerrar sesión:", error)
            }
      }

      const getUser = () => {
            try {
                  useEffect(() => {
                        const objeto = localStorage.getItem('user');

                        if (objeto) {
                              const objetoParseado = JSON.parse(objeto);
                              setUsuario(objetoParseado);
                        }
                  }, [])
            } catch (error) {
                  console.error("Error al obtener usuario:", error)
            }
      }

      const auth = { rut, claveUnica, login, logout, estadoLogin, usuario, getUser }

      return (
            <AuthContext.Provider value={auth}>
                  {children}
            </AuthContext.Provider>
      )
}

function useAuth() {
      const auth = React.useContext(AuthContext)
      return auth
}

export {
      AuthProvider,
      useAuth,
}
