"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useColorTheme } from "@/utils/context/color-theme-context";
import { Check, Palette } from "lucide-react";
import { motion } from "motion/react";

const themeNames = ["basil", "forest", "sunny"] as const;

const themeSwatches: Record<string, string> = {
  basil: "oklch(0.6292 0.0458 300.3136)", 
  forest: "oklch(0.8348 0.1302 160.9080)", 
  sunny: "oklch(0.713 0.1305 61.77)",
};

export function ColorThemeSwitcher() {
  const { colorTheme, setColorTheme } = useColorTheme();

  const handleThemeChange = (theme: string) => {
    setColorTheme(theme);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-4 right-4 z-50"
    >
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all",
              "bg-background/80 backdrop-blur-sm border-border",
              "hover:scale-110 active:scale-95"
            )}
            aria-label="Change color theme"
          >
            <Palette className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          side="top"
          sideOffset={8}
          className="min-w-[140px]"
        >
          {themeNames.map((theme) => {
            const isSelected = colorTheme === theme;
            const swatchColor = themeSwatches[theme];

            return (
              <DropdownMenuItem
                key={theme}
                onClick={() => handleThemeChange(theme)}
                className={cn(
                  "flex items-center gap-2 cursor-pointer",
                  isSelected && "bg-accent"
                )}
              >
                <div
                  className="h-4 w-4 rounded-full border border-border"
                  style={{ backgroundColor: swatchColor }}
                  aria-hidden="true"
                />
                <span className="flex-1 capitalize">{theme}</span>
                {isSelected && (
                  <Check className="h-4 w-4 text-primary" />
                )}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}
