import { themesConfig } from "@/app/templates/notio/_configs/themes.config";
import { ColorThemeSwitcher } from "@/components/theme/color-theme-switcher";
import { ThemeVariables } from "@/components/theme/theme-variables";
import { ColorThemeProvider } from "@/utils/context/color-theme-context";
import { ThemeProvider } from "@/utils/providers/theme-provider";
import { Aleo } from "next/font/google";
import "./index.css";

const aleo = Aleo({ subsets: ["latin"], variable: "--font-aleo" });
const themeNames = ["basil", "forest", "sunny"];

const themeSwatches: Record<string, string> = {
    basil: "oklch(0.6292 0.0458 300.3136)",
    forest: "oklch(0.8348 0.1302 160.9080)",
    sunny: "oklch(0.713 0.1305 61.77)",
};
export default function NotioTemplateLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            storageKey="notio-theme"
            enableSystem={false}
            disableTransitionOnChange
        >
            <div className={`${aleo.variable} bg-background`}>
                <ColorThemeProvider>
                    <ThemeVariables themesConfig={themesConfig} />
                    {children}
                    <ColorThemeSwitcher themeNames={themeNames} themeSwatches={themeSwatches} />
                </ColorThemeProvider>
            </div>
        </ThemeProvider>
    );
}