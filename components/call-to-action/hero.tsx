"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import Transcriber from "./transcriber";

export default function Hero() {
  return (
    <div className="mx-2 md:mx-4 lg:mx-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col gap-16 md:gap-4 min-[1070px]:flex-row items-center min-[1070px]:justify-between w-full mx-auto pt-12 md:px-12 lg:pl-12 xl:pl-20 max-[348px]:h-225 max-[397px]:h-220 h-210 sm:h-204 min-[516px]:h-205  md:h-215 lg:h-250 xl:220 lg:min-h-full overflow-hidden rounded-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 -z-10 bg-hero-radial-light dark:bg-hero-radial-dark 
             [--bg-pos:5%] lg:[--bg-pos:5%] 
             [--bg-mid:55%] md:[--bg-mid:45%] 
             [--bg-mid-alt:75%] lg:[--bg-mid-alt:70%]"
        />
        <section className="flex flex-col gap-4 z-10 text-center min-[1070px]:text-left items-center min-[1070px]:items-start">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-3xl md:text-[2.7rem] xl:text-5xl font-aleo"
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
            <Button className="w-fit 4xl:text-2xl 4xl:px-6 4xl:h-16 hover:bg-white hover:text-foreground dark:hover:bg-secondary/80 dark:hover:text-foreground" size="lg">
              Start for free
            </Button>
          </motion.div>
        </section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative lg:mt-0 min-[1070px]:absolute min-[1070px]:right-10 xl:right-12 xl:right-16 lg:-bottom-6 z-10 mt-7"
        >
          <Transcriber />
        </motion.section>
      </motion.div>
    </div>
  );
}
