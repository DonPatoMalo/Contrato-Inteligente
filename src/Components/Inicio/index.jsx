import React from "react"
import ContratoLogo from "../../assets/img/logoContrato.png"
import ImagenInicio from "../../assets/img/Inicio.png"


function Inicio() {
    return (
        <main className="w-full h-full bg-Blanco font-Montserrat">
            <section className="flex justify-center items-center ">
                <article className="w-1/2 flex  flex-col m-20">
                    <img src={ContratoLogo}  alt="Logo de imagen" className="justify-center items-center"/>
                    <p className="m-5 text-xl">Crea contratos, firma de manera segura y guarda en <span className="text-Rojo font-semibold">Blockchain</span> con un solo clic.</p>
                </article>
                <div>
                    <img src={ImagenInicio}  alt="" />
                </div>
            </section>
        </main>
    )
}

export default Inicio