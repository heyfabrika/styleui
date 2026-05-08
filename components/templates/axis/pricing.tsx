"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { useMediaQuery } from "@/hooks/use-media-query";

const features = [
    "Unlimited clients",
    "Proposal & deal tracking",
    "Client notes and history",
    "Tasks and followups",
    "Team collaboration",
    "Email support",
    "No sales pipelines or setup required",
];

const Pricing = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <motion.div
            style={{
                backgroundImage: isMobile
                    ? "url('/images/templates/axis/pricing-mobile.svg')"
                    : "url('/images/templates/axis/pricing.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="rounded-4xl px-6 pt-16 pb-8 md:px-12 md:py-20 max-w-7xl mx-auto w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 flex flex-col items-center text-center">
                    <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                        Run your consulting business with less overhead
                    </h2>
                    <p className="mt-4 text-sm text-white/70 sm:text-base">
                        With Axis, you never have to learn a new tool. Use what you want.
                    </p>
                </div>

                <Card className="overflow-hidden rounded-2xl border-0 bg-background/85 p-0 shadow-xl">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-col border-b border-border/30 p-8 md:basis-2/5 md:border-b-0 md:border-r md:p-10">
                            <h3 className="text-center text-4xl font-medium text-foreground">
                                Axis
                            </h3>
                            <p className="mt-1 text-center text-lg text-muted-foreground">
                                For independent consultants
                                <br />
                                and small teams
                            </p>

                            <p className="mt-8 text-center text-xl font-medium text-foreground">
                                $39 per user / month
                            </p>

                            <div className="mt-8 flex flex-col gap-3">
                                <Button className="w-full rounded-full">
                                    Get started
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full rounded-full border-border"
                                >
                                    Book a demo
                                </Button>
                            </div>

                            <p className="mt-8 text-center text-sm text-muted-foreground font-light">
                                Includes all features, updates, and future
                                <br />
                                improvements.
                            </p>
                        </div>

                        <div className="flex flex-col justify-between p-8 md:basis-3/5 md:p-10">
                            <ul className="flex flex-col gap-3">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Check className="h-4 w-4 text-foreground" strokeWidth={2} />
                                        <span className="text-sm text-foreground font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 border-t border-border/30 pt-6">
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    Axis is designed for relationship-driven work. Manage clients,
                                    track deals, and stay on top of follow-ups—without the
                                    complexity of traditional CRMs. Companies using our platform
                                    include:
                                </p>
                                <div className="mt-4 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                    <Image
                                        src="/logo/templates/axis/logoipsum-1.svg"
                                        alt="Company logo"
                                        width={80}
                                        height={24}
                                        className="h-6 md:h-7 lg:h-10 w-auto opacity-80 dark:invert"
                                    />
                                    <Image
                                        src="/logo/templates/axis/logoipsum-2.svg"
                                        alt="Company logo"
                                        width={80}
                                        height={24}
                                        className="h-6 md:h-7 lg:h-10 w-auto opacity-80 dark:invert"
                                    />
                                    <Image
                                        src="/logo/templates/axis/shopify-2.svg"
                                        alt="Shopify"
                                        width={80}
                                        height={24}
                                        className="h-6 md:h-7 lg:h-10 w-auto opacity-80 dark:invert"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </motion.div>
    );
};

export default Pricing;
