import Header from './Header';

export default async function Layout({ children }: { children: React.ReactNode }) {

  return (
    <section className='flex h-screen'>

      <header className='w-3xs border-r border-gray-200'>
        <Header />
      </header>

      <section className='w-auto flex-1'>
        {children}
      </section>
    </section>
  );
}