import defaultMdxComponents from 'fumadocs-ui/mdx';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';
import { AnimatedList } from '@/components/animated-list';
import Counter from '@/components/counter';
import PreviewComponent from '@/components/preview-component';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    ...components,
    PreviewComponent,
    AnimatedList,
    Counter,
  };
}