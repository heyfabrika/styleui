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
        "Custom tags & categories",
      ],
      slug: "Paid",
    },
  ];

  return (
    <div className="flex flex-col gap-8 4xl:gap-16 items-center justify-center md:p-4 lg:mb-20">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-2 md:space-y-4 text-center"
      >
        <h2 className="text-2xl font-normal font-aleo tracking-tight text-foreground md:text-4xl 4xl:text-6xl">
          Simple, Transparent pricing
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed 4xl:text-3xl">
          Start free. Upgrade when you're ready. Cancel anytime.
        </p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="flex flex-wrap items-center justify-center max-sm:gap-4"
      >
        {pricings.map((pricing, index) => (
          <div
            key={pricing.slug}
            className={index !== 0 ? "md:-ml-3" : ""}
          >
            <PricingCard {...pricing} />
          </div>
        ))}
      </motion.section>
    </div>
  );
}
