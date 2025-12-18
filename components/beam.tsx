"use client";

import { cn } from "@/lib/utils";

export default function Beam({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative min-h-[500px] w-full bg-transparent">
        <div
          className={cn(
            "absolute left-1/2 -top-[150px] -z-10 -translate-x-1/2 blur-[100px]",
            "h-0 w-0",
            "border-l-[1500px] border-l-transparent",
            "border-r-[1500px] border-r-transparent",
            "border-t-[1200px] border-t-[rgba(123,67,200,0.15)] dark:border-t-[rgba(123,67,200,0.3)]"
          )}
        />

        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 blur-[10px]",
            "top-0 md:top-[5%]",
            "h-0 w-0",
            "border-l-[800px] border-l-transparent",
            "border-r-[700px] border-r-transparent",
            "border-t-[50px] border-t-white/80 dark:border-t-[rgba(156,120,213,0.5)]"
          )}
        />

        <div className="pt-40 lg:pt-60">{children}</div>
      </div>
    </div>
  );
}
