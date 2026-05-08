"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.div
      className="flex flex-col gap-16 items-center justify-center py-2 lg:pt-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <section className="flex flex-col lg:flex-row items-center justify-between w-full max-xl:gap-6 max-w-7xl lg:max-w-6xl">
        <p className="max-md:font-medium text-3xl md:text-5xl lg:text-6xl xl:text-7xl lg:max-w-lg xl:max-w-2xl tracking-tighter text-center lg:text-left">
          The CRM built for how consultants actually work
        </p>
        <section className="flex flex-col gap-8">
          <p className="text-md md:text-xl max-w-xl lg:max-w-md text-center lg:text-left">
            Stop wrestling with CRMs designed for sales teams. Axis helps you
            manage client relationships, track proposals, and close
            deals—without the enterprise bloat.
          </p>
          <div className="flex flex-row gap-2">
            <Button className="rounded-full max-lg:hidden">Book a call</Button>
            <Button className="rounded-full max-lg:w-full" variant="outline">
              Watch Demo
            </Button>
          </div>
        </section>
      </section>
      <div className="relative">
        <Image
          src="/images/templates/axis/hero.svg"
          alt="Hero"
          width={1200}
          height={800}
          className="w-full max-w-7xl h-auto rounded-xl lg:rounded-[2.5rem]"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        />
        <div className="max-md:hidden absolute bottom-0 left-0 h-12 lg:h-24 w-full bg-gradient-to-b from-transparent to-background" />
      </div>
    </motion.div>
  );
};

export default Hero;
