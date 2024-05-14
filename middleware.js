import {NextResponse, userAgent} from 'next/server'

export function middleware(request) {
  const url = request.nextUrl
  if (url.pathname.includes('undefined')) {
    return NextResponse.redirect(new URL('/404', request.url))
  }

  return NextResponse.rewrite(url)
}
