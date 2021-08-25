import { Auth, Typography, Button } from '@supabase/ui'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('http://localhost:3000', process.env.NEXT_PUBLIC_SK)

const Container = (props) => {
  const { user } = Auth.useUser()
  if (user)
    return (
      <>
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    )
  return props.children
}

export default function AuthBasic() {
  return (
    <>

<div class="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
  <div class="content text-3xl text-center md:text-left">
    <h1 class="text-5xl font-bold" style={{color:"#24B47E"}}>CAED</h1>
    <p>Connect with putas all arround the world.</p>
  </div>
  <div class="container mx-auto flex flex-col items-center">
    <form class="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg"><Auth.UserContextProvider supabaseClient={supabase}>
      <Container supabaseClient={supabase}>
        <Auth supabaseClient={supabase} />
      </Container>
    </Auth.UserContextProvider>
      
    </form>
    <p class="text-center text-sm my-4">
      <span class="font-semibold text-center w-full">Crea una cuenta</span> para poder publicar.
    </p>
  </div>
</div>



</>
  )
}