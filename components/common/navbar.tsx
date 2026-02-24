"use client";

import Link from "next/link";
import ThemeSwitcher from "../theme/theme-switcher";

const Navbar = ({ showThemeSwitcher = false }: { showThemeSwitcher?: boolean }) => {
    return (
        <nav className="px-4 pt-4 md:px-6 lg:px-4 lg:pt-4 mx-auto w-full max-w-7xl">
            <div className="flex items-center justify-between py-4 w-full">
                <Link href="/" className="text-xl font-medium tracking-tight">
                    StyleUI
                </Link>

                <div className="flex items-center gap-2">
                    {showThemeSwitcher && <ThemeSwitcher />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;