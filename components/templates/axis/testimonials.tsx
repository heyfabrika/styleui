import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Verified } from "lucide-react";

const testimonials = [
    {
        avatar: "/illustrations/avatar-1.svg",
        name: "Ras Mic",
        handle: "@rasmic",
        content: (
            <>
                Finally a CRM that doesn&apos;t feel like a sales tool.{" "}
                <span className="text-blue-500">@axis_official</span> actually fits how
                I manage client work day to day.
            </>
        ),
        verified: true,
    },
    {
        avatar: "/illustrations/avatar-2.svg",
        name: "Maya Patel",
        handle: "@mayap_design",
        content: (
            <>
                I&apos;ve tried way too many CRMs.{" "}
                <span className="text-blue-500">@axis_official</span> is the first one I
                didn&apos;t abandon after a week.
            </>
        ),
    },
    {
        avatar: "/illustrations/avatar-3.svg",
        name: "Sam Riviera",
        handle: "@samconsults",
        content: (
            <>
                <span className="text-blue-500">@axis_official</span> Love how client
                history, proposals, and follow-ups live in one place. No clutter, no
                overthinking.
            </>
        ),
    },
    {
        avatar: "/illustrations/avatar-3.svg",
        name: "Alex Chen",
        handle: "@alexchen_co",
        content: (
            <>
                This feels built for consultants, not sales teams pretending to be
                consultants. <span className="text-blue-500">@axis_official</span>
            </>
        ),
    },
    {
        avatar: "/illustrations/avatar-3.svg",
        name: "Jordan Brooks",
        handle: "@jordanbuilds",
        content: (
            <>
                <span className="text-blue-500">@axis_official</span> replaced my messy
                mix of Notion, spreadsheets, and reminders. Way calmer now.
            </>
        ),
    },
    {
        avatar: "/illustrations/avatar-3.svg",
        name: "Taylor Nguyen",
        handle: "@taylor_nguyen6",
        content: (
            <>
                Set this up in under an hour and actually kept using it. That alone says
                a lot. Amazing <span className="text-blue-500">@axis_official</span>
            </>
        ),
        verified: true,
    },
];

const Testimonials = () => {
    return (
        <section className="mx-auto max-w-5xl px-4">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                    From consultants who wanted a simpler CRM.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-base">
                    Real feedback from consultants using Axis to manage clients,
                    proposals, and deals—without the usual CRM mess.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t, i) => (
                    <Card
                        key={i}
                        className="rounded-3xl border border-muted-foreground/20 bg-card dark:bg-muted-foreground/15 dark:border-0 shadow-none gap-0"
                    >
                        <CardHeader className="flex-row items-center gap-3 space-y-0 pb-4">
                            <div className="flex items-center gap-3">

                                <Image
                                    src={t.avatar}
                                    alt={t.name}
                                    width={40}
                                    height={40}
                                    className="h-10 w-10 rounded-full"
                                />
                                <div className="flex flex-col gap-0">
                                    <div className="flex items-center gap-1">
                                        <span className="text-base font-medium text-foreground">{t.name}</span>
                                        {t.verified && (
                                            <Verified fill="#1D9BF0" className="size-5 text-white"/>
                                        )}
                                    </div>
                                    <span className="text-xs text-muted-foreground">
                                        {t.handle}
                                    </span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <p className="font-medium leading-relaxed text-foreground">
                                {t.content}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <Button
                    variant="outline"
                    className="rounded-full px-6 text-sm font-medium"
                >
                    See all tweets
                </Button>
            </div>
        </section>
    );
};

export default Testimonials;