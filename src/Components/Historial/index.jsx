import { useState } from "react"
import { ethers } from 'ethers'
import LogoContrato from '../../assets/img/logoContrato.png'
import Metamask from '../../assets/img/metamask.png'
import FirmaImage from '../../assets/img/detallesContrato.png'

function Historial() {
      const [provider, setProvider] = useState(null)
      const [signer, setSigner] = useState(null)
      const [contrato, setContrato] = useState(null)
      const [account, setAccount] = useState(null)
      const [connectedToMetaMask, setConnectedToMetaMask] = useState(false)
      const [detalleContrato, setDetalleContrato] = useState({ descripcion: '', precio: 0, comprador: '', vendedor: '' })


      const conectarMetamask = async () => {
            if (window.ethereum) {
                  await window.ethereum.request({ method: 'eth_requestAccounts' })
                  const ethProvider = new ethers.providers.Web3Provider(window.ethereum)
                  setProvider(ethProvider)

                  const ethSigner = ethProvider.getSigner()
                  setSigner(ethSigner)

                  const accounts = await ethProvider.listAccounts()
                  if (accounts.length > 0) {
                        setAccount(accounts[0])
                        setConnectedToMetaMask(true)
                  }

                  const contratoAbi = [
                        'function verDetalleContrato() external view returns (string, uint, address, address)',
                        'function guardarContratoEnBlockchain() external',
                        'function reiniciarContrato() external'
                  ]

                  const contratoAddress = '0x4611173DAcBE049B03AF15122ef367A5234D66D4'
                  const contratoInstance = new ethers.Contract(
                        contratoAddress,
                        contratoAbi,
                        ethProvider.getSigner()
                  )
                  setContrato(contratoInstance)
            } else {
                  console.error('MetaMask no está instalado.')
            }
      }

      const obtenerDetalleContrato = async () => {
            try {
                  const detalle = await contrato.verDetalleContrato()
                  const precio = ethers.utils.formatUnits(detalle[1], 18)
                  const comprador = detalle[2]
                  const vendedor = detalle[3]

                  setDetalleContrato({
                        descripcion: detalle[0],
                        precio: precio,
                        comprador: comprador,
                        vendedor: vendedor,
                  })
                  console.log('Detalle del contrato:', detalle)
            } catch (error) {
                  console.error('Error al obtener el detalle del contrato:', error.message)
            }
      }

      const handleGuardarContrato = async () => {
            try {
                  await contrato.guardarContratoEnBlockchain()

            } catch (error) {
                  console.error('Error al guardar el contrato', error.message)
            }
      }

      const handleReiniciarContrato = async () => {
            try {
                  await contrato.reiniciarContrato()

            } catch (error) {
                  console.error('Error al reiniciar contrato', error.message)
            }
      }

      return (
            <main className="mx-auto lg:max-w-[50rem] py-6 sm:px-6 lg:px-8 flex justify-center font-Montserrat">
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
                  <div className='flex flex-col justify-center items-center mt-5'>
                        <div className='flex'>
                              <img
                                    className='w-[10rem]'
                                    src={LogoContrato} alt="Logo contrato inteligente" />
                        </div>
                        <h2 className='font-bold text-3xl text-gradient lg:text-5xl'>Detalles de Contrato</h2>
                        {!connectedToMetaMask && (
                              <>
                                    <section className='lg:flex lg:m-8 lg:gap-8'>
                                          <div className='w-[20rem] my-5 lg:w-[20rem]'>
                                                <img
                                                      src={FirmaImage} alt="Logo conexión" />
                                          </div>
                                          <div className='lg:h-full flex justify-center items-center lg:ml-5'>
                                                <button
                                                      className='flex justify-center items-center w-[15rem] h-[3rem] rounded-md bg-[#263238] mt-5 hover:bg-Rojo-claro transition duration-300'
                                                      onClick={conectarMetamask}>
                                                      <div className='mr-2'>
                                                            <img
                                                                  className='w-[2rem] h-[2rem]'
                                                                  src={Metamask} alt="Logo de metamask" />
                                                      </div>
                                                      <div className='text-white'>
                                                            Conectar a MetaMask
                                                      </div>
                                                </button>
                                          </div>
                                    </section>

                              </>
                        )}
                        {connectedToMetaMask && (
                              <>
                                    <section className="mt-2 p-5 lg:mt-10">
                                          <div className='flex flex-col justify-center items-center'>
                                                <h4 className='text-xl lg:text-2xl'>Cuenta conectada</h4>
                                                <div className='m-5 h-10 p-4 bg-red-200 rounded-md flex justify-center items-center lg:w-[30rem] shadow-lg'>
                                                      <p className='text-[.6rem] text-black lg:text-[1rem]'>{account}</p>
                                                </div>
                                                <div className='flex flex-col lg:my-5'>
                                                      <h3 className='text-xl mt-5 font-bold lg:text-2xl lg:mt-5'>Detalle del Contrato</h3>
                                                      <button
                                                            className='p-2 bg-Rojo-claro rounded-full hover:shadow-lg my-5 text-sm text-white lg:text-lg lg:p-3 hover:bg-red-500 transition'
                                                            onClick={obtenerDetalleContrato}>Obtener Contrato
                                                      </button>
                                                </div>
                                          </div>
                                          <article className="border-solid border-[.1rem] border-Rojo rounded-[3rem] p-8 shadow-lg">
                                                <div className='mt-5 flex flex-col justify-center items-center'>
                                                      <div className='flex flex-col justify-center items-center my-5 gap-5'>
                                                            <p className='text-xl font-bold lg:text-2xl'>Vendedor</p>
                                                            <div>
                                                                  <p className='lg:text-lg'>{detalleContrato.vendedor}</p>
                                                            </div>

                                                      </div>
                                                      <div className='flex flex-col justify-center items-center my-5 gap-5'>
                                                            <p className='text-xl font-bold lg:text-2xl'>Comprador</p>
                                                            <div>
                                                                  <p className='lg:text-lg'>{detalleContrato.comprador}</p>
                                                            </div>

                                                      </div>
                                                      <div className='flex flex-col justify-center items-center my-5 gap-5'>
                                                            <p className='text-xl font-bold lg:text-2xl'>Terminos y condiciones</p>
                                                            <div className='bg-white h-auto p-5'>
                                                                  <p className='lg:text-lg'>{detalleContrato.descripcion}</p>
                                                            </div>

                                                      </div>
                                                      <div className='flex gap-5'>
                                                            <p className='text-lg lg:text-2xl'>Precio:</p>
                                                            <p className='text-lg lg:text-2xl text-Rojo font-bold'>${detalleContrato.precio}</p>
                                                      </div>
                                                </div>
                                          </article>
                                          <div className="flex gap-5 justify-center mt-5">
                                                <button 
                                                      className="p-2 bg-Rojo-claro rounded-full hover:shadow-lg my-5 text-sm text-white lg:text-lg lg:p-3 hover:bg-red-500 transition"
                                                      onClick={handleGuardarContrato}
                                                      >
                                                                  Guardar Contrato
                                                      
                                                </button>
                                                <button 
                                                      className="p-2 bg-white rounded-full hover:shadow-lg my-5 text-sm text-black lg:text-lg lg:p-3 hover:bg-red-500 hover:text-white transition border-solid border-[.1rem]"
                                                      onClick={handleReiniciarContrato}
                                                      >
                                                                  Reiniciar Contrato
                                                </button>
                                          </div>
                                    </section>
                              </>
                        )}
                  </div>
            </main>

      )
}

export default Historial