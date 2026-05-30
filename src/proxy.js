import { NextResponse } from 'next/server'

export async function proxy(request) {
  return NextResponse.redirect(new URL('/auth/signin', request.url))
}

export const config = {
  matcher: ['/allRoute/:path'],
}