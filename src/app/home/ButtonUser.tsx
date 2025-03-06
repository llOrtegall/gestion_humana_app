'use client';

import { OptionsUser } from '../components/OptionsUser';
import { Session } from 'next-auth';
import { useState } from 'react';
import Image from 'next/image';

export default function UserOptButton({ session }: { session: Session | null}) {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  }

  return (
    <div>
      <button
        className='flex items-center gap-2 cursor-pointer'
        onClick={toggle}
      >
        <Image
          src={`${session?.user?.image}`}
          className='w-8 h-8 rounded-full hover:shadow-md hover:opacity-70'
          alt='logo'
          width={150}
          height={150}
        />
      </button>
      {show && <OptionsUser session={session}/>}
    </div>
  )
}