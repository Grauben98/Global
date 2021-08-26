import { Auth } from '@supabase/ui'
import { supabase } from '../utils/initSupabase'
import { AuthRedirect } from '../hook/authUser'

export default function AuthBasic() {
  AuthRedirect()
  return (
    <>
      <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
        <div className="content text-3xl text-center md:text-left">
          <h1 class="text-5xl font-bold" style={{ color: "#24B47E" }}>CAED</h1>
          <p>Un lugar para todo.</p>
        </div>
        <div className="container mx-auto flex flex-col items-center">
          <div className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
            <a href="/">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99999 3.0929L2 8.09288L2 8.79999L6.99999 13.8L7.7071 13.0929L3.56066 8.94644L14 8.94644L14 7.94644L3.56066 7.94644L7.7071 3.8L6.99999 3.0929Z" fill="#C5C5C5" />
              </svg>
            </a>
            <Auth supabaseClient={supabase} view={'sign_in'} />
          </div>
          <p className="text-center text-sm my-4">
            <span className="font-semibold text-center w-full">Crea una cuenta</span> para poder publicar.
          </p>
        </div>
      </div>
    </>
  )
}