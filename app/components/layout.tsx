import { baseOptions } from '@/lib/layout.shared';
import { componentsSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import Navbar from '@/components/common/navbar';

export default function Layout({ children }: LayoutProps<'/components'>) {
    return (
        <DocsLayout tree={componentsSource.pageTree} {...baseOptions()} sidebar={{
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