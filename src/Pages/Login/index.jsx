import Navbar from "../../Components/Navbar"
import ContratoImagen from "../../assets/img/logoContrato.png"
import Ilustracion from "../../assets/img/signIn.png"


function Login() {
    return (
        <>
            <Navbar />
            <main className="max-w-screen-xl bg-Blanco font-Montserrat mx-auto p-5 min-h-screen tracking-wider flex justify-center items-center mt-[-5rem]">
                <section className="w-1/2 flex flex-col justify-center items-center relative top-5">
                    <div className="w-full flex justify-center items-center">
                        <img src={ContratoImagen} alt="Logo de contrato inteligente" className="w-2/4"/>
                    </div>
                    
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
                                Iniciar sesión en su cuenta
                            </h2>
                        </div>

                        <div className="mt-16 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method="POST">
                                <div>
                                    <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-900">
                                        Número de identificación (RUT)
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow- ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-900">
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
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-Rojo p-2 text-md font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Iniciar sesión
                                    </button>
                                </div>
                            </form>

                            <p className="mt-10 text-center text-sm text-gray-500">
                                No tienes clave única ?{' '}
                                <a href="https://claveunica.gob.cl" className="font-semibold leading-6 text-Rojo hover:text-red-500">
                                    Contacta y crea una.
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-1/2 h-auto flex justify-center items-center">
                    <img src={Ilustracion} alt="" />
                </section>
            </main>
        </>
    )
}

export default Login