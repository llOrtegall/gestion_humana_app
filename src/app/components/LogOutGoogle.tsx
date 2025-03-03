import { signOut } from 'next-auth/react';

export default function LogOutGoogle() {
  const handleSignOut = async () => {
    await signOut();
  }

  return (
    <button
      type='button'
      onClick={handleSignOut}
      className='w-full flex items-center justify-center gap-2 border px-12 py-3 rounded-md border-gray-200 cursor-pointer hover:bg-blue-50'>
      <span> Log Out</span>
    </button>
  )
}