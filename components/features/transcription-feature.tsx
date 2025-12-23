"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { AnimatedList } from "../animated-list";
import BlurredOrb from "../blurred-orb";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";

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
    time: "00:46",
    text: "Just one small thing—the contact form wasn't sending emails properly. But we fixed it yesterday.",
  },
];

function TranscriptionItem({ time, text }: { time: string; text: string }) {
  return (
    <div className="flex items-start 4xl:gap-8">
      <span className="text-muted-foreground/60 font-mono text-xs shrink-0 pt-1 w-6 lg:w-6 xl:w-10 text-right 4xl:text-2xl">
        {time}
      </span>
      <div className="relative border-l border-border/40 pl-6 pb-6 last:pb-0">
        <p className="text-foreground/80 leading-relaxed text-xs lg:text-base 4xl:text-2xl">
          {text}
        </p>
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
      className="flex flex-col items-center justify-center w-full mx-auto px-4 lg:px-20 xl:px-16 2xl:px-20 4xl:px-20 pb-6 lg:pb-0 bg-gradient-to-b lg:bg-gradient-to-br from-background via-background dark:via-secondary/30 lg:dark:via-secondary/5 max-lg:via-secondary/10 to-primary/40 lg:to-primary/30 dark:to-secondary/60 lg:dark:to-secondary/50 rounded-4xl mt-20 lg:mt-0"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 xl:gap-24 max-w-7xl">
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex-1 space-y-6 text-center lg:text-left z-10"
        >
          <h2 className="text-2xl md:text-4xl 4xl:text-5xl font-aleo tracking-tight text-foreground">
            Transcription captures words. <br />
            Notio captures context.
          </h2>
          <p className="text-muted-foreground 4xl:text-3xl font-light leading-relaxed max-w-2xl 4xl:max-w-full mx-auto lg:mx-0">
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
          className="relative flex-1 w-full flex justify-center lg:justify-end isolate rounded-3xl max-lg:px-4 lg:mb-8"
        >
          <Card className="w-full max-w-100 4xl:max-w-2xl min-h-64 lg:min-h-96 4xl:min-h-[60dvh] dark:bg-background backdrop-blur-sm overflow-hidden relative rounded-3xl border border-primary/10">
            <div className="p-4 lg:px-8 lg:py-6 pb-24 lg:pb-32">
              <div className="mb-8">
                <p className="text-sm md:text-base text-foreground leading-relaxed 4xl:text-2xl">
                  Joanne sounds upset on the phone. Should ask her how things
                  are going.
                </p>
                <Separator className="md:mt-4 opacity-50" />
              </div>

              <div className="flex flex-col gap-4 md:gap-8">
                <AnimatedList
                  delay={1000}
                  reverse={false}
                  className="lg:gap-4 4xl:gap-12"
                >
                  {transcriptions.map((item) => (
                    <TranscriptionItem
                      key={item.time}
                      time={item.time}
                      text={item.text}
                    />
                  ))}
                </AnimatedList>

                <div className="border-l border-border/40 pl-6 w-full space-y-2">
                  <Skeleton className="h-2.5 rounded-full w-3/4 4xl:h-6 4xl:w-full" />
                  <Skeleton className="h-2.5 rounded-full w-1/2 4xl:h-6 4xl:w-full" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 lg:bottom-14 left-0 right-0 flex justify-center z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <div className="relative flex items-center gap-3 dark:bg-background bg-white px-5 py-2.5 rounded-full border border-secondary/70 shadow-[0_0_41.9px_0_rgba(199,104,41,0.2)] dark:shadow-[0_0_41.9px_0_rgba(199,104,41,0.4)] 4xl:px-10 4xl:py-5">
                  <BlurredOrb className="absolute inset-0 dark:blur-xl rounded-full w-full h-full opacity-20" />
                  <Image
                    src="logo/notio-icon-black.svg"
                    alt="Notio"
                    width={20}
                    height={20}
                    className="size-7 lg:size-8 4xl:size-10 dark:hidden"
                  />
                  <Image
                    src="logo/notio-icon-white.svg"
                    alt="Notio"
                    width={20}
                    height={20}
                    className="size-7 lg:size-8 4xl:size-10 hidden dark:block"
                  />
                  <span className="font-medium text-foreground/90 4xl:text-2xl">
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
