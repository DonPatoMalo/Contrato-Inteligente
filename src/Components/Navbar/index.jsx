import React from "react"
import Logo from "../../assets/img/logo.png"

function Navbar() {
    return (
        <header className="w-full h-20 bg-Blanco shadow-lg font-Montserrat relative">
            <nav className="max-w-screen-xl mx-auto flex justify-between items-center w-full h-full">
                <img src={Logo} alt="Blockchain Logo" className="w-14 m-10" />
                <ul className="flex items-center gap-10 text-lg">
                    <li> <a href="" className="text-Rojo font-semibold">Inicio</a> </li>
                    <li> <a href="">Templates</a> </li>
                    <li> <a href="">Otros</a> </li>
                </ul>
                <button className="h-10 bg-Rojo text-Blanco px-6 py-2 mx-6 rounded-full">Iniciar Sesión</button>
            </nav>
        </header>
    )
}

export default Navbar
