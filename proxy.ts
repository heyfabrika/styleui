import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.endsWith('.mdx')) {
    if (pathname.startsWith('/docs/')) {
      const slug = pathname.replace('/docs/', '').replace('.mdx', '');
      return NextResponse.rewrite(new URL(`/llms.mdx/docs/${slug}`, request.url));
    }

    if (pathname.startsWith('/components/')) {
      const slug = pathname.replace('/components/', '').replace('.mdx', '');
      return NextResponse.rewrite(new URL(`/llms.mdx/components/${slug}`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/docs/:path*.mdx', '/components/:path*.mdx'],
};
