import Navbar from "../../Components/Navbar"
import Inicio from "../../Components/Inicio"
import Valores from "../../Components/Valores"
import SobreNosotros from "../../Components/SobreNosotros"
import Contactos from "../../Components/Contactos"


function Home() {
    return (
        <>
            <Navbar inicio={"Inicio"} servicios={"Servicios"} nosotros={"Nosotros"}/>
            <main className="w-full h-full flex flex-col justify-center items-center">
                <Inicio />
                <Valores />
                <SobreNosotros />
                <Contactos />
            </main>
        </>
    )
}

export default Home