import HeaderAjustes from './header';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <HeaderAjustes />
      {children}
    </section>
  )
}