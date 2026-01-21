import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Allow all requests to pass through without locale routing
  return NextResponse.next();
}

export const config = {
  // Match only pathnames, exclude static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

