import React from "react"
import LogoContrato from "../../assets/img/logoContrato.png"
import { useAuth } from "../../Context/auth"
import Login from "../SignIn"

function Contratos() {
      const auth = useAuth()

      if (!auth.estadoLogin) {
            return <Login />
      }
      
      const atributos = {
            crea: "Crear",
            firmar: "Firmar",
            obtener: "Obtener",
            perfil: "Perfil",
            historial: "Historial",
      }

      const iconos = {
            crea: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>,
            firmar: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>,
            obtener: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>,
            perfil: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>,
            historial: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>,
      }

      return (
            <main className="flex justify-center items-center w-full h-screen">
                  <section className="m-5 p-5">
                        <div className="flex justify-center items-center">
                              <img src={LogoContrato} alt="Logo de contrato" className="w-1/3" />
                        </div>
                        <div className="flex justify-center items-center">
                              <h1 className="font-bold text-gradient text-4xl">
                                    Compraventa de Vehículos
                              </h1>
                        </div>
                        <ul className="flex justify-center items-center gap-8 flex-wrap mt-10 ">
                              {Object.keys(atributos).map((clave) => (
                                    <li
                                          className="flex justify-between w-2/3 p-4 bg-[#ED3A4F] cursor-pointer 
                                                      text-[#FFFEFE] text-lg rounded-lg hover:bg-red-300 
                                                      hover:transition"
                                          key={clave}
                                    >
                                          <div>
                                                {atributos[clave]}
                                          </div>

                                          <div>
                                                {iconos[clave]}
                                          </div>

                                    </li>
                              ))}
                        </ul>
                  </section>
            </main>
      )
}
export default Contratos
