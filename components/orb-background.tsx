import { cn } from "@/lib/utils";

export default function OrbBackground({
  className,
  isDark,
}: {
  className?: string;
  isDark?: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] pointer-events-none",
        className
      )}
      style={{
        background: isDark
          ? "radial-gradient(circle at center, rgba(168, 85, 247, 0.35) 0%, rgba(162, 33, 179, 0.15) 60%, transparent 100%)"
          : "radial-gradient(circle at center, rgba(220, 85, 247, 0.25) 0%, rgba(192, 132, 252, 0.1) 60%, transparent 100%)",
        filter: "blur(60px)",
        zIndex: 0,
      }}
    />
  );
}
