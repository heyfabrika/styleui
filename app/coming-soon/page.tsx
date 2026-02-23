"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-210px)] py-12 px-4">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4 font-serif italic">
          Coming Soon
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          We're working on something amazing. This page will be available soon.
        </p>
        <Link href="/">
          <Button variant="outline">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;