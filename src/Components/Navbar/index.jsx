import { NavLink, Link } from "react-router-dom"
import React from "react"
import Logo from "../../assets/img/logo.png"

function Navbar(props) {

    const inicio = props.inicio
    const servicios = props.servicios
    const nosotros = props.nosotros
    const button = props.button

    const rutas = []

    rutas.push({
        to: '/',
        text: inicio
    })
    rutas.push({
        to: '/contratos',
        text: servicios
    })
    rutas.push({
        to: '/nosotros',
        text: nosotros
    })

    return (
        <header className="fixed top-0 left-0 right-0 w-full h-20 bg-Blanco shadow-lg font-Montserrat z-2 tracking-wider">
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
                
                <button className="h-10 bg-Rojo text-Blanco px-6 py-2 mx-6 rounded-full transition duration-300 hover:bg-red-500"> <NavLink to="/login"> {button} </NavLink> </button>
            </nav>
        </header>
    )
}

export default Navbar
