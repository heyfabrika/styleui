import Navbar from '@/components/common/navbar';
import { baseOptions } from '@/lib/layout.shared';
import { docsSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

export default function Layout({ children }: LayoutProps<'/docs'>) {
    return (
        <DocsLayout tree={docsSource.pageTree} {...baseOptions()} sidebar={{
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