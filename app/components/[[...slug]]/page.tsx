import { componentsSource } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { notFound, redirect } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';

export default async function Page(props: PageProps<'/components/[[...slug]]'>) {
  const params = await props.params;
  
  if (!params.slug || params.slug.length === 0) {
    const allPages = componentsSource.getPages();
    const sortedPages = allPages
      .filter((p) => p.slugs.length > 0)
      .sort((a, b) => a.slugs[0].localeCompare(b.slugs[0]));
    if (sortedPages.length > 0) {
      redirect(`/components/${sortedPages[0].slugs.join('/')}`);
    }
  }
  
  const page = componentsSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(componentsSource, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return componentsSource.generateParams();
}

export async function generateMetadata(props: PageProps<'/components/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = componentsSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}