import { ThemeProvider } from "./theme-provider";
import { ColorThemeProvider } from "@/utils/context/color-theme-context";
import { ThemeVariables } from "@/components/theme/theme-variables";
import { ColorThemeSwitcher } from "@/components/theme/color-theme-switcher";

export default function BaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ColorThemeProvider>
        <ThemeVariables />
        {children}
        <ColorThemeSwitcher />
      </ColorThemeProvider>
    </ThemeProvider>
  );
}
