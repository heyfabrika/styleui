"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <ToggleGroup
      value={resolvedTheme ? [resolvedTheme] : []}
      onValueChange={(value) => {
        if (value[0]) setTheme(value[0]);
      }}
      className="border border-border"
    >
      <ToggleGroupItem value="dark" aria-label="Dark theme" className={resolvedTheme === "dark" ? "opacity-100" : "opacity-20"}>
        <Moon className="h-4 w-4 4xl:size-8" />
      </ToggleGroupItem>
      <ToggleGroupItem value="light" aria-label="Light theme" className={resolvedTheme === "light" ? "opacity-100" : "opacity-50"}>
        <Sun className="h-4 w-4 4xl:size-8" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
