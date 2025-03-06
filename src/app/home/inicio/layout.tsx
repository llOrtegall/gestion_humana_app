import HeaderInicio from "./header"

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <HeaderInicio />
      {children}
    </section>
  )
}