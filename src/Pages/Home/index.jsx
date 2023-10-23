import { useRef } from "react"
import Navbar from "../../Components/Navbar"
import Inicio from "../../Components/Inicio"
import Valores from "../../Components/Valores"
import SobreNosotros from "../../Components/SobreNosotros"

function Home() {
    const inicioRef = useRef(null)
    const serviciosRef = useRef(null)
    const nosotrosRef = useRef(null)

    const scroll = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth",
        })
    }

    return (
        <>
            <Navbar
                onClickInicio={() => scroll(inicioRef)}
                onClickServicios={() => scroll(serviciosRef)}
                onClickNosotros={() => scroll(nosotrosRef)}
                button={"Iniciar Sesión"}
            />
            <Inicio ref={inicioRef} />
            <Valores ref={serviciosRef} />
            <SobreNosotros ref={nosotrosRef} />
        </>
    )
}

export default Home
