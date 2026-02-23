import { redirect, usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

const ComingSoonProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const comingSoonPages = [
        "/components",
        "/docs",
        "/blocks"
    ]
    useEffect(() => {
        const isRoute = comingSoonPages.some(page => pathname === page || pathname.startsWith(`${page}/`))
        if (isRoute) {
            redirect("/coming-soon")
        }
    }, [pathname, redirect])
    return (
        <>
            {children}
        </>
    )
}

export default ComingSoonProvider