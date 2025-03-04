"use client";

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='flex w-2/12 flex-col'>
      <figure className='flex items-center gap-2'>
        <div className='px-2 py-3'>
          <Image src='/menu.svg' alt='logo' width={10} height={10} className='w-7' />
        </div>
        <div className='flex w-full h-full justify-center items-center gap-2 border-gray-300'>
          <Image src='/logo.svg' alt='logo' width={10} height={10} className='w-6' />
          <span className='font-bold'>G A N E</span>
        </div>
      </figure>
      <nav className='p-2 text-gray-600'>
        <ul className='py-1 flex flex-col gap-2'>
          <li className=''>
            <Link
              className={`${pathname === '/home' ? 'activeLink' : 'inactiveLink'}`}
              href='/home'
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span className=''>
                Inicio
              </span>
            </Link>
          </li>
          <li className=''>
            <Link 
              className={`${pathname === '/home/empleados' ? 'activeLink' : 'inactiveLink'}`}
              href='/home/empleados' 
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
              <span>
                Empleados
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}