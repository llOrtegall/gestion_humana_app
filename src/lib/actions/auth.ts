'use server';

import { signIn, signOut } from '@/auth';

export const LoginGoogle = async () => {
  await signIn('google', { redirectTo: '/home/inicio/vistageneral' });
}

export const LogoutGoogle = async () => {
  await signOut({ redirectTo: '/' });
}