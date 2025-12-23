"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import Transcriber from "./transcriber";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col gap-16 md:gap-4 lg:flex-row items-center lg:justify-between w-full mx-auto md:px-12 md:pt-12 lg:pt-10 lg:pl-8 h-198 md:h-220 4xl:h-300 lg:min-h-full overflow-hidden rounded-4xl"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 -z-10 bg-hero-radial-light dark:bg-hero-radial-dark 
             [--bg-pos:-5%] lg:[--bg-pos:5%] 
             [--bg-mid:50%] lg:[--bg-mid:40%] 
             [--bg-mid-alt:63%] lg:[--bg-mid-alt:70%]"
      />
      <section className="flex flex-col gap-4 4xl:gap-10 z-10 text-center lg:text-left items-center lg:items-start 2xl:mb-40">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-aleo"
        >
          Never Forget Another Call
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-base max-w-lg 4xl:text-2xl 4xl:max-w-3xl"
        >
          Record, transcribe, and take notes on your conversations— all in
          real-time. Turn every call into searchable, shareable insights.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <Button className="w-fit 4xl:text-2xl 4xl:px-6 4xl:h-16" size="lg">
            Start for free
          </Button>
        </motion.div>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="relative lg:mt-0 lg:absolute lg:right-6 lg:-bottom-6 z-10 mt-7"
      >
        <Transcriber />
      </motion.section>
    </motion.div>
  );
}
