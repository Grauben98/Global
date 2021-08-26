import { Auth, Typography, Button } from '@supabase/ui'
import { supabase } from '../utils/initSupabase'
import { AuthRedirect } from '../hook/authUser'

export default function AuthBasic() {
  AuthRedirect()
  return (
    <>
      <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
        <div className="content text-3xl text-center md:text-left">
          <h1 class="text-5xl font-bold" style={{color:"#24B47E"}}>CAED</h1>
          <p>Connect with putas all arround the world.</p>
        </div>
        <div className="container mx-auto flex flex-col items-center">
          <div className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
          <Auth supabaseClient={supabase} view={'sign_in'}/>
          </div>
          <p className="text-center text-sm my-4">
            <span className="font-semibold text-center w-full">Crea una cuenta</span> para poder publicar.
          </p>
        </div>
      </div>
    </>
  )
}