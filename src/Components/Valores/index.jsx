import React from "react";
import ValoresImagen from "../../assets/img/valores.png";

function Valores() {
    return (
        <main className="max-w-screen-xl bg-Blanco font-Montserrat mx-auto p-5 min-h-screen tracking-wider flex flex-wrap justify-between items-center mt-[-5rem]">
            <article className="flex">
                <section className="w-2/3 flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-semibold text-Negro">Nosotros</h1>
                    <p className="text-md mt-3">
                        Somos una empresa dedicada a revolucionar la forma en que se gestionan los contratos.
                        Nuestros contratos inteligentes respaldados en <span className="text-Rojo font-semibold">Blockchain</span>
                        ofrecen seguridad y transparencia en cada transacción.
                    </p>
                    <h2 className="text-2xl font-semibold text-Rojo mt-6">Misión</h2>
                    <p className="text-md">
                        Nuestra misión es simplificar y agilizar la gestión de contratos,
                        proporcionando a las empresas las herramientas necesarias para crear, firmar y
                        almacenar contratos de manera segura y eficiente a través de la tecnología blockchain.
                    </p>
                    <h2 className="text-2xl font-semibold text-Rojo mt-6">Visión</h2>
                    <p className="text-md">
                        Nuestra visión es convertirnos en líderes en la industria de contratos inteligentes respaldados en
                        blockchain, brindando soluciones innovadoras que transformen la forma en que se realizan los acuerdos
                        comerciales en todo el mundo. Queremos ser reconocidos por nuestra integridad, seguridad y confiabilidad
                        en cada contrato gestionado.
                    </p>
                    <h2 className="text-2xl font-semibold text-Rojo mt-6">Valores</h2>
                    <p>
                        Los valores son muy impotante para nosotros como estudiates
                    </p>
                </section>
                <section className="w-1/3 flex justify-center items-center">
                    <img src={ValoresImagen} alt="Ilustración de contrato" className="w-4/4" />
                </section>
            </article>
        </main>

    )
}

export default Valores;