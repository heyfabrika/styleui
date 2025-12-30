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
            "absolute left-1/2 -top-[9.375rem] lg:-top-[4rem] -z-10 -translate-x-1/2 blur-[6.25rem]",
            "h-0 w-0",
            "border-l-[600px] lg:border-l-[700px] xl:border-l-[400px] border-l-transparent",
            "border-r-[600px] lg:border-r-[700px] xl:border-l-[400px] border-r-transparent",
            "border-t-[600px] lg:border-t-[700px] xl:border-l-[400px] border-t-[rgba(199,104,41,0.15)] dark:border-t-[rgba(199,104,41,0.2)]"
          )}
        />

        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 blur-[0.625rem]",
            "top-0 md:top-[2%]",
            "h-0 w-0",
            "border-l-[20rem] md:border-l-[35rem] lg:border-l-[25rem] border-l-transparent",
            "border-r-[20.75rem] md:border-r-[35.75rem] lg:border-r-[25.75rem] border-r-transparent",
            "border-t-[2.125rem] md:border-t-[3.125rem] lg:border-t-[2.125rem] border-t-white/80 dark:border-t-[rgba(255,255,255,0.2)]"
          )}
        />

        <div className="pt-20 md:pt-50 lg:pt-56">{children}</div>
      </div>
    </div>
  );
}
