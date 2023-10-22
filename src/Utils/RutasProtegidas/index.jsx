import React from "react"
import { Navigate, Outlet } from "react-router-dom"

const RutasProtegidas = ({
      Activar, 
      redireccion
      }) => {
      if (!Activar){
            return <Navigate to={redireccion} replace/>
      }
      return <Outlet/>
}

export default RutasProtegidas