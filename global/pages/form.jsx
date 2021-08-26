



export default function Form(){
    return (
<div class="min-h-screen bg-gray-100 p-0 sm:p-12">
  <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
    <h1 class="text-2xl font-bold mb-8">Nuevo Artículo</h1>
    <form id="form" novalidate>
      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          name="name"
          placeholder=" "
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Título</label>
      </div>

      <div class="relative z-0 w-full mb-5">
        <input
          placeholder="Tema"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />

      </div>

      <div class="relative z-0 w-full mb-5">
        <input
          placeholder="Descripción"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />

      </div>

      <div class="relative z-0 w-full mb-5">
        <input
          placeholder="Artículo"
          class="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
      </div>

      <button
        id="button"
        type="button"
        class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
      >
        Toggle Error
      </button>
    </form>
  </div>
</div>

    )
}