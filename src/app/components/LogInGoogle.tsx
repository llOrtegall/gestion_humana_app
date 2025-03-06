import { signIn } from '@/auth';
import Image from 'next/image';

export default function LogInGoogle() {

  return (
    <form
      action={async () => {
        'use server'
        await signIn('google')
      }}
    >
      <button
        type='submit'
        className='w-full flex items-center justify-center gap-2 border px-12 py-3 rounded-md border-gray-200 cursor-pointer hover:bg-blue-50'>
        <Image src='/google.svg' alt='google' width={10} height={10} className='w-6' />
        <span> Continue with Google</span>
      </button>
    </form>
  );
}