import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import classNames from '../../utils/classsesNames'

import { SignOut } from '../../hook/authUser'
import { useRouter } from 'next/router'

const MenuLogado = () => {
  const router = useRouter();
  return(
    <Menu as="div" className="ml-3 relative">
    {({ open }) => (
      <>
        <div>
          <Menu.Button type="button">
          <a class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500">Mi Cuenta</a>
          </Menu.Button>
        </div>
        <Transition
          show={open}
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items side="right"
            static
            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/cuenta"
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Perfil
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              <button onClick={() =>{ 
                SignOut()
                router.push('/')
              }} 
                className="block px-4 py-2 text-sm text-red-700">
                Cerrar Sesión
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </>
    )}
  </Menu>
  )
}

export default MenuLogado
