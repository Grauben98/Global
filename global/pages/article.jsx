
export default function Article() {
    return (

<div className="">
    <div className='flex max-w-xl my-10 bg-white shadow-2xl rounded-lg overflow-hidden mx-auto'>
        <div className='flex items-center w-full'>
            <div className='w-full'>
                <div className="flex flex-row mt-2 px-2 py-3 mx-3">
                    <div className="w-auto h-auto rounded-full ">
                        <img className='w-12 h-12 object-cover rounded-full shadow cursor-pointer' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'/>
                    </div>
                    <div className="flex flex-col mb-2 ml-4 mt-1">
                        <div className='text-gray-600 text-sm font-semibold'>Autor</div>
                        <div className='flex w-full mt-1'>
                            <div className='text-blue-700 font-base text-xs mr-1 cursor-pointer'>
                                Tema
                            </div> 
                            <div className='text-gray-400 font-thin text-xs'>
                                • Fecha y Hora
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b border-gray-100"></div> 
                <div className='text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2'><img class="rounded" src="https://picsum.photos/536/354"/></div>
                <div className='text-gray-600 font-semibold text-lg mb-2 mx-3 px-2'>Título de Artículo</div>
                <div className='text-gray-500 font-thin text-sm mb-6 mx-3 px-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum aut velit quis eius? Voluptates labore fuga, tempora obcaecati, accusamus dignissimos blanditiis quam nemo, repellendus quisquam iusto facilis consectetur similique illo.</div></div>
        </div>
    </div>
</div>
    )
}