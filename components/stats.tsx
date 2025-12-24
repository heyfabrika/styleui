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
    <div className="flex flex-col gap-4 md:gap-20 items-center justify-center py-6 lg:py-24 px-4 lg:px-2">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-4 text-center max-w-3xl 4xl:max-w-4xl"
      >
        <h2 className="text-2xl md:text-5xl 4xl:text-6xl font-aleo tracking-tight">
          Words + Context = Better Notes
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed 4xl:text-3xl">
          Our users save an average of 2.5 hours every week—time better spent on
          what actually moves the needle.
        </p>
      </motion.section>

      <section className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">
        {stats.map((stat, index) => (
          <div
            className="flex flex-col lg:flex-row items-center justify-center gap-4"
            key={stat.description}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.15,
                ease: "easeOut",
              }}
              className={`flex flex-col items-center justify-center px-0 md:px-4 py-4 md:py-6 md:py-0 w-full md:w-auto h-14 ${
                index < stats.length - 1
                  ? "md:border-r border-muted-foreground/20 dark:border-muted-foreground/40"
                  : ""
              }`}
            >
              <p className="text-4xl md:text-5xl 4xl:text-6xl tracking-tight mb-2 min-w-xs md:min-w-64 lg:min-w-xs text-center font-semibold">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-center 4xl:text-2xl">
                {stat.description}
              </p>
            </motion.div>
            {index < stats.length - 1 && (
              <div className="block md:hidden w-14 mx-auto my-2 border-b dark:border-muted-foreground/20 border-muted-foreground" />
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
