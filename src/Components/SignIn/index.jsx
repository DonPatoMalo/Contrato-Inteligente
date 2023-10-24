import React, { useState } from "react"
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
                navigate("/Contrato-Inteligente/contrato");
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
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#ff9d9d] opacity-30 sm:left-[calc(50%)] sm:w-[60.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <section className="max-w-1/2 flex flex-col justify-center items-center relative bg-white rounded-3xl shadow-2xl mt-20">

                <div className="w-full flex justify-center items-center relative top-6 mt-5">
                    <img src={ContratoImagen} alt="Logo de contrato inteligente" className="w-3/5" />
                </div>

                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-xl font-bold leading-9 tracking-tight text-gray-900 lg:text-4xl">
                            Iniciar sesión en su cuenta
                        </h2>
                    </div>

                    <div className="mt-16 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={(e) => {
                            e.preventDefault()
                            login()
                        }}>
                            <div>
                                <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900 lg:text-xl">
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
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 lg:text-xl">
                                        Clave Única
                                    </label>
                                    <div className="text-sm">
                                        <a href="https://claveunica.gob.cl" className="font-semibold text-[10px] text-Rojo hover:text-red-500 lg:text-sm">
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
                                    className="flex w-full h-12 justify-center items-center rounded-md bg-Rojo p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 lg:text-xl"
                                >
                                    Iniciar sesión
                                </button>
                            </div>
                        </form>

                        <p className="mt-5 text-center text-sm text-gray-500 lg:text-md">
                            No tienes clave única ?{' '}

                        </p>
                        <a href="https://claveunica.gob.cl" className="flex justify-center mt-1 font-semibold leading-6 text-Rojo hover:text-red-500 text-[15px] lg:text-sm">
                            Contacta y crea una.
                        </a>
                    </div>
                </div>
            </section>
            <section className="w-1/2 h-auto justify-center items-center relative left-10 hidden lg:flex" id="image">
                <img className="custom-shadow" src={Ilustracion} alt="Ilustración Inicio de sesión" />
            </section>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#fc8989] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </main>
    )
}

export default SignIn