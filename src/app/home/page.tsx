import Link from "next/link";

export default function HomePage() {
  return (
    <section className="">
      <header className="bg-white">
        <nav className="border-b-[1px] border-gray-300 border-l-[1px]">
          <ul className="container mx-auto flex space-x-4 text-2xl">
            <li>
              <Link href="/home" className="flex text-blue-500 py-2">Home</Link>
            </li>
            <li>
              <Link href="/about" className="flex text-blue-500 py-2">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        content
      </main>
    </section>
  )
}