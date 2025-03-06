'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function HeaderAjustes() {
  const pathname = usePathname();

  return (
    <ul className='flex border-b border-gray-200 text-gray-600'>
      <li>
        <span
          className='px-6 py-4 flex border-r border-gray-200'
        >
          Ajustes
        </span>
      </li>
      <li className='relative flex flex-col items-center'>
        <Link
          className='flex flex-col items-center'
          href='/home/ajustes/vistageneral'
        >
          <p className='px-6 py-4'>Vista General</p>
          {
          pathname.includes('/ajustes/vistageneral') && (
            <span className='absolute bottom-0 h-1 bg-green-300 w-full'></span>
          )
        }
        </Link>
      </li>
      <li className='relative flex flex-col items-center'>
        <Link
          className='flex flex-col items-center'
          href='/home/ajustes/miempresa'
        >
          <p className='px-6 py-4'>Mi Empresa</p>
          {
          pathname.includes('miempresa') && (
            <span className='absolute bottom-0 h-1 bg-green-300 w-full'></span>
          )
        }
        </Link>
      </li>
    </ul>
  )
}