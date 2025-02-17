import React, { useState } from 'react'
import { ethers } from 'ethers'
import Metamask from '../../assets/img/metamask.png'
import LogoContrato from '../../assets/img/logoContrato.png'
import ImageConection from '../../assets/img/conection.png'
import QRCode from 'react-qr-code'

const CompraVentaComponenteCrearContrato = () => {
  const [provider, setProvider] = useState(null)
  const [signer, setSigner] = useState(null)
  const [contrato, setContrato] = useState(null)
  const [account, setAccount] = useState(null)
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState('')
  const [numeroSecreto, setNumeroSecreto] = useState('')
  const [connectedToMetaMask, setConnectedToMetaMask] = useState(false)
  const [generarQR, setGenerarQR] = useState(false)

  const UrlComprador = 'http://benjaesteban.github.io/Contrato-Inteligente/'


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
        'function inicializarContrato(string _descripcion, uint _precio, uint _numeroSecreto) external',
        'function firmarContrato(uint _numeroSecreto) external',
        'function verDetalleContrato() external view returns (string, uint)',
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

  const handleInicializarContrato = async () => {
    if (contrato && descripcion && precio && numeroSecreto) {
      try {
        await contrato.inicializarContrato(
          descripcion,
          ethers.utils.parseUnits(precio, 18),
          numeroSecreto
        )
        console.log('Contrato inicializado correctamente.')
      } catch (error) {
        console.error('Error al inicializar el contrato:', error.message)
      }
    }
  }

  const handleGenerarQR = () => {
    setGenerarQR(true)
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
        <h2 className='font-bold text-3xl text-gradient lg:text-5xl'>Crear Contrato</h2>


        {!connectedToMetaMask && (
          <>
            <section className='lg:flex lg:m-8 lg:gap-8'>
              <div className='w-[20rem] my-5 lg:w-[20rem]'>
                <img
                  src={ImageConection} alt="Logo conexión" />
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
            <section className='flex flex-col mt-8 h-auto'>
              <div className='flex flex-col justify-center items-center'>
                <h4 className='text-xl lg:text-2xl'>Cuenta conectada</h4>
                <div className='m-5 h-10 p-4 bg-red-200 rounded-md flex justify-center items-center lg:w-[30rem] shadow-lg'>
                  <p className='text-[.6rem] text-black lg:text-[1rem]'>{account}</p>
                </div>
              </div>

              <article className='p-5 m-2 w-full'>
                <div className='flex flex-col justify-center items-center gap-5'>
                  <label className='flex flex-col justify-center'>
                    <div className='flex flex-col justify-center items-center mb-5'>
                      <h3 className='text-xl lg:text-2xl'>Terminos y Condiciones</h3>
                    </div>
                    <textarea
                      className='lg:w-[40rem] w-[20rem] border-solid border-Rojo border-[.1rem] rounded-lg p-4 resize-y'
                      placeholder='Escribir terminos del contrato'
                      type="text"
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
                    />
                  </label>
                  <article className='lg:flex lg:gap-8 lg:my-5'>
                    <label className='flex flex-col justify-center items-center mt-5'>
                      <h3 className='text-xl lg:text-2xl'>Precio (USD)</h3>
                      <input
                        className='border-Rojo border-[.1rem] rounded-lg p-2 mt-5'
                        type="text"
                        placeholder='Ingresa precio'
                        value={precio} onChange={(e) => setPrecio(e.target.value)} />
                    </label>
                    <label className='flex flex-col justify-center items-center mt-5'>
                      <div>
                        <h3 className='text-xl lg:text-2xl'>Número Secreto</h3>
                      </div>

                      <input
                        className='border-Rojo border-[.1rem] rounded-lg p-2 mt-5'
                        type="text"
                        placeholder='Ingresa número Secreto'
                        value={numeroSecreto}
                        onChange={(e) => setNumeroSecreto(e.target.value)}
                      />
                    </label>
                  </article>

                </div>
                <div className='flex justify-center items-center mt-5'>
                  <button
                    className='p-3 bg-Rojo-claro rounded-full hover:shadow-lg my-5 text-sm text-white lg:text-lg lg:p-3 hover:bg-red-500 transition'
                    onClick={handleInicializarContrato}>Inicializar Contrato
                  </button>
                </div>
                <div className='h-auto flex justify-center items-center mt-3'>
                  <div style={{ display: generarQR ? 'block' : 'none' }}>
                    <QRCode value={UrlComprador} />
                  </div>
                  <div className='flex justify-center items-center'>
                    <button
                      className='p-3 bg-Rojo-claro rounded-full hover:shadow-lg my-5 text-sm text-white lg:text-lg lg:p-3 hover:bg-red-500 transition'
                      onClick={handleGenerarQR} style={{ display: generarQR ? 'none' : 'block' }}>
                      Generar código QR
                    </button>
                  </div>
                </div>
              </article>

            </section>
          </>
        )}
      </div>
    </main>
  )
}

export default CompraVentaComponenteCrearContrato
