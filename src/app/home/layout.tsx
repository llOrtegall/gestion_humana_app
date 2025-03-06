import Image from 'next/image';
import Header from './Header';
import { auth } from '@/auth';
import LogOutGoogle from '../components/LogOutGoogle';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <section className='flex h-screen'>
      <header className='w-3xs border-r border-gray-200'>
        <Header />
      </header>

      <main className='w-full relative'>

        <nav className=''>
          <ul className='absolute right-0 top-1 p-2 z-50 flex items-center gap-6 border-l border-gray-200'>
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </figure>
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
            </figure>
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
            </figure>
            <figure>
              <Image
                src={`${session?.user?.image}`}
                className='w-8 h-8 rounded-full'
                alt="logo"
                width={150}
                height={150}
              />
            </figure>
          </ul>
        </nav>

        <article className='absolute right-2 top-16 border border-gray-200 bg-white rounded-lg z-50 shadow-md'>
          <figure className='flex items-center gap-2 border-b border-gray-200 p-2 px-6'>
            <Image
              className='w-12 h-12 rounded-full'
              src={`${session?.user?.image}`}
              alt="logo"
              width={150}
              height={150}
            />
            <span className='pt-1'>
              {session?.user?.name}
            </span>
          </figure>
          <ul>
            <li className='flex items-center border-b border-gray-200 py-4 px-6 gap-4 text-blue-400 hover:underline'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
              <a href=''>MI PERFIL</a>
            </li>
            <li className='flex items-center border-b border-gray-200 py-4 px-6 gap-4 text-blue-400 hover:underline'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
              </svg>
              <a href=''>INVITAR A COMPAÑEROS</a>
            </li>
            <li className='flex items-center border-b border-gray-200 py-4 px-6 gap-4 text-blue-400 hover:underline'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>

              <a href=''>CENTRO DE AYUDA</a>
            </li>
            <li className='flex items-center border-b border-gray-200 py-4 px-6 gap-4 text-blue-400 hover:underline'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
              </svg>

              <a href=''>ENVIAR UN TICKET</a>
            </li>
            <li className=''>
              <LogOutGoogle />
            </li>
          </ul>
        </article>

        {children}

      </main>
    </section>
  );
}