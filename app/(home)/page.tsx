import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Component, Blocks, Palette, ArrowRight } from "lucide-react";

const Page = () => {
  const features = [
    {
      title: "Components",
      description: "Browse our collection of reusable UI components built with modern design principles.",
      href: "/components",
      icon: Component,
    },
    {
      title: "Blocks",
      description: "Pre-built sections and layouts ready to integrate into your projects.",
      href: "/blocks",
      icon: Blocks,
    },
    {
      title: "Themes",
      description: "Beautiful color schemes and design themes to customize your application.",
      href: "/docs",
      icon: Palette,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12 px-4">
      <div className="text-center mb-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Style UI
        </h1>
        <p className="text-lg text-muted-foreground">
          A modern component library and design system for building beautiful user interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Link key={feature.title} href={feature.href}>
              <Card className="h-full transition-all hover:shadow-lg hover:scale-105 cursor-pointer group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between group-hover:text-primary">
                    View
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Page;