'use client';
import { FallingPattern } from '@/components/background/falling-pattern';
import Navbar from '@/components/common/navbar';
import { baseOptions } from '@/lib/layout.shared';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { type ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    const { resolvedTheme } = useTheme();
    const bgColor = resolvedTheme === "dark" ? "#000" : resolvedTheme === "light" ? "#FFF" : undefined;
    return <HomeLayout {...baseOptions()}
        className='relative w-full'
        nav={{
            component: <Navbar showThemeSwitcher={true} />,
            transparentMode: "top"
        }}
    >
            {bgColor && <FallingPattern className="absolute h-full min-w-[calc(100vw-15px)] -z-1 dark:opacity-15" backgroundColor={bgColor} />}
        <div className='px-4 py-6 mx-auto max-w-7xl w-full'>

            {children}
        </div>
        <div className='mx-auto '>
            <p>Made with Style✨ by <Link href="https://x.com/rasmic" className='underline'>RasMic</Link> </p>
        </div>
    </HomeLayout>;
}
