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
        className='w-full flex items-center justify-center gap-2 border px-12 py-3 rounded-md border-gray-200 cursor-pointer hover:bg-blue-50'>
        <span> Log Out</span>
      </button>
    </form>
  )
}