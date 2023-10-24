import React from "react"
import Logo from "../../assets/img/logoContrato.png"
import Image1 from "../../assets/img/servicio1.png"
import Image2 from "../../assets/img/servicio2.png"
import Image3 from "../../assets/img/servicio3.png"

function Valores() {
    return (
        <section id="valores">
            <article className="font-Montserrat my-20 p-5">
                <section className="flex flex-col justify-center items-center">
                    <img src={Logo} alt="Logo" className="w-1/3 mb-3 lg:w-1/6" />
                    <h2 className="font-bold text-3xl text-gradient lg:text-5xl">Servicios</h2>
                </section>
                <div className="flex flex-col gap-8 mt-10 lg:max-w-[1200px]">
                    <section className="flex flex-col justify-center items-center lg:flex-row">
                        <p className="text-center font-bold text-sm mb-5 lg:text-xl">
                            "Cuando un comprador adquiere un vehículo, el contrato inteligente se encarga de
                            verificar el pago y transferir automáticamente el título de propiedad al nuevo propietario.""
                        </p>
                        <div className="flex justify-center">
                            <img src={Image1} alt="Ilustracion Contrato Inteligente" className="max-w-[50%] lg:max-w-[70%]" />
                        </div>
                    </section>
                    <section className="flex flex-col justify-center items-center lg:flex-row">
                        <p className="text-center font-bold text-sm lg:text-xl lg:order-2">"Cuando un comprador acuerda un plan de
                            financiamiento o un pago a plazos para adquirir un vehículo, el contrato inteligente
                            asegura que los pagos se realicen puntualmente."
                        </p>
                        <div className="flex justify-center lg:order-1">
                            <img src={Image2} alt="Ilustracion Acuerdo de contrato" className="max-w-[70%] lg:max-w-[80%]" />
                        </div>
                    </section>
                    <section className="flex flex-col justify-center items-center lg:flex-row">
                        <p className="text-center font-bold text-sm lg:text-xl">"Los contratos inteligentes pueden mantener
                            un registro detallado del historial de mantenimiento del vehículo y las garantías
                            asociadas."
                        </p>
                        <div className="flex justify-center">
                            <img src={Image3} alt="Ilustracion Blockchain" className="max-w-[70%] lg:max-w-[80%]" />
                        </div>

                    </section>
                </div>
            </article>
        </section>

    )
}

export default Valores;