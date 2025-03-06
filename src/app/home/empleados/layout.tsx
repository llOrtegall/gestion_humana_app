import HeaderEmpleados from "./header"

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <HeaderEmpleados />
      {children}
    </section>
  )
}