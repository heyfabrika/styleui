import { LLMCopyButton, ViewOptions } from '@/components/ai/page-actions';
import { componentsSource } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
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
      <div className="flex items-start gap-2">
        <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
        <ViewOptions
          markdownUrl={`${page.url}.mdx`}
          githubUrl="https://github.com/heyfabrika/styleui"
        />
      </div>
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