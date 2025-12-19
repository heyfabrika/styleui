"use client";

import { motion } from "motion/react";
import Counter from "./counter";

export default function Stats() {
  const stats: { value: number; suffix?: string; description: string }[] = [
    { value: 500, suffix: "K+", description: "Daily Active Users" },
    { value: 95, suffix: "%", description: "Transcription Accuracy" },
    { value: 12, description: "Hours Saved Per Month" },
  ];

  return (
    <div className="flex flex-col gap-24 items-center justify-center py-12 px-4">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-4 text-center max-w-2xl"
      >
        <h2 className="text-3xl md:text-5xl font-aleo tracking-tight">
          Words + Context = Better Notes
        </h2>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          Our users save an average of 2.5 hours every week—time better spent on
          what actually moves the needle.
        </p>
      </motion.section>

      <section className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl divide-y md:divide-y-0 md:divide-x divide-border">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.description}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: 0.1 + index * 0.15,
              ease: "easeOut",
            }}
            className="flex flex-col items-center justify-center px-8 md:px-12 py-6 md:py-0 w-full md:w-auto"
          >
            <p className="text-4xl md:text-5xl tracking-tight mb-2 font-aleo min-w-xs text-center">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-sm text-muted-foreground font-medium text-center">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
