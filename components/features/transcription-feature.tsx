"use client";
import { AnimatedList } from "../animated-list";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { motion } from "motion/react";

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
    <div className="flex gap-4 items-start text-sm group">
      <span className="text-muted-foreground/60 font-mono text-xs shrink-0 pt-1 w-10 text-right">
        {time}
      </span>
      <div className="relative border-l border-border/40 pl-6 pb-6 last:pb-0">
        <p className="text-foreground/80 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

export default function TranscriptionFeature() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-[60dvh] w-full mx-auto px-4 bg-gradient-to-br from-background via-background to-primary/20 dark:to-primary/60 rounded-4xl"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 max-w-5xl">
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex-1 space-y-6 text-center lg:text-left z-10"
        >
          <h2 className="text-4xl font-aleo tracking-tight text-foreground">
            Transcription captures words. <br />
            Notio captures context.
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
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
          className="relative flex-1 w-full flex justify-center lg:justify-end isolate"
        >
          <Card className="w-full max-w-md min-h-96 dark:bg-background backdrop-blur-sm shadow-xl border-0 overflow-hidden relative rounded-3xl">
            <div className="p-8 pb-32">
              <div className="mb-8">
                <p className="text-base text-foreground leading-relaxed">
                  Joanne sounds upset on the phone. Should ask her how things
                  are going.
                </p>
              </div>

              <div className="flex flex-col">
                <AnimatedList delay={1000} reverse={false} className="gap-4">
                  {transcriptions.map((item) => (
                    <TranscriptionItem
                      key={item.time}
                      time={item.time}
                      text={item.text}
                    />
                  ))}
                </AnimatedList>

                <div className="flex gap-4 items-start text-sm mt-2">
                  <Skeleton className="w-10 h-4 shrink-0" />
                  <div className="border-l border-border/40 pl-6 w-full space-y-2">
                    <Skeleton className="h-2.5 rounded-full w-3/4" />
                    <Skeleton className="h-2.5 rounded-full w-1/2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <div className="relative flex items-center gap-3 dark:bg-background bg-white px-5 py-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-primary">
                  <span className="font-serif font-black text-lg">N</span>
                  <span className="text-sm font-medium text-foreground/90">
                    Transcribing call audio
                  </span>
                  <div className="relative flex h-2.5 w-2.5 ml-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
          </Card>
        </motion.section>
      </div>
    </motion.div>
  );
}
