"use client";
import { cn } from "@/lib/utils";
import { TeamMember } from "@/types/components/team-member";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import BlurredOrb from "../blurred-orb";
import { GridPattern } from "../ui/grid-pattern";
import TeamMemberAvatar from "./team-member-avatar";

export default function Team() {
  const team: Omit<TeamMember, "index">[] = [
    {
      name: "John Doe",
      role: "CEO",
      image: "/illustrations/avatar-1.svg",
    },
    {
      name: "Jane Doe",
      role: "CTO",
      image: "/illustrations/avatar-2.svg",
    },
    {
      name: "Jim Beam",
      role: "CFO",
      image: "/illustrations/avatar-3.svg",
    },
  ];

  const { resolvedTheme } = useTheme();

  return (
    <div className="relative flex flex-col gap-8 items-center justify-center p-4 mt-16 lg:mt-40 lg:mb-20">
      <section className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <GridPattern
            width={40}
            height={40}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] -z-10"
            )}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <BlurredOrb className="w-64 h-64" />
          <BlurredOrb className="w-64 h-64 from-primary via-pink-500 to-pink-400" />
        </motion.div>

        <div className="relative h-44 w-70">
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <TeamMemberAvatar member={{ ...team[0], index: 0 }} index={0} />
          </div>

          <div className="absolute bottom-0 left-0">
            <TeamMemberAvatar member={{ ...team[1], index: 1 }} index={1} />
          </div>

          <div className="absolute bottom-0 right-0">
            <TeamMemberAvatar member={{ ...team[2], index: 2 }} index={2} />
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Image
          src={
            resolvedTheme === "dark"
              ? "/logo/notio-logo-white.svg"
              : "/logo/notio-logo-black.svg"
          }
          alt="Team"
          width={120}
          height={120}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-2xl md:text-4xl font-aleo text-center max-w-2xl"
      >
        Built by a nimble team of entrepreneurs
      </motion.p>
    </div>
  );
}
