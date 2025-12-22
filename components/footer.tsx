"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Footer() {
  const { resolvedTheme } = useTheme();
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
    <footer className="flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col gap-16 lg:flex-row items-center justify-center w-full mx-auto px-6 py-12 md:p-16 xl:p-20 2xl:p-64 min-h-[60dvh] md:min-h-[70dvh] xl:min-h-[80dvh] 4xl:min-h-[60dvh] rounded-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 -z-10 rotate-180 rounded-4xl overflow-hidden"
          style={{
            background: `
            radial-gradient(
              ellipse 100% 100% at 50% ${is4xl ? "-5%" : "0%"},
              ${resolvedTheme === "dark" ? "#000000" : "#FFFFFF"} 50%,
              ${resolvedTheme === "dark" ? "#9C3A21 70%" : "#FFFFFF 30%"},
              ${resolvedTheme !== "dark" ? "#DC8E43 76%," : "#C76829 85%,"}
              #DC8E43 70%,
              #C76829 85%,
              ${resolvedTheme === "dark" ? "#DC8E43 100%" : "#9C3A21 100%"} 
            )
          `,
          }}
        />
        <section className="flex flex-col gap-4 4xl:gap-16 z-10 text-center items-center xl:mb-40">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl xl:text-6xl 4xl:text-7xl font-aleo"
          >
            Never miss another <br /> important detail
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-sm md:text-base xl:text-lg 4xl:text-3xl max-w-md lg:max-w-2xl 4xl:max-w-4xl"
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

      <section className="flex flex-col gap-8 lg:gap-12 items-center justify-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={
              resolvedTheme === "dark"
                ? "/logo/notio-logo-white.svg"
                : "/logo/notio-logo-black.svg"
            }
            alt="Logo"
            width={100}
            height={100}
            className="4xl:w-60 4xl:h-20"
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
                className="grayscale dark:invert 4xl:w-10 4xl:h-10"
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
