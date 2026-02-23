"use client";
import { RootProvider } from "fumadocs-ui/provider/next";
import { ThemeProvider } from "./theme-provider";
import CustomSearchDialog from "@/components/common/search";
import { TreeContextProvider } from "fumadocs-ui/contexts/tree";
import { componentsSource, docsSource } from "@/lib/source";
import { NextProvider } from "fumadocs-core/framework/next";
import ComingSoonProvider from "./coming-soon-provider";
export default function BaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const tree = {
    ...docsSource.pageTree,
    children: [
      ...docsSource.pageTree.children,
      ...componentsSource.pageTree.children,
    ],
  };
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextProvider>
        <TreeContextProvider tree={tree}>
          <RootProvider search={{ SearchDialog: CustomSearchDialog }}>
            <ComingSoonProvider>
              {children}
            </ComingSoonProvider>
          </RootProvider>
        </TreeContextProvider>
      </NextProvider>
    </ThemeProvider>
  );
}
