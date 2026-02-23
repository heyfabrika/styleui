import { useMediaQuery } from "@/hooks/use-media-query";
import { TeamMember } from "@/types/components/team-member";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function TeamMemberAvatar({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2 + index * 0.15,
        type: "spring",
        stiffness: 150,
        damping: 15,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {(isHovered || (index === 0 && isMobile)) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-16 4xl:-top-24 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-2 rounded-lg whitespace-nowrap z-10 4xl:text-2xl"
          >
            <p className="4xl:text-2xl">{member.name}</p>
            <p className="text-sm text-zinc-400 4xl:text-xl">{member.role}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="size-24 4xl:size-40 rounded-full flex items-center justify-center overflow-hidden cursor-pointer"
      >
        <Image
          src={member.image}
          alt={member.name}
          width={80}
          height={80}
          className="object-contain 4xl:size-40"
        />
      </motion.div>
    </motion.div>
  );
}
