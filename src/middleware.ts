import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export async function middleware(req: NextRequest) {
  const session = await auth();
  const { pathname } = req.nextUrl;


  if(pathname === '/login' && session){
    return NextResponse.redirect(new URL('/home', req.url));
  }
  if(!session && pathname !== '/login'){
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

// Configurar las rutas que deben pasar por el middleware
export const config = {
  matcher: ['/home/:path*', '/profile/:path*', '/login', '/'],
};