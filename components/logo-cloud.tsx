"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { StaticImageType } from "@/types/components/image";
import { motion, type Variants } from "motion/react";
import Image from "next/image";

export default function LogoCloud() {
  const is4xl = useMediaQuery("(min-width: 2560px)");
  const logos: StaticImageType[] = [
    {
      name: "Notion",
      image:
        "/logo/notion.svg",
      size: {
        width: is4xl ? 180 : 100,
        height: is4xl ? 180 : 100,
      },
    },
    {
      name: "Framer",
      image:
        "/logo/framer.svg",
      size: {
        width: is4xl ? 180 : 100,
        height: is4xl ? 180 : 100,
      },
    },
    {
      name: "Webflow",
      image:
        "/logo/webflow.svg",
      size: {
        width: is4xl ? 180 : 100,
        height: is4xl ? 180 : 100,
      },
    },
    {
      name: "Slack",
      image:
        "/logo/slack.svg",
      size: {
        width: is4xl ? 180 : 100,
        height: is4xl ? 180 : 100,
      },
    },
    {
      name: "Coinbase",
      image:
        "/logo/coinbase.svg",
      size: {
        width: is4xl ? 180 : 100,
        height: is4xl ? 180 : 100,
      },
    },
    {
      name: "Uber",
      image:
        "/logo/uber.svg",
      size: {
        width: is4xl ? 100 : 70,
        height: is4xl ? 100 : 70,
      },
    },
    {
      name: "Loom",
      image:
        "/logo/loom.svg",
      size: {
        width: is4xl ? 180 : 100,
        height: is4xl ? 180 : 100,
      },
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
      className="flex flex-col gap-8 md:gap-4 items-center justify-center mt-4 max-w-6xl 2xl:max-w-full mx-auto"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center font-light 4xl:text-3xl"
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
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={logo.image}
              alt={logo.name}
              className="invert dark:invert-0"
              width={logo.size?.width}
              height={logo.size?.height}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
