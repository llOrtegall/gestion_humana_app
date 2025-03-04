import Link from 'next/link';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='flex'>
      <Header />
      <main className='h-screen bg-blue-100 w-full'>
        <aside className="bg-white">
          <nav className="border-b-[1px] border-l-[1px] border-gray-300">
            <ul className="container mx-auto flex space-x-4 text-sm ">
              <li>
                <Link href="/home" className="flex text-gray-400 py-2">Home</Link>
              </li>
              <li>
                <Link href="/about" className="flex text-gray-400 py-2">About</Link>
              </li>
            </ul>
          </nav>
        </aside>
        {children}
      </main>
    </section>
  );
}