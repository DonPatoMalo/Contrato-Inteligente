import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const CompraVentaComponent = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contrato, setContrato] = useState(null);
  const [account, setAccount] = useState(null);
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [numeroSecreto, setNumeroSecreto] = useState('');

  useEffect(() => {
    // Función para inicializar MetaMask
    const initMetaMask = async () => {
      // Comprobamos si MetaMask está instalado
      if (window.ethereum) {
        // Habilitamos MetaMask
        await window.ethereum.enable();
        const ethProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(ethProvider);

        // Obtenemos el Signer
        const ethSigner = ethProvider.getSigner();
        setSigner(ethSigner);

        // Obtenemos la dirección de la cuenta actual
        const accounts = await ethProvider.listAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }

        // Creamos la instancia del contrato
        const contratoAbi = [
          'function inicializarContrato(string _descripcion, uint _precio, uint _numeroSecreto) external',
          'function firmarContrato(uint _numeroSecreto) external',
          'function verDetalleContrato() external view returns (string, uint)',
        ];
        const contratoAddress = '0x93D8e96A4d719e4a17Fb7832729ea483f08980fb'; // Reemplaza con la dirección real del contrato
        const contratoInstance = new ethers.Contract(
          contratoAddress,
          contratoAbi,
          ethProvider.getSigner()
        );
        setContrato(contratoInstance);
      } else {
        console.error('MetaMask no está instalado.');
      }
    };

    initMetaMask();
  }, []); // Solo se ejecuta una vez al montar el componente

  const handleInicializarContrato = async () => {
    if (contrato && descripcion && precio && numeroSecreto) {
      try {
        // Llamamos a la función inicializarContrato del contrato
        await contrato.inicializarContrato(descripcion, ethers.utils.parseUnits(precio, 18), numeroSecreto);
        console.log('Contrato inicializado correctamente.');
      } catch (error) {
        console.error('Error al inicializar el contrato:', error.message);
      }
    }
  };

  const handleFirmarContrato = async () => {
    if (contrato && numeroSecreto) {
      try {
        // Llamamos a la función firmarContrato del contrato
        await contrato.firmarContrato(numeroSecreto);
        console.log('Contrato firmado correctamente.');
      } catch (error) {
        console.error('Error al firmar el contrato:', error.message);
      }
    }
  };

  const handleVerDetalleContrato = async () => {
    if (contrato) {
      try {
        // Llamamos a la función verDetalleContrato del contrato
        const detalleContrato = await contrato.verDetalleContrato();
        console.log('Detalle del contrato:', detalleContrato);
      } catch (error) {
        console.error('Error al obtener el detalle del contrato:', error.message);
      }
    }
  };

  return (
    <div>
      <h2>Compra y Venta</h2>
      <p>Cuenta conectada: {account}</p>

      <div>
        <h3>Inicializar Contrato</h3>
        <label>
          Descripción:
          <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </label>
        <label>
          Precio (DAI):
          <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
        </label>
        <label>
          Número Secreto:
          <input type="text" value={numeroSecreto} onChange={(e) => setNumeroSecreto(e.target.value)} />
        </label>
        <button onClick={handleInicializarContrato}>Inicializar Contrato</button>
      </div>

      <div>
        <h3>Firmar Contrato</h3>
        <label>
          Número Secreto:
          <input type="text" value={numeroSecreto} onChange={(e) => setNumeroSecreto(e.target.value)} />
        </label>
        <button onClick={handleFirmarContrato}>Firmar Contrato</button>
      </div>

      <div>
        <h3>Ver Detalle Contrato</h3>
        <button onClick={handleVerDetalleContrato}>Ver Detalle Contrato</button>
      </div>
    </div>
  );
};

export default CompraVentaComponent;
