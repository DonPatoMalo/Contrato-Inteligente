import React from "react"
import { useAuth } from "../../Context/auth"
import ImageContract from "../../assets/img/contract.png"

function UserInformation() {
  const information = useAuth()
  information.getUser()
  const usuario = information.usuario

  return (
    <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex flex-col justify-center font-Montserrat">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#ff9d9d] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      {usuario ? (
        <div className="flex justify-center items-center mt-5">
          <h2 className="font-bold text-2xl lg:text-5xl">
            Bienvenid@,{" "}
            <span className="text-Rojo">{usuario.rutUser.nombre} {usuario.rutUser.apellido}!</span>
          </h2>
        </div>
      ) : (
        <p>Cargando información del usuario...</p>
      )}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <article className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-Rojo inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">PASO 1</h2>
                  <p className="leading-relaxed">Crea un cuenta en la billetera Metamask. Puedes descargar la extensión en el navegador Chrome.</p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-Rojo inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">PASO 2</h2>
                  <p className="leading-relaxed">Crea un contrato ingresando a la opción "CREAR" en el navegador superior.</p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-Rojo inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">PASO 3</h2>
                  <p className="leading-relaxed">Completa los campos solicitados y genera el contrato. Recuerda envíar el código al comprador para que pueda firmarlo.</p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-Rojo inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">PASO 4</h2>
                  <p className="leading-relaxed">El comprador debe leer los acuerdos e ingresar en la opción "FIRMAR" con el código enviado.</p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-Rojo inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINAL</h2>
                  <p className="leading-relaxed">Finalmente el contrato será almacenado en la Blockchain y se realizará la transferencia de propiedad.</p>
                </div>
              </div>
            </article>
            <div className="lg:p-24 lg:w-3/5 lg:1/2 md:w-1/2 rounded-lg md:mt-0 mt-12 flex justify-center items-center">
              <img className="lg:mb-10" src={ImageContract} alt="PASO" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default UserInformation
