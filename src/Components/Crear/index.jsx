import React, { useState } from 'react'
import { ethers } from 'ethers'
import Metamask from '../../assets/img/metamask.png'
import LogoContrato from '../../assets/img/logoContrato.png'
import ImageConection from '../../assets/img/conection.png'

const CompraVentaComponenteCrearContrato = () => {
  const [provider, setProvider] = useState(null)
  const [signer, setSigner] = useState(null)
  const [contrato, setContrato] = useState(null)
  const [account, setAccount] = useState(null)
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState('')
  const [numeroSecreto, setNumeroSecreto] = useState('')
  const [connectedToMetaMask, setConnectedToMetaMask] = useState(false)

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
      const contratoAddress = '0x210DfE6109DfbFE2b9821A83cFC75Cf990a78362'
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

  return (
    <main className="mx-auto lg:max-w-[50rem] py-6 sm:px-6 lg:px-8 flex justify-center font-Montserrat">
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
                  className='flex justify-center items-center w-[15rem] h-[3rem] rounded-md bg-black mt-5 hover:bg-Rojo-claro transition duration-300'
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
              <p>Cuenta conectada: {account}</p>

              <div>
                <h3>Inicializar Contrato</h3>
                <label>
                  Descripción:
                  <input
                    className='w-[20rem] border-black'
                    placeholder='Descripción del contrato'
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                </label>
                <label>
                  Precio (DAI):
                  <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </label>
                <label>
                  Número Secreto:
                  <input
                    type="text"
                    value={numeroSecreto}
                    onChange={(e) => setNumeroSecreto(e.target.value)}
                  />
                </label>
                <button onClick={handleInicializarContrato}>Inicializar Contrato</button>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  )
}

export default CompraVentaComponenteCrearContrato
