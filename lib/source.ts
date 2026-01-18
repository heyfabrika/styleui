import { loader } from 'fumadocs-core/source';
import type { DocsCollectionEntry } from 'fumadocs-mdx/runtime/server';
import * as DocsWorkspace from 'fumadocs-mdx:collections/docs/server';
import * as ComponentsWorkspace from 'fumadocs-mdx:collections/components/server';

const docsCollection = DocsWorkspace;
const componentsCollection = ComponentsWorkspace;

export const docsSource = loader({
  baseUrl: '/docs',
  source: (docsCollection.docs as unknown as DocsCollectionEntry).toFumadocsSource(),
});

export const componentsSource = loader({
  baseUrl: '/components',
  source: (componentsCollection.docs as unknown as DocsCollectionEntry).toFumadocsSource(),
});