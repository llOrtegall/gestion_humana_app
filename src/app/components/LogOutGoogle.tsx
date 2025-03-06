import { signOut } from '@/auth';

export default function LogOutGoogle() {

  return (
    <form
      className=''
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button
        type='submit'
        className='flex items-center border-b border-gray-200 py-4 px-6 gap-4 text-blue-400 hover:underline cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
        </svg>
        <span> CERRAR SESIÓN</span>
      </button>
    </form>
  )
}