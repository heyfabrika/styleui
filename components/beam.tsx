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
      <div className="relative min-h-[31.25rem] w-full bg-transparent">
        <div
          className={cn(
            "absolute left-1/2 -top-[9.375rem] -z-10 -translate-x-1/2 blur-[6.25rem]",
            "h-0 w-0",
            "border-l-[1000px] border-l-transparent",
            "border-r-[1000px] border-r-transparent",
            "border-t-[700px] border-t-[rgba(123,67,200,0.15)] dark:border-t-[rgba(123,67,200,0.3)]"
          )}
        />

        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 blur-[0.625rem]",
            "top-0 md:top-[3%]",
            "h-0 w-0",
            "border-l-[35rem] border-l-transparent",
            "border-r-[35.75rem] border-r-transparent",
            "border-t-[3.125rem] border-t-white/80 dark:border-t-[rgba(156,120,213,0.5)]"
          )}
        />

        <div className="pt-20 lg:pt-60">{children}</div>
      </div>
    </div>
  );
}
