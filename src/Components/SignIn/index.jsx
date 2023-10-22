import React, { useState, useEffect } from "react"
import ContratoImagen from "../../assets/img/logoContrato.png"
import Ilustracion from "../../assets/img/signIn.png"
import { enviarAutenticacion } from "../../Utils/Autenticacion"
import { useNavigate } from "react-router-dom"

function SignIn() {
    const [rut, setRut] = useState("")
    const [claveUnica, setClaveUnica] = useState("")
    const [validacionUsuario, setValidacionUsuario] = useState(null)
    const navigate = useNavigate()

    const login = async () => {
        try {
            const resultado = await enviarAutenticacion(rut, claveUnica)
            setValidacionUsuario(resultado)
            if (resultado) {
                navigate("/contrato");
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error)
            setValidacionUsuario(false)
        }
    }

    const manejoLogin = async () => {
        await login()
    }


    return (
        <main className="max-w-screen-xl font-Montserrat mx-auto p-5 min-h-screen tracking-wider flex justify-center items-center">
            <section className="max-w-1/2 flex flex-col justify-center items-center relative bg-white rounded-3xl shadow-2xl mt-20">
                <div className="w-full flex justify-center items-center relative top-6">
                    <img src={ContratoImagen} alt="Logo de contrato inteligente" className="w-1/3" />
                </div>

                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
                            Iniciar sesión en su cuenta
                        </h2>
                    </div>

                    <div className="mt-16 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={(e) => {
                            e.preventDefault()
                            login()
                        }}>
                            <div>
                                <label htmlFor="text" className="block text-xl font-medium leading-6 text-gray-900">
                                    Número de identificación (RUT)
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="text"
                                        name="text"
                                        type="text"
                                        autoComplete="text"
                                        required
                                        value={rut}
                                        onChange={(e) => setRut(e.target.value)}
                                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-red-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-xl font-medium leading-6 text-gray-900">
                                        Clave Única
                                    </label>
                                    <div className="text-sm">
                                        <a href="https://claveunica.gob.cl" className="font-semibold text-Rojo hover:text-red-500">
                                            Olvidó su contraseña?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={claveUnica}
                                        onChange={(e) => setClaveUnica(e.target.value)}
                                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-red-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="button"
                                    onClick={manejoLogin}
                                    className="flex w-full h-12 justify-center items-center rounded-md bg-Rojo p-2 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    Iniciar sesión
                                </button>
                            </div>
                        </form>

                        <p className="mt-5 text-center text-md text-gray-500">
                            No tienes clave única ?{' '}

                        </p>
                        <a href="https://claveunica.gob.cl" className="flex justify-center mt-1 font-semibold leading-6 text-Rojo hover:text-red-500">
                            Contacta y crea una.
                        </a>
                    </div>
                </div>
            </section>
            <section className="w-1/2 h-auto flex justify-center items-center relative left-10" id="image">
                <img className="custom-shadow" src={Ilustracion} alt="Ilustración Inicio de sesión" />
            </section>
        </main>
    )
}

export default SignIn