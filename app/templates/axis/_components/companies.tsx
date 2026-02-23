import Image from "next/image";

const logos = [
    { name: "adobe", width: 105, height: 28 },
    { name: "amazon", width: 105, height: 32 },
    { name: "airbnb", width: 105, height: 32 },
    { name: "openai", width: 105, height: 28 },
    { name: "stripe", width: 105, height: 42 },
    { name: "zoom", width: 105, height: 24 },
    { name: "salesforce", width: 105, height: 45 },
    { name: "shopify", width: 105, height: 30 },
];

const Companies = () => {
    return (
        <section className="flex flex-col gap-8 w-full">
            <div className="flex flex-col items-center text-center">
                <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                    Trusted by top companies
                </h2>
                <p className="mt-4 text-muted-foreground text-base">
                    Trusted by independent consultants and small firms across product,
                    design, and engineering.
                </p>
            </div>

            <div className="mx-auto max-w-6xl px-4 w-full">
                <div className="grid grid-cols-2 border-l border-t border-border md:grid-cols-4">
                    {logos.map((logo) => (
                        <div
                            key={logo.name}
                            className="flex h-24 lg:h-32 items-center justify-center border-b border-r border-border grayscale transition-all duration-300 hover:grayscale-0"
                        >
                            <Image
                                src={`/logo/templates/axis/${logo.name}.svg`}
                                alt={`${logo.name} logo`}
                                width={logo.width}
                                height={logo.height}
                                className="opacity-90 dark:invert"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Companies;