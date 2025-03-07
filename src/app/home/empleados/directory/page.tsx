export default function EmpleadosDirectory() {
  return (
    <section className="p-4 flex flex-col gap-6 bg-gray-100">

      <section className=" flex justify-between items-center">
        <div className="flex gap-4">
          <button className="flex gap-4 border border-gray-200 px-4 py-2 rounded-lg bg-white cursor-pointer hover:bg-gray-100">
            <p>VISTAS : </p>
            <svg
              className="w-6 h-6 inline-block text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" fill="currentColor"><path d="M12 16L6 10H18L12 16Z"></path></svg>
          </button>
          <button className="border-2 text-gray-400 border-gray-200 px-8 py-2 rounded-lg">
            ACCIONES
          </button>
        </div>

        <div className="flex items-center gap-8">
          <button className="flex items-center gap-2 text-blue-400 text-lg hover:text-blue-500 hover:underline hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
            </svg>

            <p>AÑADIR EMPLEADO</p>
          </button>
          <figure className="flex items-center gap-1">
            <button className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 hover:cursor-pointer text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="w-10 h-10 text-2xl bg-blue-100 rounded-full flex items-center justify-center hover:cursor-pointer text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
              </svg>

            </button>

          </figure>
        </div>
      </section>

      <section className="border border-gray-200 rounded-xl bg-white">
        <div className="flex">
          <div className="flex gap-4 px-6 py-4 border-r border-gray-200">
            <p>Estado: </p>
            <svg
              className="w-6 h-6 inline-block text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" fill="currentColor"><path d="M12 16L6 10H18L12 16Z"></path>
            </svg>
          </div>
          <div className="flex gap-4 px-6 py-4 border-r border-gray-200">
            <p>Empresa: </p>
            <svg
              className="w-6 h-6 inline-block text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" fill="currentColor"><path d="M12 16L6 10H18L12 16Z"></path>
            </svg>
          </div>
          <div className="flex gap-4 px-6 py-4 border-r border-gray-200">
            <p>Oficina: </p>
            <svg
              className="w-6 h-6 inline-block text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" fill="currentColor"><path d="M12 16L6 10H18L12 16Z"></path>
            </svg>
          </div>
          <div className="flex gap-4 px-6 py-4 border-r border-gray-200">
            <p>Departamento: </p>
            <svg
              className="w-6 h-6 inline-block text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" fill="currentColor"><path d="M12 16L6 10H18L12 16Z"></path>
            </svg>
          </div>
          <div className="flex gap-4 px-6 py-4 border-r border-gray-200">
            <p>Equipo: </p>
            <svg
              className="w-6 h-6 inline-block text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" fill="currentColor"><path d="M12 16L6 10H18L12 16Z"></path>
            </svg>
          </div>
          <div className="flex-1 flex px-6 py-4 border-r border-gray-200">
          </div>
          <div className="flex gap-4 items-center text-blue-400 px-6 py-4 border-r border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

            <input className="text-base text-gray-800 border-none select-none" placeholder="Buscar" />

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

          </div>
        </div>
        <div className="flex items-center border-t border-gray-200 bg-gray-100">
          <p className="flex-1 pl-4 text-gray-600">No se ha aplicado ningún filtro</p>
          <div className="bg-white px-6 py-4 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
        </div>

      </section>

      <div className="bg-pink-100 px-4 py-2">
        content
      </div>

    </section>
  )
}


