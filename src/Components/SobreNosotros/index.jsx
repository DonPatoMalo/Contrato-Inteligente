import React from "react"
import Logo from "../../assets/img/logoContrato.png"

function SobreNosotros() {
      return (
            <section>
                  <article className="font-Montserrat my-20 p-5">
                        <div className="flex flex-col justify-center items-center">
                              <img src={Logo} alt="Logo Contrato Inteligente" className="w-1/3 mb-1 lg:w-1/6" />
                              <h2 className="font-bold text-3xl text-gradient lg:text-5xl">Sobre Nosotros</h2>
                        </div>
                        <div className="my-5 lg:flex lg:max-w-[1200px] lg:my-20 lg:gap-8">
                              <div className="flex flex-col justify-center items-center mt-8">
                                    <h3 className="font-bold text-2xl mb-5 lg:text-3xl">Misión</h3>
                                    <p className="text-center lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                                    </p>
                                    <div className="mt-3 lg:mt-8">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ED3A4F" className="w-12 h-12">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                          </svg>

                                    </div>
                              </div>
                              <div className="flex flex-col justify-center items-center mt-8">
                                    <h3 className="font-bold text-2xl mb-5 lg:text-3xl">Visión</h3>
                                    <p className="text-center lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                                    </p>
                                    <div className="mt-3 lg:mt-8">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ED3A4F" className="w-12 h-12">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                          </svg>
                                    </div>

                              </div>
                        </div>
                  </article>
            </section>
      )
}

export default SobreNosotros