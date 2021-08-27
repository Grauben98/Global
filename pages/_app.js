import 'tailwindcss/tailwind.css'
import { UserContextProvider } from '../hook/authUser'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </>
  )
}

export default MyApp