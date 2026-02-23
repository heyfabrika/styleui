import Navbar from '@/components/common/navbar';
import { baseOptions } from '@/lib/layout.shared';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import Link from 'next/link';
import { type ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <HomeLayout
            {...baseOptions()}
            className="relative w-full"
            nav={{
                component: <Navbar showThemeSwitcher={true} />,
                transparentMode: "top",
            }}
        >
            <div className="px-4 py-6 mx-auto max-w-7xl w-full flex-1">
                {children}
            </div>
            <footer className="py-6 text-center text-sm text-muted-foreground">
                <p>
                    Made with Style by{" "}
                    <Link
                        href="https://x.com/rasmic"
                        className="underline hover:text-foreground transition-colors"
                    >
                        RasMic
                    </Link>
                </p>
            </footer>
        </HomeLayout>
    );
}