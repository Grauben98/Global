import Head from 'next/head'
import { useUser } from '../hook/authUser'
import { getAllArticles } from '../utils/supabase-consult'
import Contenedor from './container/container'

export default function Home({ articles }) {
  const { user } = useUser()
  return (
    <Contenedor>
      <Head>
        <title>Blog </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-x-hidden bg-white">

        <div className="px-6 py-8">
          <div className="container flex justify-between mx-auto">
            <div className="w-full ">
              {
                (user) ?
                  <>
                    <div className="flex items-center justify-between">
                      <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Tus articulos</h1>
                    </div>
                    <div className="mt-6">
                      <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <a href="/form" className="text-2xl font-bold text-gray-700 hover:underline">
                          <h2>Crear articulo</h2>
                        </a>
                      </div>
                    </div>
                    {
                      (articles.length == 0) ?
                        <div className="mt-6">
                          <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                            <h2>Sin Articulos que mostrar por el momento </h2>
                          </div>
                        </div>
                        :
                        articles.map(obj => {
                          if (obj.id_creator == user.id) {
                            return (
                              <div className="mt-6">
                                <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                                  <div className="flex items-center justify-between"><span className="font-light text-gray-600">{obj.creator_date}</span>
                                  </div>
                                  <div className="mt-2"><a href={"/article?ar=" + obj.id} className="text-2xl font-bold text-gray-700 hover:underline">{obj.title}</a>
                                    <p className="mt-2 text-gray-600">{obj.description}</p>
                                  </div>
                                  <div className="flex items-center justify-between mt-4"><a href={"/article?ar=" + obj.id}
                                    className="text-blue-500 hover:underline">Leer más</a>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                        })
                    }
                    <div className="flex items-center justify-between">
                      <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Otros articulos</h1>
                    </div>
                    {
                      articles.map(obj => {
                        if (obj.id_creator != user.id) {
                          return (
                            <div className="mt-6">
                              <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                                <div className="flex items-center justify-between"><span className="font-light text-gray-600">{obj.creator_date}</span>
                                </div>
                                <div className="mt-2"><a href={"/article?ar=" + obj.id} className="text-2xl font-bold text-gray-700 hover:underline">{obj.title}</a>
                                  <p className="mt-2 text-gray-600">{obj.description}</p>
                                </div>
                                <div className="flex items-center justify-between mt-4"><a href={"/article?ar=" + obj.id}
                                  className="text-blue-500 hover:underline">Leer más</a>
                                </div>
                              </div>
                            </div>
                          )
                        }
                      })
                    }
                  </>
                  :
                  <>
                    <div className="flex items-center justify-between">
                      <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Articulos</h1>
                    </div>
                    {
                      (articles.length == 0) ?
                        <div className="mt-6">
                          <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                            <h2>Sin Articulos que mostrar por el momento </h2>
                          </div>
                        </div>
                        :
                        articles.map(obj => {
                          return (
                            <div className="mt-6">
                              <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                                <div className="flex items-center justify-between"><span className="font-light text-gray-600">{obj.creator_date}</span>
                                </div>
                                <div className="mt-2"><a href={"/article?ar=" + obj.id} className="text-2xl font-bold text-gray-700 hover:underline">{obj.title}</a>
                                  <p className="mt-2 text-gray-600">{obj.description}</p>
                                </div>
                                <div className="flex items-center justify-between mt-4"><a href={"/article?ar=" + obj.id}
                                  className="text-blue-500 hover:underline">Leer más</a>
                                </div>
                              </div>
                            </div>
                          )
                        })
                    }
                  </>
              }

            </div>
          </div>
        </div>
      </div>
    </Contenedor>
  )
}

export async function getServerSideProps() {
  const articles = await getAllArticles();
  return {
    props: {
      articles
    }
  }
}
