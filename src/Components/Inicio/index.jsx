import React from "react"
import ContratoLogo from "../../assets/img/logoContrato.png"
import ImagenInicio from "../../assets/img/Inicio.png"


const Inicio = React.forwardRef((props, ref) =>  {
    return (
        <main
            ref={ref} 
            className="max-w-screen-xl font-Montserrat mx-auto p-5 min-h-screen tracking-wider flex justify-center items-center">
            <article className="flex">
                <section className="w-[50rem] flex flex-col justify-center items-center">
                    <img src={ContratoLogo} alt="Logo de imagen" className="w-full ml-[-2.5rem]" />
                    <p className="text-2xl mt-3">Crea contratos, firma de manera segura y guarda en <span className="text-Rojo font-bold">Blockchain</span> con un solo clic.</p>
                    <ul className="w-full flex items-center gap-10 text-Negro mx-8 mt-10">
                        <li className="px-8 py-2 border bg-Rojo rounded-xl cursor-pointer transition duration-300 hover:bg-red-500 text-Blanco">Seguro</li>
                        <li className="px-8 py-2 border bg-Rojo rounded-xl cursor-pointer transition duration-300 hover:bg-red-500 text-Blanco">Confiable</li>
                        <li className="px-8 py-2 border bg-Rojo rounded-xl cursor-pointer transition duration-300 hover:bg-red-500 text-Blanco">Incleíble</li>
                    </ul>
                </section>
                <section className="flex justify-center items-center w-2/4 mt-20">
                    <img src={ImagenInicio} alt="Ilustración de contrato" className="w-full" />
                </section>
            </article>
        </main>
    )
})

export default Inicio