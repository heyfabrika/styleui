"use client"

import Counter from "@/components/counter";
import { motion } from "motion/react";

const Stats = () => {
    const stats = [
        {
            name: "Clients managed",
            value: 10,
            suffix: "K+",
        },
        {
            name: "Faster proposal tracking",
            value: 3,
            suffix: "x",
        },
        {
            name: "For client history",
            value: 1,
            suffix: " place",
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:my-6"
        >
            <div className="mb-16 flex flex-col items-center gap-3 px-4 text-center">
                <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                    Relationships over everything
                </h2>
                <p className="max-w-md text-sm text-muted-foreground sm:text-base">
                    Everything you need to manage clients and deals—nothing you don&apos;t
                </p>
            </div>

            <div className="mx-auto max-w-5xl px-4">
                <div className="grid grid-cols-1 border-l border-t border-border md:grid-cols-3">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center border-b border-r border-border py-12 px-6 text-center"
                        >
                            <div className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">
                                {stat.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Stats;
