"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "motion/react";
import Image from "next/image";
import BlurredOrb from "@/components/blurred-orb";

type Tool = {
  name: string;
  lightImage: string;
  darkImage: string;
};

export default function ToolFeature() {
  const tools: Tool[] = [
    {
      name: "Loom",
      lightImage: "/logo/loom-mini-light.svg",
      darkImage: "/logo/loom-mini.svg",
    },
    {
      name: "Notion",
      lightImage: "/logo/notion-mini-light.svg",
      darkImage: "/logo/notion-mini.svg",
    },
    {
      name: "Medium",
      lightImage: "/logo/medium-light.svg",
      darkImage: "/logo/medium.svg",
    },
    {
      name: "Mailchip",
      lightImage: "/logo/mailchip-light.svg",
      darkImage: "/logo/mailchip.svg",
    },
    {
      name: "Calendly",
      lightImage: "/logo/calendly-light.svg",
      darkImage: "/logo/calendly.svg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full lg:py-20 4xl:py-32"
    >
      <Card className="w-full min-h-96 lg:gap-16 flex flex-col items-center justify-center dark:bg-background max-md:ring-0 dark:ring-1 shadow-none lg:py-18 4xl:gap-24">
        <CardHeader className="relative flex md:flex-wrap md:gap-12 items-center justify-center w-full justify-center">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative flex items-center justify-center border p-4 bg-background rounded-xl w-40 h-20 md:w-20 lg:h-20 -mr-4 4xl:w-28 4xl:h-28"
            >
              <Image
                src={tool.lightImage}
                alt={tool.name}
                width={100}
                height={100}
                className="h-full w-full object-contain p-2 max-[406px]:p-0 max-[416px]:p-1 dark:hidden"
              />
              <Image
                src={tool.darkImage}
                alt={tool.name}
                width={100}
                height={100}
                className="hidden h-full w-full object-contain p-2 max-[406px]:p-0 max-[416px]:p-1 dark:block"
              />
              <BlurredOrb className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 dark:blur-xl blur-lg md:blur-xl dark:md:h-7 dark:md:w-7 w-7 h-7 md:h-10 md:w-10 4xl:h-14 4xl:w-14" />
            </motion.div>
          ))}
        </CardHeader>
        <CardContent className="flex flex-col gap-4 items-center justify-center w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="text-center text-3xl md:text-4xl font-aleo 4xl:text-5xl"
          >
            Integrate with your favorite tools
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="text-center text-muted-foreground text-lg md:text-base max-w-lg 4xl:text-3xl 4xl:max-w-4xl"
          >
            Connect seamlessly with popular platforms and services to enhance
            your workflow.
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
