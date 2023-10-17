import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const PROTECTED_ROUTES = ['/'];

const PUBLIC_ROUTES = ['/signin', '/signup'];

async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_JWT_SECRET,
  });

  const shouldRedirectToHome =
    token && PUBLIC_ROUTES.includes(path) && !PROTECTED_ROUTES.includes(path);

  if (shouldRedirectToHome) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  const shouldRedirectToSignIn =
    !token && PROTECTED_ROUTES.includes(path) && !PUBLIC_ROUTES.includes(path);

  if (shouldRedirectToSignIn) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }
}

const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export { config, middleware };
