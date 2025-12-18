"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import Transcriber from "./transcriber";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col gap-16 lg:flex-row items-center lg:justify-between w-full mx-auto px-6 py-12 md:p-16 xl:p-20 2xl:p-64 max-h-[92dvh] md:max-h-[98dvh] xl:min-h-[90dvh] overflow-hidden rounded-4xl"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(
              ellipse 100% 100% at 50% 5%,
              ${theme === "dark" ? "#1A1A1A" : "#FFFFFF"} 0%,
              ${theme === "dark" ? "#1A1A1A" : "#FFFFFF"} 30%,
              ${theme !== "dark" ? "#C883FF 50%," : ""}
              #6A01D3 70%,
              #8F00FF 85%,
              #C883FF 100%
            )
          `,
        }}
      />
      <section className="flex flex-col gap-4 z-10 text-center lg:text-left items-center lg:items-start xl:mb-40">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-3xl md:text-5xl xl:text-6xl font-aleo"
        >
          Never Forget Another Call
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-sm md:text-base xl:text-lg max-w-md lg:max-w-2xl"
        >
          Record, transcribe, and take notes on your conversations— all in
          real-time. Turn every call into searchable, shareable insights.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <Button className="w-fit" size="lg">
            Start for free
          </Button>
        </motion.div>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="relative lg:mt-0 lg:absolute lg:right-12 2xl:right-40 xl:-bottom-2 z-10"
      >
        <Transcriber />
      </motion.section>
    </motion.div>
  );
}
