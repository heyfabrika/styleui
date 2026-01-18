import Navbar from '@/components/common/navbar';
import { baseOptions } from '@/lib/layout.shared';
import { docsSource } from '@/lib/source';
import { source } from 'fumadocs-core/source';
import { GithubInfo } from 'fumadocs-ui/components/github-info';
import { DocsLayout, DocsLayoutProps } from 'fumadocs-ui/layouts/docs';

function docsOptions(): DocsLayoutProps {
    return {
      ...baseOptions(),
      tree: docsSource.getPageTree(),
      links: [
        {
          type: 'custom',
          children: <GithubInfo owner="shadcn-ui" repo="ui" className="lg:-mx-2" />,
        },
      ],
    };
  }
  

export default function Layout({ children }: LayoutProps<'/docs'>) {
    return (
        <DocsLayout {...docsOptions()} sidebar={{
            className: "w-fit",
        }}
            nav={{
                component: <Navbar />
            }}
        >
            {children}
        </DocsLayout>
    );
}