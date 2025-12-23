"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Footer() {
  const is4xl = useMediaQuery("(min-width: 2560px)");
  const socialLinks: { label: string; href: string; icon: string }[] = [
    {
      label: "Twitter",
      href: "#",
      icon: "https://cdn.brandfetch.io/idS5WhqBbM/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1692089092800",
    },
    {
      label: "Instagram",
      href: "#",
      icon: "https://cdn.brandfetch.io/ido5G85nya/theme/light/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1724650641154",
    },
    {
      label: "Facebook",
      href: "#",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png",
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: "https://cdn.brandfetch.io/idJFz6sAsl/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1740371012665",
    },
    {
      label: "YouTube",
      href: "#",
      icon: "https://cdn.brandfetch.io/idVfYwcuQz/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1728452988041",
    },
  ];

  return (
    <footer className="max-md:relative flex flex-col max-md:px-4 lg:ml-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col gap-16 lg:flex-row items-center justify-center w-full mx-auto px-6 py-12 md:p-16 xl:p-20 2xl:p-64 min-h-[90dvh] md:min-h-[70dvh] xl:min-h-[80dvh] 4xl:min-h-[60dvh] rounded-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 -z-10 rotate-180 rounded-4xl overflow-hidden bg-footer-radial-light dark:bg-footer-radial-dark [--bg-pos-footer:20%] lg:[--bg-pos-footer:-5%] 4xl:[--bg-pos-footer:-5%]"
        />
        <section className="max-md:absolute max-md:bottom-50 max-md:-translate-y-1/2 flex flex-col gap-6 md:gap-4 4xl:gap-16 z-10 text-center items-center xl:mb-40">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-3xl md:text-5xl xl:text-6xl 4xl:text-7xl font-aleo"
          >
            Never miss another <br /> important detail
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-base xl:text-lg 4xl:text-3xl max-w-xs lg:max-w-2xl 4xl:max-w-4xl"
          >
            Join thousands of professionals who've stopped scrambling for notes.
            Start your free account in seconds.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Button className="w-fit 4xl:text-2xl 4xl:px-12 4xl:h-18" size="lg">
              Start for free
            </Button>
          </motion.div>
        </section>
      </motion.div>

      <section className="max-md:absolute max-md:bottom-10 max-md:left-1/2 max-md:-translate-x-1/2 flex flex-col gap-8 lg:gap-12 items-center justify-center lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/logo/notio-logo-black.svg"
            alt="Logo"
            width={100}
            height={100}
            className="4xl:w-60 4xl:h-20 dark:hidden"
          />
          <Image
            src="/logo/notio-logo-white.svg"
            alt="Logo"
            width={100}
            height={100}
            className="4xl:w-60 4xl:h-20 hidden dark:block"
          />
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex gap-8 text-muted-foreground 4xl:text-2xl"
        >
          <li>Product</li>
          <li>Company</li>
          <li>About</li>
          <li>Careers</li>
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex gap-4 4xl:gap-8 items-center justify-center"
        >
          {socialLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <Image
                src={link.icon}
                alt={link.label}
                width={24}
                height={24}
                className="grayscale dark:invert dark:opacity-50 4xl:w-10 4xl:h-10"
              />
            </Link>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-muted-foreground text-sm 4xl:text-2xl"
        >
          &copy; {new Date().getFullYear()} Notio. All rights reserved.
        </motion.p>
      </section>
    </footer>
  );
}
