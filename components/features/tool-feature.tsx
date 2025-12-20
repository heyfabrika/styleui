"use client";

import { StaticImageType } from "@/types/components/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { motion } from "motion/react";
import Image from "next/image";
import BlurredOrb from "../blurred-orb";
import { useTheme } from "next-themes";

export default function ToolFeature() {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const tools: StaticImageType[] = [
    {
      name: "Loom",
      image: isDarkMode ? "/logo/loom-mini.svg" : "/logo/loom-mini-light.svg",
    },
    {
      name: "Notion",
      image: isDarkMode ? "/logo/notion-mini.svg" : "/logo/notion-mini-light.svg",
    },
    {
      name: "Medium",
      image: isDarkMode ? "/logo/medium.svg" : "/logo/medium-light.svg",
    },
    {
      name: "Mailchip",
      image: isDarkMode ? "/logo/mailchip.svg" : "/logo/mailchip-light.svg",
    },
    {
      name: "Calendly",
      image: isDarkMode ? "/logo/calendly.svg" : "/logo/calendly-light.svg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="w-full min-h-96 lg:gap-16 flex flex-col items-center justify-center dark:bg-background max-md:ring-0 shadow-none">
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
              className="relative flex items-center justify-center border p-4 bg-background rounded-xl w-40 h-20 lg:w-24 lg:h-24 -mr-4"
            >
              <Image
                src={tool.image}
                alt={tool.name}
                width={100}
                height={100}
                className="w-full h-full object-contain lg:p-2 dark:invert-0"
              />
              <BlurredOrb className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl lg:h-14 lg:w-14 w-8 h-8" />
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
            className="text-center text-3xl md:text-4xl font-aleo"
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
            className="text-center text-muted-foreground text-lg md:text-base"
          >
            Connect seamlessly with popular platforms and services to enhance
            your workflow.
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
