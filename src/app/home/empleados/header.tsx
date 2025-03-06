'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function HeaderEmpleados() {
  const pathname = usePathname();

  return (
    <ul className='flex border-b border-gray-200 text-gray-600'>
      <li>
        <span
          className='px-6 py-4 flex border-r border-gray-200'
        >
          Empleados
        </span>
      </li>
      <li className='relative flex flex-col items-center'>
        <Link
          className='flex flex-col items-center'
          href='/home/empleados/directory'
        >
          <p className='px-6 py-4'>Directorio</p>
          {
          pathname.includes('directory') && (
            <span className='absolute bottom-0 h-1 bg-green-300 w-full'></span>
          )
        }
        </Link>
      </li>
      <li className='relative flex flex-col items-center'>
        <Link
          className='flex flex-col items-center'
          href='/home/empleados/organigrama'
        >
          <p className='px-6 py-4'>Organigrama</p>
          {
          pathname.includes('organigrama') && (
            <span className='absolute bottom-0 h-1 bg-green-300 w-full'></span>
          )
        }
        </Link>
      </li>
    </ul>
  )
}