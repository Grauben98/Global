import { useEffect, useState, createContext, useContext } from 'react'
import { isEmptyObj } from './userValidations'
import { supabase } from '../utils/initSupabase'
import { useRouter } from 'next/router'

export const SignOut = async () => {
  await supabase.auth.signOut()
}
export const RegisterMeta = async (dataInput) => {
  await supabase.auth.update({ 
    data: { stripe: dataInput } 
  });
}

export const RequireAuth = () => {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/iniciar-sesion')
    }
  }, [user, router])
}

export const AuthRedirect = () => {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      if(isEmptyObj(user.user_metadata)) {
        RegisterMeta('none');
        router.push('/formulario')
      }else{
        if(user.user_metadata.stripe=='none'){
          router.push('/formulario')
        }else{
          router.push('/cuenta')
        }
      }
    }
  }, [user, router])
}

export const UserContext = createContext()

export const UserContextProvider = (props) => {
  const [session, setSession] = useState(false)
  const [user, setUser] = useState(false)

  useEffect(() => {
    const session = supabase.auth.session()
    setSession(session)
    setUser(session?.user ?? false)
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session)
      setUser(session?.user ?? false)
    })

    return () => {
      authListener.unsubscribe()
    }
  }, [])

  const value = {
    session,
    user,
  }
  return <UserContext.Provider value={value} {...props} />
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`)
  }
  return context
}

const AuthUser = () => {
  const { user } = useUser()
  return user
}

export default AuthUser
