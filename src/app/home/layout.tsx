import Link from 'next/link';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='flex h-screen'>

      <header className='w-2/12 border-r border-gray-200'>
        <Header />
      </header>

      <section className='w-10/12'>
        <aside className="bg-gray-100 px-4 py-2 border-b border-gray-200">
          <nav>
            <ul className="container mx-auto flex space-x-4">
              <li>
                <Link href="/home" className="flex text-gray-400">Home</Link>
              </li>
              <li>
                <Link href="/about" className="flex text-gray-400">About</Link>
              </li>
            </ul>
          </nav>
        </aside>
        {children}
      </section>
    </section>
  );
}