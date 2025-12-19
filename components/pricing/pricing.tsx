"use client";
import { motion } from "motion/react";
import PricingCard from "./pricing-card";

export default function Pricing() {
  const pricings: {
    price: number;
    features: string[];
    isFree?: boolean;
    slug: string;
  }[] = [
    {
      price: 0,
      features: [
        "30 minutes per month",
        "Real-time transcription",
        "Basic note-taking",
        "5 saved transcripts",
        "Search your calls",
      ],
      slug: "free",
      isFree: true,
    },
    {
      price: 10,
      features: [
        "Unlimited recording time",
        "Unlimited saved transcripts",
        "AI-powered summaries",
        "Advanced search & filters",
        "Priority email support",
        "Speaker identification",
        "Cloud sync across devices",
        "Custom tags & categories",
      ],
      slug: "pro",
    },
  ];

  return (
    <div className="flex flex-col gap-8 items-center justify-center p-4">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-4 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-aleo tracking-tight text-foreground">
          Simple, Transparent pricing
        </h2>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          Start free. Upgrade when you're ready. Cancel anytime.
        </p>
      </motion.section>
      <section className="flex flex-wrap items-center justify-center max-lg:gap-4">
        {pricings.map((pricing, index) => (
          <motion.div
            key={pricing.slug}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: 0.1 + index * 0.15,
              ease: "easeOut",
            }}
          >
            <PricingCard {...pricing} />
          </motion.div>
        ))}
      </section>
    </div>
  );
}
