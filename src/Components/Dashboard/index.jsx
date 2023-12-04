import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import { useAuth } from "../../Context/auth"


const navigation = [
  { name: 'Instrucciones', to: '/Contrato-Inteligente/contrato', current: true },
  { name: 'Inicio', to: '/Contrato-Inteligente/', current: false },
  { name: 'Crear', to: '/Contrato-Inteligente/create', current: false },
  { name: 'Firmar', to: '/Contrato-Inteligente/firmar', current: false },
  { name: 'Historial', to: '/Contrato-Inteligente/historial', current: false },
];

const userNavigation = [
  { name: 'Perfil', to: '#' },
  { name: 'Configuración', to: '#' },
  { name: 'Cerrar sesión', to: '/Contrato-Inteligente/' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Dashboard() {

  const information = useAuth()
  information.getUser()
  const usuario = information.usuario

  if (!usuario || !usuario.rutUser) {
    return <p>Cargando...</p>;
  }

  const user = {
    name: usuario.rutUser.nombre,
    email: usuario.rutUser.email,
    imageUrl: usuario.rutUser.imagen,
  };

  return (
    <>
      <header className="min-h-full">
        <Disclosure as="nav" className="bg-white shadow-md">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between border-solid border-teal-950">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10" src={Logo} alt="Contrato Inteligente Logo" />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-12 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.to}
                            className={classNames(
                              item.current
                                ? 'bg-Rojo text-white'
                                : 'text-black hover:bg-Rojo hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div className='p-5'>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Abrir menú de Usuario</span>
                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <NavLink
                                    to={item.to}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </NavLink>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-Rojo-claro hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                      </svg>
                      <span className="sr-only">Open main menu</span>
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={NavLink}
                      to={item.to}
                      className={classNames(
                        item.current ? 'bg-Rojo-claro text-white' : 'text-gray-500 hover:bg-Rojo-claro hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-Rojo pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-500">{user.email}</div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as={NavLink}
                        to={item.to}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-Rojo-claro hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </header>
    </>
  );
}

export default Dashboard;
