"use client";
import { motion } from "motion/react";
import TestimonialCard from "./testimonial-card";
import { useTheme } from "next-themes";

export default function Testimonial() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <div className="pt-30 pb-12 lg:pt-40 lg:px-4 max-w-6xl 4xl:min-w-[70dvw] mx-auto flex flex-col gap-12">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-4 text-center"
      >
        <h2 className="text-2xl md:text-4xl 4xl:text-6xl font-aleo tracking-tight text-foreground">
          Loved by thousands who work smarter,{" "}
          <br className="hidden md:block" />
          connect better, and never miss a beat
        </h2>
      </motion.section>

      <section className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="md:col-span-3 h-full"
        >
          <TestimonialCard
            logo={isDark ? "https://cdn.brandfetch.io/id6B0ZV-R2/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1733967977554" : "https://cdn.brandfetch.io/id6B0ZV-R2/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1733967977437"}
            quote="We tested Notio with over 2,000 freelancers on our platform, and the feedback was overwhelming. Consultants, designers, and developers all said the same thing—they finally felt confident taking client calls without the stress of frantic note-taking. One freelancer now she just reviews the transcript, adds a few annotations, and moves on with her day. That's time she can bill to another client."
            author="Mary Chen"
            role="VP of Product"
            avatarSrc="/illustrations/avatar-1.svg"
            className="h-full justify-between"
          />
        </motion.div>

        <div className="md:col-span-2 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <TestimonialCard
              quote="I used to lose track of client feedback during calls. Now every revision request is documented perfectly. Game changer."
              author="Alex Thompson"
              role="Brand Designer"
              avatarSrc="/illustrations/avatar-2.svg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <TestimonialCard
              quote="My clients love that I remember everything—even from months ago. It's helped me build deeper trust."
              author="Jordan Martinex"
              role="Executive Coach"
              avatarSrc="/illustrations/avatar-3.svg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
