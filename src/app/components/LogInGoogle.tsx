import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function LogInGoogle() {
  const handleSignIn = async () => {
    await signIn('google');
  };

  return (
    <button
      type='button'
      onClick={handleSignIn}
      className='w-full flex items-center justify-center gap-2 border px-12 py-3 rounded-md border-gray-200 cursor-pointer hover:bg-blue-50'>
      <Image src='/google.svg' alt='google' width={10} height={10} className='w-6' />
      <span> Continue with Google</span>
    </button>
  );
}