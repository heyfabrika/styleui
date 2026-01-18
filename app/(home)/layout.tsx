'use client';
import Navbar from '@/components/common/navbar';
import { baseOptions } from '@/lib/layout.shared';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { type ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return <HomeLayout {...baseOptions()}
        className='mx-auto w-full max-w-7xl'
        nav={{
            component: <Navbar showGithubInfo={true} />,
            transparentMode: "top"
        }}
    >
        <div className='px-4 py-6'>
            {children}
        </div>
    </HomeLayout>;
}