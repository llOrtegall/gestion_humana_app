export default function HomePage() {
  return (
    <section>
      <ul className="bg-amber-50 flex border-b border-gray-200 text-gray-600">
        <li>
          <span
            className="px-6 py-4 flex border-r border-gray-200"
          >
            Inicio
          </span>
        </li>
        <li>
          <a
            className="px-6 py-4 flex"
            href="/login"
          >Vista General</a>
        </li>
        <li>
          <a
            className="px-6 py-4 flex"
            href="/register"
          >Objetivos</a>
        </li>
        <li>
          <a
            className="px-6 py-4 flex"
            href="/register"
          >Reuniones</a>
        </li>
      </ul>
      dashboard
    </section>
  )
}