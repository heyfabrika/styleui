"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useColorTheme } from "@/utils/context/color-theme-context";
import { ThemeConfigProps } from "@/types/utils/configs/theme";

export function ThemeVariables({ themesConfig }: { themesConfig: ThemeConfigProps }) {
  const { resolvedTheme } = useTheme();
  const { colorTheme } = useColorTheme();

  useEffect(() => {
    const colorThemeConfig = themesConfig.find((theme) => theme.name === colorTheme);

    if (!colorThemeConfig) {
      console.warn(`Theme "${colorTheme}" not found`);
      return;
    }

    const isDark =
      resolvedTheme === "dark"
        ? true
        : resolvedTheme === "light"
          ? false
          : document.documentElement.classList.contains("dark");

    const colors = isDark ? colorThemeConfig.dark : colorThemeConfig.light;

    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [resolvedTheme, colorTheme]);

  return null;
}
