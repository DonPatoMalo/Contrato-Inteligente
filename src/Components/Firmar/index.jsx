import React, { useState } from 'react'
import { ethers } from 'ethers'

const FirmarContrato = () => {
      const [provider, setProvider] = useState(null)
      const [signer, setSigner] = useState(null)
      const [contrato, setContrato] = useState(null)
      const [account, setAccount] = useState(null)
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


      const handleFirmarContrato = async () => {
            if (contrato && numeroSecreto) {
                  try {
                        await contrato.firmarContrato(numeroSecreto)
                        console.log('Contrato firmado correctamente.')
                  } catch (error) {
                        console.error('Error al firmar el contrato:', error.message)
                  }
            }
      }

      return (
            <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex justify-center">
                  <div>
                        <h2>Compra y Venta - Firmar Contrato</h2>
                        {!connectedToMetaMask && (
                              <button onClick={conectarMetamask}>Conectar a MetaMask</button>
                        )}
                        {connectedToMetaMask && (
                              <>
                                    <p>Cuenta conectada: {account}</p>

                                    <div>
                                          <h3>Firmar Contrato</h3>
                                          <label>
                                                Número Secreto:
                                                <input
                                                      type="text"
                                                      value={numeroSecreto}
                                                      onChange={(e) => setNumeroSecreto(e.target.value)}
                                                />
                                          </label>
                                          <button onClick={handleFirmarContrato}>Firmar Contrato</button>
                                    </div>
                              </>
                        )}
                  </div>
            </main>
      )
}

export default FirmarContrato
