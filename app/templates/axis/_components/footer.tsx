"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ThemeToggle } from "./theme-switch";

const Footer = () => {
    const links = [
        { name: "Features", href: "#" },
        { name: "Usecases", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Customers", href: "#" }
    ];
    const socialLinks: { label: string; href: string; icon: string }[] = [
        {
            label: "X",
            href: "#",
            icon: "/icons/x.svg",
        },
        {
            label: "LinkedIn",
            href: "#",
            icon: "/icons/linkedin.svg",
        },
        {
            label: "Facebook",
            href: "#",
            icon: "/icons/facebook.svg",
        },
        {
            label: "Instagram",
            href: "#",
            icon: "/icons/instagram.svg",
        },
        {
            label: "Tiktok",
            href: "#",
            icon: "/icons/tiktok.svg",
        },
    ];
    return (
        <motion.div
            className="flex flex-col gap-8 items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <Image className="dark:invert" src="/logo/templates/axis/light-logo.svg" alt="Light Logo" width={100} height={100} />
            <ul className="grid grid-cols-4 gap-2 md:gap-8 items-center justify-center">
                {links.map((link) => (
                    <li key={link.name} className="flex flex-row items-center gap-1 hover:text-primary transition-all duration-300 text-muted-foreground">
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
            <section className="flex flex-row gap-4">
                {socialLinks.map((link) => (
                    <Link key={link.label} href={link.href}>
                        <Image src={link.icon} alt={link.label} width={24} height={24} className="invert dark:invert-0 w-7 lg:w-8" />
                    </Link>
                ))}
            </section>
            <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Axis. All rights reserved.</p>
        </motion.div>
    )
}

export default Footer
