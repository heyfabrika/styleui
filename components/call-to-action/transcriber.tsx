"use client";

import useCountdown from "@/hooks/use-countdown";
import {
  BatteryFullIcon,
  RotateCcwIcon,
  SignalHighIcon,
  WifiIcon,
  XIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function Transcriber() {
  const { formatted, isRunning, toggle, reset } = useCountdown(0, true);
  const [barHeights, setBarHeights] = useState([48, 24, 32]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setBarHeights([
        Math.random() * 40 + 20,
        Math.random() * 40 + 20,
        Math.random() * 40 + 20,
      ]);
    }, 300);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="w-full max-w-xs md:max-w-sm xl:max-w-md 4xl:max-w-2xl p-[1px] rounded-4xl bg-gradient-to-r from-primary/50 via-secondary/40 to-muted-foreground/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-2 md:gap-8 w-full bg-gradient-to-b from-background to-zinc-100 dark:to-muted dark:lg:to-neutral-950 rounded-4xl border-0 pb-6 md:pb-8"
      >
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex flex-row items-center justify-between py-3 px-8"
      >
        <p className="text-xs md:text-base 4xl:text-2xl">9:41</p>
        <div className="flex flex-row items-center gap-1 md:gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <SignalHighIcon className="w-4 h-4 md:w-6 md:h-6 4xl:w-8 4xl:h-8" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <WifiIcon className="w-4 h-4 md:w-6 md:h-6 4xl:w-8 4xl:h-8" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <BatteryFullIcon className="w-4 h-4 md:w-6 md:h-6 4xl:w-8 4xl:h-8" />
          </motion.div>
        </div>
      </motion.section>

      <div>
        <motion.section
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          className="h-3 lg:h-4 4xl:h-6 w-72 lg:w-80 xl:w-100 4xl:w-150 mx-auto bg-muted-foreground/20 lg:dark:bg-neutral-950 rounded-t-full origin-left"
        />

        <div className="flex flex-col gap-4 pt-12 lg:pt-18 dark:bg-muted/50 lg:dark:bg-neutral-950 px-6 md:px-8 rounded-t-4xl">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col gap-4 lg:gap-8"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="text-2xl lg:text-4xl 4xl:text-5xl"
            >
              Call with Joanne
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="flex items-center"
            >
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="text-xl lg:text-3xl 4xl:text-4xl text-muted-foreground font-light opacity-80"
              >
                |
              </motion.span>
              <p className="text-xl lg:text-3xl 4xl:text-4xl text-muted-foreground font-light opacity-80">
                Write notes here.
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 1.1, duration: 0.4 }}
              className="text-muted-foreground text-sm md:text-base lg:text-lg 4xl:text-3xl"
            >
              Notio will keep transcribing even with your phone locked.
            </motion.p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
            className="relative shadow-2xl rounded-2xl md:rounded-4xl bg-background flex flex-col gap-3 md:gap-4 4xl:gap-20 p-3 md:p-4 min-h-64 md:min-h-72 lg:min-h-85 xl:min-h-90 4xl:min-h-140 overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isRunning ? 0.6 : 0.4,
                scale: isRunning ? [1, 1.05, 1] : 1,
              }}
              transition={{
                opacity: { duration: 0.4 },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-20 h-20 md:w-32 md:h-32 4xl:w-[13rem] 4xl:h-[13rem]"
              style={{
                borderRadius: 232,
                background:
                  "radial-gradient(circle,rgb(233,184,138) 0%, #DC8E43 30%, #C76829 60%, #9C3A21 100%)",
                filter: "blur(40px)",
              }}
            />
            <div className="relative z-10 flex items-center justify-between">
              <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-8 h-8 lg:w-10 lg:h-10 4xl:w-16 4xl:h-16"
                  onClick={reset}
                >
                  <motion.div
                    whileTap={{ rotate: -360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <RotateCcwIcon className="w-4 h-4 lg:w-5 lg:h-5 4xl:w-8 4xl:h-8 4xl:size-10" />
                  </motion.div>
                </Button>
              </motion.div>
              <div className="flex flex-col items-center justify-center gap-1 lg:gap-2 4xl:gap-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ delay: 1, duration: 0.3 }}
                  className="text-xs md:text-sm font-light text-muted-foreground 4xl:text-2xl"
                >
                  +1 (555) 123-4567
                </motion.p>
                <motion.p
                  key={formatted}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg md:text-2xl 4xl:text-4xl"
                >
                  {formatted}
                </motion.p>
              </div>
              <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-8 h-8 lg:w-10 lg:h-10 4xl:w-16 4xl:h-16"
                >
                  <XIcon className="w-4 h-4 lg:w-5 lg:h-5 4xl:w-8 4xl:h-8 4xl:size-10" />
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
              className="relative z-10 border border-foreground/20 rounded-full w-28 h-28 lg:w-40 lg:h-40 4xl:w-60 4xl:h-60 mx-auto flex items-center justify-center bg-background/50 backdrop-blur-sm"
            >
              <motion.button
                onClick={toggle}
                whileTap={{ scale: 0.9 }}
                className="relative w-8 h-8 lg:w-12 lg:h-12 4xl:w-16 4xl:h-16 bg-foreground flex items-center justify-center"
                animate={{ borderRadius: isRunning ? "4px" : "50%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="relative z-10 flex items-center justify-center gap-2"
            >
              <motion.div
                animate={{ height: isRunning ? barHeights[0] * 0.7 : 34 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-1 lg:w-1.5 4xl:w-2 bg-muted-foreground rounded-sm"
              />
              <motion.div
                animate={{ height: isRunning ? barHeights[1] * 0.7 : 17 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-1 lg:w-1.5 4xl:w-2 bg-muted-foreground rounded-sm"
              />
              <motion.div
                animate={{ height: isRunning ? barHeights[2] * 0.7 : 22 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-1 lg:w-1.5 4xl:w-2 bg-muted-foreground rounded-sm"
              />
            </motion.div>
          </motion.section>
        </div>
      </div>
      </motion.div>
    </div>
  );
}
