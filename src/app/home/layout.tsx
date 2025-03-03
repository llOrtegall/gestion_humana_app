import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='flex'>
      <Header />
      <main className='h-screen bg-blue-100 w-full'>
        {children}
      </main>
    </section>
  );
}