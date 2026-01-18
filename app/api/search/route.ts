import { docsSource, componentsSource } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

const docsSearch = createFromSource(docsSource, {
  language: 'english',
});

const componentsSearch = createFromSource(componentsSource, {
  language: 'english',
});

export async function GET(request: Request) {
  const url = new URL(request.url);
  const tag = url.searchParams.get('tag');
  
  if (tag === 'components') {
    return componentsSearch.GET(request);
  }
  
  return docsSearch.GET(request);
}