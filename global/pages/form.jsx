import { useState } from "react";
import { useUser } from "../hook/authUser";
import { setNewArticle } from "../utils/supabase-consult";
import Container from "./container/container";
import { useRouter } from 'next/router'

export default function Form() {
  const router = useRouter();
  const { user } = useUser()
  const [unShow, setUnShow] = useState(false);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const [article, setArticle] = useState('')
  return (
    <Container>
      <div class="min-h-screen bg-gray-100 p-0 sm:p-12">
        <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
          <a href="/">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99999 3.0929L2 8.09288L2 8.79999L6.99999 13.8L7.7071 13.0929L3.56066 8.94644L14 8.94644L14 7.94644L3.56066 7.94644L7.7071 3.8L6.99999 3.0929Z" fill="#C5C5C5" />
            </svg>
          </a>

          <h1 class="text-2xl font-bold mb-8">Nuevo Artículo</h1>
          {
            (unShow) ?
              <div class="bg-red-200 ">
                <p >Existen campos vacios. Debe rellenar todos los campos</p>
              </div>
              :
              <></>
          }
          <form id="form" novalidate>
            <div class="relative z-0 w-full mb-5">
              <input
                type="text"
                id="title"
                placeholder="Título"
                value={title}
                onChange={(event) => { setTitle(event.target.value) }}
                required
                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>

            <div class="relative z-0 w-full mb-5">
              <input
                placeholder="Link de imagen"
                id="link"
                required
                value={link}
                onChange={(event) => { setLink(event.target.value) }}
                class="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>

            <div class="relative z-0 w-full mb-5">
              <input
                placeholder="Descripción"
                id="description"
                required
                value={description}
                onChange={(event) => { setDescription(event.target.value) }}
                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />

            </div>

            <div class="relative z-0 w-full mb-5">
              <textarea
                placeholder="Artículo"
                id="article"
                required
                value={article}
                onChange={(event) => { setArticle(event.target.value) }}
                class="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>

            <button
              id="button"
              type="button"
              onClick={() => {
                let data = {};
                if (title != '' && article != '' && link != '' && description != '') {
                  data = {
                    title: title,
                    link: link,
                    description: description,
                    user_creator: user.id,
                    article: article
                  }
                  setUnShow(false);
                  setNewArticle(data);
                  router.push('/')
                } else {
                  setUnShow(true);
                }
              }}
              class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
            >
              Subir articulo
            </button>
          </form>
        </div>
      </div>
    </Container>
  )
}