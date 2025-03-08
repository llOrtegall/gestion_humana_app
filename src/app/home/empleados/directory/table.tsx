import Image from 'next/image';

export default function TableEmpleados() {

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-100 border-b border-gray-200'>
          <tr>
            <th scope='col' className='p-4'>
              <div className='flex items-center'>
                <input id='checkbox-all-search' type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2  dark:border-gray-600' />
                <label className='sr-only'>checkbox</label>
              </div>
            </th>
            <th scope='col' className='px-6 py-3'>
              Nombre
            </th>
            <th scope='col' className='px-6 py-3'>
              Responsable
            </th>
            <th scope='col' className='px-6 py-3'>
              Empresa
            </th>
            <th scope='col' className='px-6 py-3'>
              Departamento
            </th>
            <th scope='col' className='px-6 py-3'>
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-white border-b border-gray-200 hover:bg-gray-50'>
            <td className='w-4 p-4'>
              <div className='flex items-center'>
                <input id='checkbox-table-search-1' type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2  dark:border-gray-600' />
                <label className='sr-only'>checkbox</label>
              </div>
            </td>
            <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center'>
              <Image src='/profile.jpg' alt='Foto de perfil' width={24} height={24} className='rounded-full' />
              <span className='ml-2 text-blue-500 cursor-pointer hover:underline'>Juan Perez</span>
            </th>
            <td className='text-black font-medium px-6 py-4'>
              Viviana Ardila
            </td>
            <td className='text-black font-medium px-6 py-4'>
              Grupo Empresarial Servired
            </td>
            <td className='text-black font-medium px-6 py-4'>
              Financiero
            </td>
            <td className='text-black font-medium px-6 py-4'>
              <span className='bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-2xl '>
                Activo
              </span>
            </td>
          </tr>
          <tr className='bg-white border-b border-gray-200 hover:bg-gray-50'>
            <td className='w-4 p-4'>
              <div className='flex items-center'>
                <input id='checkbox-table-search-1' type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2  dark:border-gray-600' />
                <label className='sr-only'>checkbox</label>
              </div>
            </td>
            <th scope='row' className='px-6 py-4 text-gray-900 font-medium whitespace-nowrap flex items-center'>
              <Image src='/profile.jpg' alt='Foto de perfil' width={24} height={24} className='rounded-full' />
              <span className='ml-2 text-blue-500 cursor-pointer hover:underline'>Andres Perez</span>
            </th>
            <td className='text-black font-medium px-6 py-4'>
              Viviana Ardila
            </td>
            <td className='text-black font-medium px-6 py-4'>
              Grupo Empresarial Servired
            </td>
            <td className='text-black font-medium px-6 py-4'>
              Financiero
            </td>
            <td className='text-black font-medium px-6 py-4'>
              <span className='bg-yellow-400 text-white text-sm font-medium px-4 py-2 rounded-2xl '>
                No Activido
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}