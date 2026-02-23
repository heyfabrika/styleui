import BaseProvider from "@/utils/providers/base-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StyleUI",
  description: "UI component library to help you build your next project with style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-background text-foreground flex flex-col min-h-screen">
        <BaseProvider>{children}</BaseProvider>
      </body>
    </html>
  );
}
