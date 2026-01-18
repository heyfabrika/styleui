"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Search, X } from "lucide-react";
import { Button } from "../ui/button";
import { GithubInfo } from "fumadocs-ui/components/github-info";

const Navbar = ({ showGithubInfo = false }: { showGithubInfo?: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "Components", href: "/components" },
        { label: "Templates", href: "/templates" },
        { label: "Docs", href: "/docs" },
        { label: "Blocks", href: "/blocks" },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
                when: "afterChildren",
            },
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        closed: { opacity: 0, x: -10 },
        open: { opacity: 1, x: 0 },
    };

    return (
        <nav className="lg:px-4 lg:pt-4 mx-auto w-full">
            <div className="relative flex flex-col border-b border-white/10 lg:bg-muted/30 px-6 py-4 backdrop-blur-md w-full">
                <div className="flex items-center justify-between w-[90dvw] md:w-full">
                    <Link href="/" className="text-xl font-bold tracking-tight">
                        StyleUI
                    </Link>

                    <div className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium transition-colors hover:text-primary"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>


                    {showGithubInfo && (
                        <div className="flex items-center gap-2 max-md:hidden">
                            <GithubInfo owner="shadcn-ui" repo="ui" className="lg:-mx-2" />
                        </div>
                    )}


                    <button
                        className="block md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <motion.div
                            initial={false}
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.div>
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="flex flex-col gap-4 overflow-hidden md:hidden"
                        >
                            <div className="pb-4 pt-6">
                                {navItems.map((item) => (
                                    <motion.div
                                        key={item.label}
                                        variants={itemVariants}
                                        className="mb-4 last:mb-0"
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block text-sm font-light transition-colors hover:text-primary"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="flex justify-end gap-2">
                                {showGithubInfo && (
                                    <GithubInfo owner="shadcn-ui" repo="ui" className="lg:-mx-2" />
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;