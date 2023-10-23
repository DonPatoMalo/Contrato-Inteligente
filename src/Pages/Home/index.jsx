import Navbar from "../../Components/Navbar"
import Inicio from "../../Components/Inicio"
import Valores from "../../Components/Valores"
import SobreNosotros from "../../Components/SobreNosotros"

function Home() {
    return (
        <>
            <Navbar inicio={"Inicio"} servicios={"Servicios"} nosotros={"Nosotros"} button={"Iniciar Sesión"} />
            <main className="w-full h-full flex flex-col justify-center items-center">
                <Inicio />
                <Valores />
                <SobreNosotros />
            </main>

        </>
    )
}

export default Home