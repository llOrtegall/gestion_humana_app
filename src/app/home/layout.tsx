import ButtonUser from '@/app/components/UserBotton';
import Header from './Header';
import Link from 'next/link';

export default async function Layout({ children }: { children: React.ReactNode }) {

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

          <ButtonUser />

        </aside>
        {children}
      </section>
    </section>
  );
}