import { useState } from "react"
import { ResetPassword, useUser } from "../hook/authUser"
import Container from "./container/container"

export default function account() {
    const { user } = useUser()
    const [push, setPush] = useState(false)
    return (
        <Container>
            <div class="font-mono bg-white">
                <div class="container mx-auto">
                <a href="/">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99999 3.0929L2 8.09288L2 8.79999L6.99999 13.8L7.7071 13.0929L3.56066 8.94644L14 8.94644L14 7.94644L3.56066 7.94644L7.7071 3.8L6.99999 3.0929Z" fill="#C5C5C5" />
            </svg>
          </a>
                    <div class="flex justify-center px-6 my-12">
                        <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                            <div class="w-full lg:w-7/12 bg-gray-100 p-5 rounded-lg lg:rounded-l-none">
                                <h3 class="pt-4 text-2xl text-center">Administra tu cuenta</h3>
                                <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">

                                    <div class="mb-4">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                            Email
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            value={user.email}
                                        />
                                    </div>
                                    <div class="mb-4 md:flex md:justify-between">
                                        <div class="mb-6 text-center">
                                            <button
                                                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                                type="button"
                                                onClick={() => {
                                                    ResetPassword(user.email)
                                                    setPush(!push)
                                                }}
                                                disabled={push}
                                            >
                                                Cambiar contraseña
                                            </button>
                                        </div>
                                        
                                    </div>
                                    {
                                                (push) ?
                                                    <div>
                                                        <p>Se ha enviado un correo para que puedas cambiar tu contraseña</p>
                                                    </div>
                                                    :
                                                    <></>
                                            }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>





    )

}