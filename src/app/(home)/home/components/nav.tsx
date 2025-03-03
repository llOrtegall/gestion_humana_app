import Link from "next/link";

export default function Nav() {
  return (
    <header className='bg-gray-200'>
      <figure>
        logo
      </figure>
      <nav>
        <ul>
          <li>
            <Link href='/'>
              Inicio
            </Link>
          </li>
          <li>
            <Link href='/about'>
              Empleados
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}