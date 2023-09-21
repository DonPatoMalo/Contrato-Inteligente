import { NavLink, Link } from "react-router-dom"
import React from "react"
import Logo from "../../assets/img/logo.png"

function Navbar() {
    const rutas = [];

    rutas.push({
        to: '/',
        text: 'Inicio'
    });
    rutas.push({
        to: '/contratos',
        text: 'Contratos'
    });
    rutas.push({
        to: '/nosotros',
        text: 'Nosotros'
    });

    return (
        <header className="w-full h-20 bg-Blanco shadow-lg font-Montserrat relative tracking-wider">
            <nav className="max-w-screen-xl mx-auto flex justify-between items-center w-full h-full">
                <Link to="/">
                    <img src={Logo} alt="Blockchain Logo" className="w-14 m-10" />
                </Link>
                
                <ul className="flex items-center gap-16 text-lg">
                    {rutas.map((ruta, index) => (
                        <li key={index} className="w-20 h-10 flex justify-center items-center rounded-lg">
                            <NavLink to={ruta.to}
                                style={({ isActive }) => ({
                                    color: isActive ? '#B2130D' : "black"
                                })}
                            >
                                {ruta.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <button className="h-10 bg-Rojo text-Blanco px-6 py-2 mx-6 rounded-full transition duration-300 hover:bg-red-500"> <NavLink to="/login"> Iniciar Sesión </NavLink> </button>
            </nav>
        </header>
    )
}

export default Navbar
