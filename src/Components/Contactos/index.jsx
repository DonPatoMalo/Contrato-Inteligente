import { NavLink } from "react-router-dom"
import Logo from "../../assets/img/logoContrato.png"

function Contactos() {

      const colaboradores = [
            { nombre: "Cristobal", apellido: "Rodenas", email: "cristobal.rodenas@alu.ucm.cl" },
            { nombre: "Benjamín", apellido: "Rodríguez", email: "benjamin.rodriguez@alu.ucm.cl" },
            { nombre: "Juan Pablo", apellido: "Hernandez", email: "juan.hernandez@alu.ucm.cl" },
            { nombre: "Gabriel", apellido: "Rojas", email: "gabriel.rojas@alu.ucm.cl" },
      ]

      return (
            <footer>
                  <article className="flex justify-center items-center max-w-[1200px] font-Montserrat">
                        <div className="flex flex-col justify-center items-center">
                              <img src={Logo} alt="Logo contrato inteligente" className="w-1/3 mb-1 lg:w-1/6" />
                              <h2 className="font-bold text-3xl text-gradient lg:text-5xl">Contactos</h2>
                              <p className="font-semibold gap-3 mt-10 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, exercitationem nobis iste nostrum dolor deleniti quis commodi! Non est nesciunt iste dignissimos porro quisquam accusamus. Maxime consectetur esse tempore. Neque?</p>
                        </div>
                  </article>
            </footer>
      )
}

export default Contactos