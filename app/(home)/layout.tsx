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
                    Made with love ❤️ by{" "}
                    <Link
                        href="https://x.com/rasmic"
                        target="_blank"
                        className="underline hover:text-foreground transition-colors"
                    >
                        Ras Mic
                    </Link>
                    {" & "}
                    <Link
                        href="https://x.com/heyfabrika"
                        target="_blank"
                        className="underline hover:text-foreground transition-colors"
                    >
                        Fabrika team
                    </Link>
                </p>
            </footer>
        </HomeLayout>
    );
}