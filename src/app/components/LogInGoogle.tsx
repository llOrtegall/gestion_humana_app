"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function LogInGoogle() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/home');
    }
  }, [status, router]);

  const handleSignIn = async () => {
    await signIn('google');
  };

  return (
    <>
      <button
        type='button'
        onClick={handleSignIn}
        className='w-full flex items-center justify-center gap-2 border px-12 py-3 rounded-md border-gray-200 cursor-pointer hover:bg-blue-50'>
        <Image src='/google.svg' alt='google' width={10} height={10} className='w-6' />
        <span> Continue with Google</span>
      </button>
    </>
  );
}