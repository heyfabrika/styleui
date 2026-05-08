"use client";

import Link from "next/link";
import ThemeSwitcher from "../theme/theme-switcher";
import { WaitlistDialog } from "./waitlist-dialog";
import { GithubIcon } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = ({
  showThemeSwitcher = false,
}: {
  showThemeSwitcher?: boolean;
}) => {
  return (
    <nav className="px-4 pt-4 md:px-6 lg:px-4 lg:pt-4 mx-auto w-full max-w-7xl">
      <div className="flex items-center justify-between py-4 w-full">
        <Link href="/" className="text-xl font-medium tracking-tight">
          StyleUI
        </Link>

        <div className="flex items-center gap-4">
          <WaitlistDialog />
            <Link href="https://github.com/heyfabrika/styleui" target="_blank">
              <GithubIcon className="w-4 h-4" />
            </Link>
          {showThemeSwitcher && <ThemeSwitcher />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
