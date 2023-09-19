import { NavLink } from "react-router-dom"
import React from "react"
import Logo from "../../assets/img/logo.png"

function Navbar() {
    return (
        <header className="w-full h-20 bg-Blanco shadow-lg font-Montserrat relative tracking-wider">
            <nav className="max-w-screen-xl mx-auto flex justify-between items-center w-full h-full">
                <img src={Logo} alt="Blockchain Logo" className="w-14 m-10" />
                <ul className="flex items-center gap-16 text-lg">
                    <li className="text-Rojo font-semibold"> <NavLink to="/">Inicio</NavLink></li>
                    <li> <NavLink to="/contratos">Contratos</NavLink></li>
                    <li> <NavLink to="/nosotros">Nosotros</NavLink> </li>
                </ul>
                <button className="h-10 bg-Rojo text-Blanco px-6 py-2 mx-6 rounded-full">Iniciar Sesión</button>
            </nav>
        </header>
    )
}

export default Navbar
