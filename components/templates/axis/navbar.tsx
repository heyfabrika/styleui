"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-switch";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();

    const router = useRouter();
    const pathname = usePathname();
    const authPath = `${pathname.replace(/\/$/, "")}/auth`;

    const links = [
        { name: "Features", hasChildren: true },
        { name: "Usecases", hasChildren: true },
        { name: "Pricing", hasChildren: false },
        { name: "Customers", hasChildren: false },
    ];

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        if (latest > previous && latest > 150) {
            setIsHidden(true);
            setIsOpen(false);
        } else {
            setIsHidden(false);
        }
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <motion.div
            className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 mx-auto w-full max-w-6xl max-md:my-2 z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{
                opacity: isHidden ? 0 : 1,
                y: isHidden ? -20 : 0,
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <motion.div
                className="relative mx-auto max-w-7xl"
                animate={{
                    scale: isScrolled ? 0.98 : 1,
                }}
                transition={{ duration: 0.2 }}
            >
                <motion.div
                    className="flex flex-row items-center justify-between gap-4 rounded-full border border-border dark:border-muted-foreground/20 p-2"
                    animate={{
                        backgroundColor: isScrolled
                            ? "hsl(var(--background) / 0.8)"
                            : "hsl(var(--background))",
                        backdropFilter: "blur(12px)",
                        boxShadow: isScrolled
                            ? "0 4px 20px -5px rgba(0, 0, 0, 0.1)"
                            : "0 0 0 0 rgba(0, 0, 0, 0)",
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        className="ml-2 h-12 w-20 dark:invert"
                        src="/logo/templates/axis/light-logo.svg"
                        alt="Light Logo"
                        width={100}
                        height={100}
                    />

                    <section className="hidden flex-row items-center gap-4 lg:flex">
                        <div className="flex flex-row gap-8">
                            {links.map((link) => (
                                <Link
                                    href={"#"}
                                    key={link.name}
                                    className="flex flex-row items-center gap-1 font-medium transition-colors hover:text-muted-foreground"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <Button variant="ghost" className="font-medium hover:!bg-transparent cursor-pointer transition-colors hover:text-muted-foreground"
                            onClick={() => router.push(authPath)}>
                            Log In
                        </Button>
                        <ThemeToggle />
                        <Button className="rounded-full" size="lg">
                            Book a call
                        </Button>
                    </section>

                    <section className="flex flex-row items-center gap-2 lg:hidden">
                        <Button className="rounded-full" size="default">
                            Book a call
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="h-5 w-5" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="h-5 w-5" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Button>
                    </section>
                </motion.div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -10, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden lg:hidden"
                        >
                            <div className="flex flex-col gap-2 rounded-2xl border border-border bg-background/95 p-4 backdrop-blur-xl">
                                {links.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2, delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={"#"}
                                            className="flex flex-row items-center justify-between rounded-lg px-4 py-3 font-medium transition-colors hover:bg-muted"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2, delay: 0.2 }}
                                    className="my-2 border-t border-border"
                                />

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: 0.25 }}
                                    className="flex flex-row items-center justify-between gap-2"
                                >
                                    <Button variant="ghost" className="font-medium hover:bg-transparent hover:text-muted-foreground hover:!bg-transparent"
                                        onClick={() => router.push(authPath)}>
                                        Log In
                                    </Button>
                                    <ThemeToggle />
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default Navbar;