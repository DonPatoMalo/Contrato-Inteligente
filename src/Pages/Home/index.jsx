import { useContext } from "react";
import Navbar from "../../Components/Navbar"
import Inicio from "../../Components/Inicio"
import Valores from "../../Components/Valores"

function Home() {
    return (
        <>
            <Navbar inicio={"Inicio"} servicios={"Servicios"} nosotros={"Nosotros"} button={"Iniciar Sesión"}/>
            <Inicio />
            <Valores />
        </>
    )
}

export default Home