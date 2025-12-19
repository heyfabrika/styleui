"use client";

import { StaticImageType } from "@/types/components/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { motion } from "motion/react";
import Image from "next/image";
import BlurredOrb from "../blurred-orb";

export default function ToolFeature() {
    const tools: StaticImageType[] = [
      {
        name: "Notion",
        image:
          "https://cdn.brandfetch.io/idPYUoikV7/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1714126994748",
      },
      {
        name: "Loom",
        image:
          "https://cdn.brandfetch.io/iddLCZGlbs/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1668081660174",
      },
      {
        name: "Medium",
        image: "https://www.svgrepo.com/show/354057/medium-icon.svg",
      },
      {
        name: "Mailchip",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQJyunlZcgA_Y7pS-Dr1hVJrlQ6nH4zBUig&s",
      },
      {
        name: "Calendly",
        image:
          "https://cdn.brandfetch.io/idbJpTKFPT/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1668070451925",
      },
    ];
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card className="w-full min-h-96 gap-16 flex flex-col items-center justify-center dark:bg-background">
          <CardHeader className="flex flex-wrap gap-12 items-center justify-center w-full justify-center">
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
                className="relative flex items-center justify-center"
              >
                <Image
                  src={tool.image}
                  alt={tool.name}
                  width={100}
                  height={100}
                  className="border p-4 bg-background rounded-xl"
                />
                <BlurredOrb className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
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
              className="text-center text-4xl font-aleo"
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
              className="text-center text-muted-foreground"
            >
              Connect seamlessly with popular platforms and services to enhance your
              workflow.
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }
  