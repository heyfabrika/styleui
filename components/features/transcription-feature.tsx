"use client";
import Image from "next/image";
import { AnimatedList } from "../animated-list";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

const transcriptions = [
  {
    time: "00:20",
    text: "Hey! Thanks for hopping on. How's everything going with the new website?",
  },
  {
    time: "00:23",
    text: "Pretty good! We launched last Tuesday. Traffic's been solid so far.",
  },
  {
    time: "00:32",
    text: "That's awesome. Any issues come up?",
  },
  {
    time: "00:48",
    text: "Just one small thing—the contact form wasn't sending emails properly. But we fixed it yesterday.",
  },
];

function TranscriptionItem({ time, text }: { time: string; text: string }) {
  return (
    <div className="flex items-start 4xl:gap-8">
      <span className="text-muted-foreground/60 font-mono text-xs shrink-0 pt-1 w-10 text-right 4xl:text-2xl">
        {time}
      </span>
      <div className="relative border-l border-border/40 pl-6 pb-6 last:pb-0">
        <p className="text-foreground/80 leading-relaxed text-xs lg:text-base 4xl:text-2xl">{text}</p>
      </div>
    </div>
  );
}

export default function TranscriptionFeature() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center lg:min-h-[60dvh] w-full mx-auto px-4 pb-6 bg-gradient-to-b lg:bg-gradient-to-br from-background via-background max-lg:via-primary/20 to-primary/70 lg:to-primary/15 dark:to-primary/60 rounded-4xl mt-20 4xl:mt-0 4xl:min-h-[80dvh]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 max-w-5xl 4xl:min-w-[80dvw]">
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex-1 space-y-6 text-center lg:text-left z-10"
        >
          <h2 className="text-2xl lg:text-4xl 4xl:text-6xl font-aleo tracking-tight text-foreground">
            Transcription captures words. <br />
            Notio captures context.
          </h2>
          <p className="text-muted-foreground 4xl:text-3xl font-light leading-relaxed max-w-lg 4xl:max-w-full mx-auto lg:mx-0">
            Transcription tells you what was said. Your notes tell you what it
            meant. Flag concerns, mark excitement, note hesitations—capture the
            full story of every call.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative flex-1 w-full flex justify-center lg:justify-end isolate rounded-3xl"
        >
          <Card className="w-full max-w-md 4xl:max-w-2xl min-h-64 lg:min-h-96 4xl:min-h-[60dvh] dark:bg-background backdrop-blur-sm overflow-hidden relative rounded-3xl border border-primary/10">
            <div className="p-4 lg:p-8 pb-24 lg:pb-32">
              <div className="mb-8">
                <p className="text-base text-foreground leading-relaxed 4xl:text-2xl">
                  Joanne sounds upset on the phone. Should ask her how things
                  are going.
                </p>
              </div>

              <div className="flex flex-col">
                <AnimatedList delay={1000} reverse={false} className="lg:gap-4 4xl:gap-12">
                  {transcriptions.map((item) => (
                    <TranscriptionItem
                      key={item.time}
                      time={item.time}
                      text={item.text}
                    />
                  ))}
                </AnimatedList>

                <div className="flex gap-4 items-start text-sm mt-2 4xl:mt-12 z-50">
                  <Skeleton className="w-10 h-4 shrink-0 4xl:w-14 4xl:h-8" />
                  <div className="border-l border-border/40 pl-6 w-full space-y-2">
                    <Skeleton className="h-2.5 rounded-full w-3/4 4xl:h-6 4xl:w-full" />
                    <Skeleton className="h-2.5 rounded-full w-1/2 4xl:h-6 4xl:w-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 lg:bottom-14 left-0 right-0 flex justify-center z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <div className="relative flex items-center gap-3 dark:bg-background bg-white px-5 py-2.5 rounded-full border border-primary shadow-[0_0_41.9px_0_rgba(157,79,255,0.4)] 4xl:px-10 4xl:py-5">
                  <Image
                    src={
                      isDark
                        ? "logo/notio-icon-white.svg"
                        : "logo/notio-icon-black.svg"
                    }
                    alt="Notio"
                    width={20}
                    height={20}
                    className="4xl:size-10"
                  />
                  <span className="text-sm font-medium text-foreground/90 4xl:text-2xl">
                    Transcribing call audio
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
          </Card>
        </motion.section>
      </div>
    </motion.div>
  );
}
