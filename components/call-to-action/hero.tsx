"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import Transcriber from "./transcriber";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  console.log("resolvedTheme", resolvedTheme);
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col gap-16 md:gap-4 lg:flex-row items-center lg:justify-between w-full mx-auto p-6 md:p-12 lg:pt-10 lg:pl-8 xl:p-10 2xl:p-20 3xl:p-64 4xl:p-80 max-h-[92dvh] sm:max-h-[90dvh] md:max-h-[98dvh] lg:min-h-[83dvh] 2xl:min-h-[90dvh] 3xl:min-h-[90dvh] 4xl:min-h-[70dvh] overflow-hidden rounded-4xl"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(
              ellipse 100% 100% at 50% ${isMobile ? "-5%" : "5%"},
              ${resolvedTheme === "dark" ? "#000000" : "#FFFFFF"} 0%,
              ${resolvedTheme === "dark" ? "#000000" : "#FFFFFF"} ${isMobile ? "50%" : "40%"},
              ${resolvedTheme !== "dark" ? `#DC8E43 ${isMobile ? '63%' : '70%'},` : "#C76829 85%,"}
              #DC8E43 70%,
              #C76829 85%,              
            ${resolvedTheme === "dark" ? "#DC8E43 100%" : "#9C3A21 100%"} 
            )
          `,
        }}
      />
      <section className="flex flex-col gap-4 4xl:gap-10 z-10 text-center lg:text-left items-center lg:items-start 2xl:mb-40">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-3xl md:text-5xl xl:text-6xl 4xl:text-7xl font-aleo"
        >
          Never Forget Another Call
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-base xl:text-lg max-w-md xl:max-w-2xl 4xl:text-4xl 4xl:max-w-6xl"
        >
          Record, transcribe, and take notes on your conversations— all in
          real-time. Turn every call into searchable, shareable insights.
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
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="relative lg:mt-0 lg:absolute lg:right-6 xl:right-10 2xl:right-40 lg:-bottom-10 xl:-bottom-10 2xl:-bottom-2 z-10 mt-7"
      >
        <Transcriber />
      </motion.section>
    </motion.div>
  );
}
