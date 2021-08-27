import AuthUser from '../../hook/authUser'
import MenuLogado from './menuLogado'

export default function Example() {
    return (
        <>
         <nav className="px-6 py-4 bg-white shadow">
          <div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <div>
                <a href="/" className="text-xl font-bold text-gray-800 md:text-2xl">CAED</a>
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
            <div className="flex-col md:flex md:flex-row md:-mx-4">
              {AuthUser() ? 
                  <MenuLogado /> : 
                  <a href="/login"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-4"
                  >
                    Iniciar Sesión
                  </a>
                }
            </div>
          </div>
        </nav>
        </>
    )
}