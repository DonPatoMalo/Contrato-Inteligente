import Navbar from "../../Components/Navbar"
import Contratos from "../../Components/Contratos"

function Contrato() {
    return (
        <>
            <Navbar inicio={"Inicio"} servicios={"Servicios"} nosotros={"Nosotros"} button={"Chile 🇨🇱"}/>
            <Contratos/>
        </>
    )
}

export default Contrato