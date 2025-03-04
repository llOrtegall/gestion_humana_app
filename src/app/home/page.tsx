import Link from "next/link";

export default function HomePage() {
  return (
    <section className="">

      <aside className="border-b border-gray-200 flex">
        <nav>
          <ul className="flex gap-8 text-gray-500">
            <li className="bg-red-100 py-4 px-4 border-r border-gray-200">
              <span>Inicio</span>
              <label className="h-1 bg-green-300"></label>
            </li>
            <li className="bg-red-100 py-4 px-4 flex flex-col justify-between">
              <Link href="/" className=''>Vista General</Link>
              <label className="h-1 bg-green-300"></label>
            </li>
            <li className="bg-red-100 py-4 px-4 flex flex-col justify-between">
              <Link href="/" className=''>Objectivos</Link>
              <label className="h-1 bg-green-300"></label>
            </li>
            <li className="bg-red-100 py-4 px-4 flex flex-col justify-between">
              <Link href="/" className=''>Reuniones</Link>
              <label className="h-1 bg-green-300"></label>
            </li>
          </ul>
        </nav>
      </aside>
      
    </section>
  )
}