import React from "react"
import { useAuth } from "../../Context/auth"

function UserInformation() {
      const information = useAuth()
      information.getUser()
      const usuario = information.usuario

      return (
            <div className="font-Montserrat">
                  {usuario ? (
                        <div>
                              <h2 className="font-bold text-5xl">Bienvenid@, <span className="text-Rojo">{usuario.rutUser.nombre}!</span></h2>
                        </div>
                  ) : (
                        <p>Cargando información del usuario...</p>
                  )}
            </div>
      );
}

export default UserInformation;
