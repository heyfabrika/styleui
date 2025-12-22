"use client";

import { FeatureCardProps } from "@/types/components/feature";
import { AudioLines, NotebookPen, Sparkle } from "lucide-react";
import { motion } from "motion/react";
import FeatureCard from "./feature-card";
import ToolFeature from "./tool-feature";
import TranscriptionFeature from "./transcription-feature";
export default function Features() {
  const features: FeatureCardProps[] = [
    {
      title: "Record your calls with ease",
      description:
        "Crystal-clear audio capture with automatic transcription. Never worry about missing details again.",
      icon: AudioLines,
    },
    {
      title: "Take notes as you talk",
      description:
        "Add highlights, action items, and reminders without interrupting the flow of conversation.",
      icon: NotebookPen,
    },
    {
      title: "Find any call in seconds",
      description:
        "Search transcripts, replay key moments, and export notes to your team—all in seconds.",
      icon: Sparkle,
    },
  ];

  return (
    <div className="flex flex-col gap-8 items-center justify-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-4xl 4xl:text-7xl font-aleo text-center"
      >
        One app for all your conversations
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="text-lg text-center max-w-2xl text-muted-foreground 4xl:text-3xl 4xl:max-w-6xl"
      >
        Whether it&apos;s client meetings, interviews, or team calls—capture,
        organize, and review every conversation in one place.
      </motion.p>
      <section className="flex flex-wrap gap-4 items-center justify-center">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: 0.2 + index * 0.15,
              ease: "easeOut",
            }}
          >
            <FeatureCard feature={feature} />
          </motion.div>
        ))}
      </section>
      <ToolFeature />
      <TranscriptionFeature />
    </div>
  );
}
