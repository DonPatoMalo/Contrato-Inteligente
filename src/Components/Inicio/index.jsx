import React from "react"
import ContratoLogo from "../../assets/img/logoContrato.png"
import ImagenInicio from "../../assets/img/Inicio.png"


function Inicio() {
    return (
        <main className="max-w-screen-xl bg-Blanco font-Montserrat mx-auto p-5 min-h-screen tracking-wider flex justify-center items-center mt-[-5rem]">
            <article className="flex">
                <section className="w-[50rem] flex flex-col justify-center items-center">
                    <img src={ContratoLogo} alt="Logo de imagen" className="ml-[-6rem]" />
                    <p className="text-xl mt-3">Crea contratos, firma de manera segura y guarda en <span className="text-Rojo font-semibold">Blockchain</span> con un solo clic.</p>
                    <ul className="w-full flex gap-10 text-Negro mx-8 mt-10">
                        <li className="px-8 py-2 border border-Rojo rounded-xl cursor-pointer transition duration-300 hover:bg-Rojo hover:text-Blanco">Seguro</li>
                        <li className="px-8 py-2 border border-Rojo rounded-xl cursor-pointer transition duration-300 hover:bg-Rojo hover:text-Blanco">Confiable</li>
                        <li className="px-8 py-2 border border-Rojo rounded-xl cursor-pointer transition duration-300 hover:bg-Rojo hover:text-Blanco">Incleíble</li>
                    </ul>
                </section>
                <section className="flex justify-center items-center">
                    <img src={ImagenInicio} alt="Ilustración de contrato" className="w-4/4"/>
                </section>
            </article>
        </main>
    )
}

export default Inicio