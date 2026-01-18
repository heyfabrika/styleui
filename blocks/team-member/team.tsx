"use client";
import { cn } from "@/lib/utils";
import { TeamMember } from "@/types/components/team-member";
import { motion } from "motion/react";
import Image from "next/image";
import BlurredOrb from "../../components/blurred-orb";
import { GridPattern } from "../../components/ui/grid-pattern";
import TeamMemberAvatar from "./team-member-avatar";
import { useMediaQuery } from "@/hooks/use-media-query";

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

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="relative flex flex-col gap-8 lg:gap-0 items-center justify-center p-4 mt-28 mb-4 md:mt-40 lg:mb-2">
      <section className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 -top-32"
        >
          <GridPattern
            width={isMobile ? 40 : 60}
            height={isMobile ? 40 : 60}
            x={-1}
            y={-1}
            className={cn(
              "dark:[mask-image:radial-gradient(200px_circle_at_center,white,transparent)] [mask-image:radial-gradient(200px_circle_at_center,white,transparent)] md:dark:[mask-image:radial-gradient(270px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(350px_circle_at_center,white,transparent)] -z-10"
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
          <BlurredOrb className="w-64 h-44 md:w-64 md:h-64 from-primary via-gradient-mid-light to-gradient-end-light -rotate-45 opacity-70" />
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
          src="/logo/notio-logo-black.svg"
          alt="Team"
          width={120}
          height={120}
          className="md:w-40 lg:h-32 dark:hidden"
        />
        <Image
          src="/logo/notio-logo-white.svg"
          alt="Team"
          width={120}
          height={120}
          className="md:w-40 lg:h-32 hidden dark:block"
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
