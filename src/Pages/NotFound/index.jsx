import React from "react"
import { Link } from "react-router-dom"
import IlustraciónNotFound from "../../assets/img/404.png"

function NotFound() {
    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 font-Montserrat">
            <div className="text-center">
                <p className="text-4xl font-semibold text-Rojo">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página no encontrada</h1>
                <p className="mt-6 text-xl leading-7 text-gray-600">Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
                <div className="flex justify-center items-center">
                    <img src={IlustraciónNotFound} className="mt-10 w-1/2" alt="Ilustración 404" /> 
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <p
                        className="w-40 h-12 flex justify-center items-center rounded-md bg-Rojo px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <Link to="/">Regresar</Link>
                    </p>
                    <p className="text-md font-semibold text-gray-900">
                        <Link to="https://claveunica.gob.cl">Contactar a soporte</Link> 
                        <span aria-hidden="true">&rarr;</span>
                    </p>
                    
                </div>
                
            </div>
        </main>
    )
}

export default NotFound