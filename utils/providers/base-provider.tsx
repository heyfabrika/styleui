import { RootProvider } from "fumadocs-ui/provider/next";
import { ThemeProvider } from "./theme-provider";

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
      <RootProvider>
        {children}
      </RootProvider>
    </ThemeProvider>
  );
}
