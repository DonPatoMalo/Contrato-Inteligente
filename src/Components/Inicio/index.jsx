import React from "react"
import ContratoLogo from "../../assets/img/logoContrato.png"
import ImagenInicio from "../../assets/img/Inicio.png"


function Inicio() {
    return (
        <main className="max-w-screen-xl bg-Blanco font-Montserrat mx-auto p-5 h-screen">
            <div className="flex justify-center items-center">
                <section className="">
                    <img src={ContratoLogo} alt="Logo de imagen" className="justify-center items-center" />
                    <p className="m-5 text-xl">Crea contratos, firma de manera segura y guarda en <span className="text-Rojo font-semibold">Blockchain</span> con un solo clic.</p>
                </section>
                <section>
                    <img src={ImagenInicio} alt="Ilustración de contrato" />
                </section>
            </div>
        </main>
    )
}

export default Inicio