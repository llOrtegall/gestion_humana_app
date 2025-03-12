'use client';

import { sigup } from '@/lib/actions/auth';
import { useActionState } from 'react';

export default function SignupForm() {
  const [state, action, pending] = useActionState(sigup, undefined);

  console.log(state);

  return (
    <form action={action} className='flex flex-col'>

      <div className='relative z-0 w-full mb-5 group'>
        <input
          required
          type='email'
          placeholder=' '
          id='email'
          name='email'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        />
        <label
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          Email address
        </label>
      </div>

      <div className='relative z-0 w-full mb-5 group'>
        <input
          required
          placeholder=' '
          type='password'
          id='password'
          name='password'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        />
        <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Password *</label>
      </div>
      <button
        disabled={pending}
        type='submit'
        className='border border-gray-400 rounded-md py-2 mt-4'
      >
        <span className='text-gray-500 font-medium'>SING IN</span>
      </button>
    </form>
  )
}