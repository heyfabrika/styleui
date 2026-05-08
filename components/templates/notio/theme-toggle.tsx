"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="border border-border h-9 w-[72px] rounded-md" />;
  }

  return (
    <ToggleGroup
      value={resolvedTheme ? [resolvedTheme] : []}
      onValueChange={(value) => {
        if (value[0]) setTheme(value[0]);
      }}
      className="border border-border overflow-hidden"
    >
      <ToggleGroupItem value="dark" aria-label="Dark theme" className="opacity-20 dark:opacity-100">
        <Moon className="h-4 w-4 4xl:size-5" />
      </ToggleGroupItem>
      <ToggleGroupItem value="light" aria-label="Light theme" className="dark:opacity-30 !bg-zinc-200 dark:!bg-transparent">
        <Sun className="h-4 w-4 4xl:size-5" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}