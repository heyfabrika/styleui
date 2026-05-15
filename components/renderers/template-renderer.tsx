"use client";

import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { ArrowUpRight, Check, Code, Copy, Eye } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCopyToClipboard } from "usehooks-ts";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "motion/react";
import CodeRenderer from "./code-renderer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Image from "next/image";

export type TemplateRendererProps = {
  src: string;
  name: string;
  command: string;
  loadingMode?: "lazy" | "eager";
  className?: string;
  compact?: boolean;
  href?: string;
  previewImage?: string;
};

const TemplateRenderer = ({
  src,
  name,
  command,
  loadingMode = "lazy",
  className,
  compact = false,
  href,
  previewImage,
}: TemplateRendererProps) => {
  const [toggleType, setToggleType] = useState<"preview" | "code">("preview");
  const [isCopied, setIsCopied] = useState(false);
  const [copiedText, copy] = useCopyToClipboard();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [packageManager, setPackageManager] = useState<
    "bun" | "npm" | "pnpm" | "yarn"
  >("bun");

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const installationCommands = [
    {
      command: `bunx --bun shadcn@latest add ${command}`,
      name: "bun",
      icon: "/icons/package-managers/bun.svg",
    },
    {
      command: `npx shadcn@latest add ${command}`,
      name: "npm",
      icon: "/icons/package-managers/npm.svg",
    },
    {
      command: `pnpm dlx shadcn@latest add ${command}`,
      name: "pnpm",
      icon: "/icons/package-managers/pnpm.svg",
    },
    {
      command: `yarn shadcn@latest add ${command}`,
      name: "yarn",
      icon: "/icons/package-managers/yarn.svg",
    },
  ];

  const currentCommand =
    installationCommands.find((cmd) => cmd.name === packageManager) ||
    installationCommands[0];

  const handleCopy = (e?: React.MouseEvent) => {
    e?.preventDefault();
    copy(currentCommand.command)
      .then(() => {
        setIsCopied(true);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  const [iframeLoaded, setIframeLoaded] = useState(false);

  if (compact) {
    return (
      <Link href={href ?? src} className="group flex flex-col gap-3">
        <div className="w-full aspect-[16/10] bg-muted/20 dark:bg-muted/40 border border-border/50 relative overflow-hidden rounded-xl">
          {previewImage && (
            <Image
              src={previewImage}
              alt={`${name} Preview`}
              fill
              className={cn(
                "object-cover object-top transition-opacity duration-500",
                iframeLoaded ? "opacity-0" : "opacity-100",
              )}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          )}
          <iframe
            src={src}
            className={cn(
              "border-0 pointer-events-none absolute inset-0 transition-opacity duration-500",
              iframeLoaded ? "opacity-100" : "opacity-0",
            )}
            style={{
              width: "300%",
              height: "300%",
              transform: "scale(0.333)",
              transformOrigin: "top left",
            }}
            title={`${name} Preview`}
            loading={loadingMode}
            onLoad={() => setIframeLoaded(true)}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{name}</span>
          <ArrowUpRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <section className="flex items-center justify-between">
        <ToggleGroup
          value={[toggleType]}
          onValueChange={(value) => {
            if (value[0]) {
              setToggleType(value[0] as "preview" | "code");
            }
          }}
          className="hidden md:block"
        >
          <ToggleGroupItem value="preview">
            <Eye /> Preview
          </ToggleGroupItem>
          <ToggleGroupItem value="code">
            <Code /> Code
          </ToggleGroupItem>
        </ToggleGroup>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <div className="flex items-start md:items-center gap-2">
            <Select
              value={packageManager}
              onValueChange={(value) =>
                setPackageManager(value as typeof packageManager)
              }
            >
              <SelectTrigger className="border-0 shadow-none h-auto px-2.5 w-auto">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={packageManager}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative size-4"
                      >
                        <Image
                          src={currentCommand.icon}
                          alt={packageManager}
                          fill
                          className="object-contain"
                        />
                      </motion.div>
                    </AnimatePresence>
                    <span className="text-sm font-medium">
                      {packageManager}
                    </span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {installationCommands.map((command) => (
                  <SelectItem key={command.name} value={command.name}>
                    <div className="flex items-center gap-2">
                      <div className="relative size-4">
                        <Image
                          src={command.icon}
                          alt={command.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span>{command.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <AnimatePresence mode="wait">
              <motion.code
                key={currentCommand.command}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
                className="text-xs text-muted-foreground font-mono px-2 py-1 bg-muted/30 dark:bg-muted rounded"
              >
                {currentCommand.command}
              </motion.code>
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className={cn(
                "flex items-center gap-2 text-sm transition-all duration-300",
                isCopied
                  ? "text-green-600 dark:text-green-400 border-green-600 dark:border-green-400"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <AnimatePresence mode="wait">
                {isCopied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check className="size-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Copy className="size-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
            <Link
              href={src}
              target="_blank"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              Open <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
      <ToggleGroup
        value={[toggleType]}
        onValueChange={(value) => {
          if (value[0]) {
            setToggleType(value[0] as "preview" | "code");
          }
        }}
        className="block md:hidden"
      >
        <ToggleGroupItem value="preview">
          <Eye /> Preview
        </ToggleGroupItem>
        <ToggleGroupItem value="code">
          <Code /> Code
        </ToggleGroupItem>
      </ToggleGroup>
      <section
        key={name}
        className="w-full h-fit bg-muted/20 dark:bg-muted/40 border border-gray-100 dark:border-border relative overflow-hidden rounded-2xl p-2"
      >
        <AnimatePresence mode="wait">
          {toggleType === "preview" ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full h-[85dvh] overflow-hidden rounded-xl"
            >
              <iframe
                src={src}
                className={cn("border-0", className)}
                style={{
                  width: "200%",
                  height: "200%",
                  transform: "scale(0.5)",
                  transformOrigin: "top left",
                }}
                title={`${src} Preview`}
                loading={loadingMode}
              />
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full h-fit overflow-hidden rounded-xl bg-background"
            >
              <CodeRenderer path={src} />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default TemplateRenderer;
