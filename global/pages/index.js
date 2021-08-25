import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-x-hidden bg-gray-100">
        <nav className="px-6 py-4 bg-white shadow">
          <div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <div>
                <a href="#" className="text-xl font-bold text-gray-800 md:text-2xl">CAED</a>
              </div>
              <div>
                <button type="button" className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                    </path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex-col hidden md:flex md:flex-row md:-mx-4">
              <a href="#" className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Inicio</a>
              <a href="#" className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Cuenta</a>
              <a href="#" className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Acerca de</a>
            </div>
          </div>
        </nav>

        <div className="px-6 py-8">
          <div className="container flex justify-between mx-auto">
            <div className="w-full lg:w-8/12">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Articulos</h1>
              </div>
              {/* Inicio de Resultado de Post */}

              <div className="mt-6">
                <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-between"><span className="font-light text-gray-600">Fecha</span><a href="#"
                    className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Tag/Tema</a>
                  </div>
                  <div className="mt-2"><a href="#" className="text-2xl font-bold text-gray-700 hover:underline">Nombre de Artículo</a>
                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque.</p>
                  </div>
                  <div className="flex items-center justify-between mt-4"><a href="#"
                    className="text-blue-500 hover:underline">Leer más</a>
                    <div><a href="#" className="flex items-center"><img
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                      alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                      <h1 className="font-bold text-gray-700 hover:underline">Autor</h1>
                    </a></div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-between"><span className="font-light text-gray-600">Fecha</span><a href="#"
                    className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Tag/Tema</a>
                  </div>
                  <div className="mt-2"><a href="#" className="text-2xl font-bold text-gray-700 hover:underline">Nombre de Artículo</a>
                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque.</p>
                  </div>
                  <div className="flex items-center justify-between mt-4"><a href="#"
                    className="text-blue-500 hover:underline">Leer más</a>
                    <div><a href="#" className="flex items-center"><img
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                      alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                      <h1 className="font-bold text-gray-700 hover:underline">Autor</h1>
                    </a></div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-between"><span className="font-light text-gray-600">Fecha</span><a href="#"
                    className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Tag/Tema</a>
                  </div>
                  <div className="mt-2"><a href="#" className="text-2xl font-bold text-gray-700 hover:underline">Nombre de Artículo</a>
                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque.</p>
                  </div>
                  <div className="flex items-center justify-between mt-4"><a href="#"
                    className="text-blue-500 hover:underline">Leer más</a>
                    <div><a href="#" className="flex items-center"><img
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                      alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                      <h1 className="font-bold text-gray-700 hover:underline">Autor</h1>
                    </a></div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-between"><span className="font-light text-gray-600">Fecha</span><a href="#"
                    className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Tag/Tema</a>
                  </div>
                  <div className="mt-2"><a href="#" className="text-2xl font-bold text-gray-700 hover:underline">Nombre de Artículo</a>
                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque.</p>
                  </div>
                  <div className="flex items-center justify-between mt-4"><a href="#"
                    className="text-blue-500 hover:underline">Leer más</a>
                    <div><a href="#" className="flex items-center"><img
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                      alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                      <h1 className="font-bold text-gray-700 hover:underline">Autor</h1>
                    </a></div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-between"><span className="font-light text-gray-600">Fecha</span><a href="#"
                    className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Tag/Tema</a>
                  </div>
                  <div className="mt-2"><a href="#" className="text-2xl font-bold text-gray-700 hover:underline">Nombre de Artículo</a>
                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque.</p>
                  </div>
                  <div className="flex items-center justify-between mt-4"><a href="#"
                    className="text-blue-500 hover:underline">Leer más</a>
                    <div><a href="#" className="flex items-center"><img
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                      alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                      <h1 className="font-bold text-gray-700 hover:underline">Autor</h1>
                    </a></div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-between"><span className="font-light text-gray-600">Fecha</span><a href="#"
                    className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Tag/Tema</a>
                  </div>
                  <div className="mt-2"><a href="#" className="text-2xl font-bold text-gray-700 hover:underline">Nombre de Artículo</a>
                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque.</p>
                  </div>
                  <div className="flex items-center justify-between mt-4"><a href="#"
                    className="text-blue-500 hover:underline">Leer más</a>
                    <div><a href="#" className="flex items-center"><img
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                      alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                      <h1 className="font-bold text-gray-700 hover:underline">Autor</h1>
                    </a></div>
                  </div>
                </div>
              </div>
              {/* Fin de Resultado de Post */}

            </div>
            <div className="hidden w-4/12 -mx-8 lg:block">
              <div className="px-8">
                <h1 className="mb-4 text-xl font-bold text-gray-700">Editores</h1>
                <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                  <ul className="-mx-4">
                    <li className="flex items-center"><img
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                      alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full" />
                      <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Editor</a><span
                        className="text-sm font-light text-gray-700">## Articulos</span></p>
                    </li>
                    <li className="flex items-center mt-6"><img
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                      alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full" />
                      <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Editor</a><span
                        className="text-sm font-light text-gray-700">## Articulos</span></p>
                    </li>
                    <li className="flex items-center mt-6"><img
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                      alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full" />
                      <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Editor</a><span
                        className="text-sm font-light text-gray-700">## Articulos</span></p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="px-8 mt-10">
                <h1 className="mb-4 text-xl font-bold text-gray-700">Tags/Temas</h1>
                <div className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <ul>

                    <li><a href="#"
                      className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                      Tag/Tema</a>
                    </li>
                    <li className="mt-2"><a href="#"
                      className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                      Tag/Tema</a>
                    </li>
                    <li className="mt-2"><a href="#"
                      className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                      Tag/Tema</a>
                    </li>
                    <li className="mt-2"><a href="#"
                      className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                      Tag/Tema</a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
        <footer className="px-6 py-2 text-gray-100 bg-gray-800">
          <div className="container flex flex-col items-center justify-between mx-auto md:flex-row"><a href="#"
            className="text-2xl font-bold">CAED</a>
            <p className="mt-2 md:mt-0">Todos los derechos reservados.</p>
            <div className="flex mt-4 mb-2 -mx-2 md:mt-0 md:mb-0"><a href="#" className="mx-2 text-gray-100 hover:text-gray-400"><svg viewBox="0 0 512 512"
                className="w-4 h-4 fill-current">
                <path
                  d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z">
                </path>
              </svg></a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
