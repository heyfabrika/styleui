"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-[72px] rounded-full border border-border" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative inline-flex h-9 w-[72px] items-center justify-center rounded-full border border-border bg-background/80 px-2 transition-colors"
    >
      <motion.div
        layout
        initial={false}
        aria-hidden="true"
        className="absolute h-7 w-7 rounded-full bg-muted shadow-sm"
        animate={{ x: isDark ? -18 : 18 }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      />

      <div className="relative z-10 flex w-full items-center justify-between">
        <Moon
          className="h-4 w-4 dark:text-secondary"
          aria-hidden="true"
          strokeWidth={1.8}
          style={{
            opacity: isDark ? 1 : 0.35,
          }}
        />
        <Sun
          className="h-4 w-4"
          aria-hidden="true"
          strokeWidth={1.8}
          style={{
            opacity: isDark ? 0.35 : 1,
          }}
        />
      </div>
    </button>
  );
}