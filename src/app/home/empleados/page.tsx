export default function EmpleadosPage() {
  return (
    <section>
      <ul className="flex border-b border-gray-200 text-gray-600">
        <li>
          <span
            className="px-6 py-4 flex border-r border-gray-200"
          >
            Empleados
          </span>
        </li>
        <li>
          <a
            className="px-6 py-4 flex"
            href="/login"
          >Directorio</a>
        </li>
        <li>
          <a
            className="px-6 py-4 flex"
            href="/register"
          >Organigrama</a>
        </li>
      </ul>
      dashboard
    </section>
  )
}