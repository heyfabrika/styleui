"use client";
import { cn } from "@/lib/utils";
import { TeamMember } from "@/types/components/team-member";
import { motion } from "motion/react";
import Image from "next/image";
import BlurredOrb from "../blurred-orb";
import { GridPattern } from "../ui/grid-pattern";
import TeamMemberAvatar from "./team-member-avatar";

export default function Team() {
  const team: Omit<TeamMember, "index">[] = [
    {
      name: "Olivia Martin",
      role: "Co-Founder",
      image: "/illustrations/avatar-2.svg",
    },
    {
      name: "John Doe",
      role: "CTO",
      image: "/illustrations/avatar-1.svg",
    },
    {
      name: "Jim Beam",
      role: "CFO",
      image: "/illustrations/avatar-3.svg",
    },
  ];

  return (
    <div className="relative flex flex-col gap-8 items-center justify-center p-4 mt-16 md:mt-40 lg:mb-14">
      <section className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 -top-32"
        >
          <GridPattern
            width={45}
            height={45}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] -z-10"
            )}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-md:space-y-4"
        >
          <BlurredOrb className="w-64 h-44 md:w-64 md:h-64 -rotate-45 opacity-70" />
          <BlurredOrb className="w-64 h-44 md:w-64 md:h-64 from-primary via-orange-200 to-orange-100 -rotate-45 opacity-70" />
        </motion.div>

        <div className="relative h-44 w-70 4xl:h-80 4xl:w-120">
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
          src="/logo/notio-logo-black.svg"
          alt="Team"
          width={120}
          height={120}
          className="4xl:w-64 4xl:h-40 dark:hidden"
        />
        <Image
          src="/logo/notio-logo-white.svg"
          alt="Team"
          width={120}
          height={120}
          className="4xl:w-64 4xl:h-40 hidden dark:block"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-2xl md:text-4xl 4xl:text-6xl font-aleo text-center max-w-2xl 4xl:max-w-7xl"
      >
        Built by a nimble team of entrepreneurs
      </motion.p>
    </div>
  );
}
