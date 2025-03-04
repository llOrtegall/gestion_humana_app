import Header from './Header';
import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  const user = session?.user;

  return (
    <section className='flex h-screen'>

      <header className='w-3xs border-r border-gray-200'>
        <Header />
      </header>

      <section className='w-auto flex-1'>
        <aside className="flex items-center justify-between bg-gray-100 px-4 border-b border-gray-200">
          <nav className='py-3'>
            <ul className="container mx-auto items-center justify-center flex space-x-4">
              <li>
                <Link href="/home" className="flex text-gray-400">Home</Link>
              </li>
              <li>
                <Link href="/about" className="flex text-gray-400">About</Link>
              </li>
            </ul>
          </nav>

          <button className='cursor-pointer'>
            {
              user?.image ? (
                <Image
                  className='rounded-full hover:opacity-80'
                  src={user.image}
                  alt='profile'
                  width={30}
                  height={30}
                />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              )
            }
          </button>

        </aside>
        {children}
      </section>
    </section>
  );
}