import Logo from "../../assets/img/logoContrato.png"

function Contactos() {

      const colaboradores = [
            { nombre: "Cristobal", apellido: "Rodenas", email: "cristobal.rodenas@alu.ucm.cl", ciudad: "Curicó, Chile" },
            { nombre: "Benjamín", apellido: "Rodríguez", email: "benjamin.rodriguez@alu.ucm.cl", ciudad: "Colín, Chile" },
            { nombre: "Juan Pablo", apellido: "Hernandez", email: "juan.hernandez@alu.ucm.cl", ciudad: "Cauquenes, Chile" },
            { nombre: "Gabriel", apellido: "Rojas", email: "gabriel.rojas@alu.ucm.cl", ciudad: "Talca, Chile" },
      ]

      return (
            <footer id="contactos">
                  <article className="flex flex-col justify-center items-center max-w-[1200px] font-Montserrat p-8">
                        <div className="flex flex-col justify-center items-center">
                              <img src={Logo} alt="Logo contrato inteligente" className="w-1/3 mb-1 lg:w-1/6" />
                              <h2 className="font-bold text-3xl text-gradient lg:text-5xl">Contactos</h2>
                              <p className="gap-3 mt-10 text-center text-xl font-bold">
                                    "¡Estamos a tu lado! 
                              </p>
                              <p className="gap-3 mt-1 text-center text-xl font-bold">
                                    Encuentra aquí el soporte que necesitas para resolver cualquier pregunta o inquietud."
                              </p>
                        </div>
                        <div className="lg:grid lg:grid-cols-2 gap-5 cursor-pointer lg:mt-10">
                              {
                                    colaboradores.map((colaborador, index) => (
                                          <div key={index} className="w-[300px] h-[200px] p-5 border border-[#ED3A4F]-500 rounded-xl my-5 flex flex-col justify-center items-center shadow-lg 
                                          transform hover:scale-105 transition-transform duration-300 ease-in-out hover:border-[#ED3A4F]">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ED3A4F" className="w-6 h-6">
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                                </svg>
                                                <h3 className="text-xl font-bold mt-1">{colaborador.nombre} {colaborador.apellido}</h3>
                                                <p className="mt-2">{colaborador.email}</p>
                                                <p>{colaborador.ciudad}</p>
                                          </div>
                                    ))
                              }
                        </div>
                  </article>
            </footer>
      )
}

export default Contactos