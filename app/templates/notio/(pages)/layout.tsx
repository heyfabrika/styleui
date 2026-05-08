import { themesConfig } from "@/components/templates/notio/notio-themes";
import { ColorThemeSwitcher } from "@/components/theme/color-theme-switcher";
import { ThemeVariables } from "@/components/theme/theme-variables";
import { ColorThemeProvider } from "@/utils/context/color-theme-context";
import { ThemeProvider } from "@/utils/providers/theme-provider";
import { Aleo } from "next/font/google";
import "./index.css";

const aleo = Aleo({ subsets: ["latin"], variable: "--font-notio-aleo" });
const notioSansFont =
  '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, ui-sans-serif, sans-serif';
const themeNames = ["basil", "forest", "sunny"];

const themeSwatches: Record<string, string> = {
  basil: "oklch(0.6292 0.0458 300.3136)",
  forest: "oklch(0.8348 0.1302 160.9080)",
  sunny: "oklch(0.713 0.1305 61.77)",
};
export default function NotioTemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${aleo.variable} min-h-screen bg-background text-foreground`}
        style={{ fontFamily: notioSansFont }}
      >
        <div
          className={`${aleo.variable} min-h-screen bg-background text-foreground`}
          style={{ fontFamily: notioSansFont }}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ColorThemeProvider>
              <ThemeVariables themesConfig={themesConfig} />
              {children}
              <ColorThemeSwitcher
                themeNames={themeNames}
                themeSwatches={themeSwatches}
              />
            </ColorThemeProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
