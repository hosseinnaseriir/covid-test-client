import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const locale = request.cookies.get(process.env.NEXT_PUBLIC_LOCALE_COOKIE!)?.value || 'en';
  if (url.pathname === '/') {
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: ['/', '/((?!api|static|.*\\..*|_next|favicon.ico).*)'],
};
