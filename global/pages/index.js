import Head from 'next/head'
import {useUser} from '../hook/authUser'
import { getAllArticles, getAllArticlesOfEditor } from '../utils/supabase-consult'
import Contenedor from './container/container'
export default function Home({articles}) {
  console.log("datos", articles.length)
  const {user} =useUser()
  return (
    <Contenedor>
      <Head>
        <title>Blog </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-x-hidden bg-gray-100">

        <div className="px-6 py-8">
          <div className="container flex justify-between mx-auto">
            <div className="w-full ">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Articulos</h1>
              </div>
              {/* Inicio de Resultado de Post */}
              {
                
                (articles.length==0)?
                  <div className="mt-6">
                    <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                      <h2>Sin Articulos que mostrar por el momento </h2>
                    </div>
                  </div>
                :
                  articles.map(obj=>{
                    <div className="mt-6">
                      <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <div className="flex items-center justify-between"><span className="font-light text-gray-600">{obj.creator_date}</span>
                        </div>
                        <div className="mt-2"><a href="#" className="text-2xl font-bold text-gray-700 hover:underline">{obj.title}</a>
                          <p className="mt-2 text-gray-600">{obj.description}</p>
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
                  })
              }
              {/* Fin de Resultado de Post */}

            </div>
          </div>
        </div>
      </div>
    </Contenedor>
  )
}

export async function getStaticProps(){
  let articles;
  articles = await getAllArticles();
 
  return{
    props:{
      articles
    }
  }
}
