import { LoginGoogle } from '@/lib/actions/auth';
import SignupForm from './singup-form';
import Image from 'next/image';

export default function SigIngPage() {
  return (
    <div className='bg-red-200 h-screen w-full flex'>

      <section className='w-full h-full bg-white flex flex-col gap-10 p-12'>
        <div className='w-auto h-full flex flex-col px-40 2xl:px-48 py-20 justify-between'>

          <div className='flex flex-col gap-4'>
            <article className='flex gap-4 items-center'>
              <Image src='/logo.svg' alt='logo' width={10} height={10} className='w-10' />
              <h1 className='text-3xl font-bold'>G A N E - A P P</h1>
            </article>
            <p className='text-3xl font-medium'>Welcome back!</p>
          </div>

          <div className='flex flex-col gap-4'>

            <button
              onClick={LoginGoogle}
              className='w-full flex items-center justify-center gap-2 border px-12 py-3 rounded-md border-gray-200 cursor-pointer hover:bg-blue-50'>
              <Image src='/google.svg' alt='google' width={10} height={10} className='w-6' />
              <span> Continue with Google</span>
            </button>

            <div className='flex items-center gap-2'>
              <div className='w-full h-0.5 border border-gray-300'></div>
              <p className='w-full text-gray-400 text-sm text-center'>Or sing in with</p>
              <div className='w-full h-0.5 border border-gray-300'></div>
            </div>
          </div>

          <div>
            <SignupForm />
          </div>

          <div>
            <p className='text-sm text-gray-700 text-center'>Don t have an account yet? <a href=' '>Start free trial</a></p>
          </div>

        </div>
      </section>

      <section className='w-full bg-gray-100 p-12 hidden xl:block'>
        logo
      </section>

    </div>
  );
}