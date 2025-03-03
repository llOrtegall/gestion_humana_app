import Nav from "./components/nav"

export default function LayoutHome({ children }:{children: React.ReactNode}) {
  return (
    <section>
      <Nav />
      {children}
    </section>
  )
}