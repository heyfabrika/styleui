import BaseProvider from "@/utils/providers/base-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StyleUI – Handmade UI Templates",
  description: "Handmade UI templates crafted with care. Choose a template, customize the details, and ship a world-class site today.",
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
