"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";

export default function LogoCloud() {
  const logos: { name: string; image: string }[] = [
    {
      name: "Notion",
      image:
        "https://cdn.brandfetch.io/idPYUoikV7/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1714126994340",
    },
    {
      name: "Framer",
      image:
        "https://cdn.brandfetch.io/idCeIE9B96/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667565216120",
    },
    {
      name: "Webflow",
      image:
        "https://cdn.brandfetch.io/id4knLKYsV/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1697573443212",
    },
    {
      name: "Slack",
      image:
        "https://cdn.brandfetch.io/idJ_HhtG0Z/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1745381296843",
    },
    {
      name: "Coinbase",
      image:
        "https://cdn.brandfetch.io/idwDWo4ONQ/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667593749615",
    },
    {
      name: "Uber",
      image:
        "https://cdn.brandfetch.io/ididNbiiOd/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667562044439",
    },
    {
      name: "Loom",
      image:
        "https://cdn.brandfetch.io/iddLCZGlbs/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1759196929343",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-2 items-center justify-center mt-4 max-w-6xl 2xl:max-w-full mx-auto"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Your favorite companies are our partners
      </motion.p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12"
      >
        {logos.map((logo) => (
          <motion.div
            key={logo.name}
            variants={itemVariants}
            whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={logo.image}
              alt={logo.name}
              className="grayscale dark:invert w-20 lg:w-40"
              width={100}
              height={100}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
