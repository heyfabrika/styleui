import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { PricingCardProps } from "@/types/components/pricing";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

export default function PricingCard({
  features,
  price,
  slug,
  isFree,
  buttonText,
  className,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "min-w-xs 4xl:min-w-md p-8",
        !isFree &&
          "bg-gradient-to-tl from-transparent via-transparent dark:via-secondary/20 to-primary/10 dark:to-primary/50 border border-primary/20 min-h-96 4xl:min-h-120",
        className
      )}
    >
      <CardHeader className="p-0">
        <div className="flex flex-col gap-6 w-full 4xl:gap-8">
          <Badge
            variant="outline"
            className={cn("w-fit bg-background 4xl:text-lg 4xl:px-6 4xl:py-4 dark:border-foreground", !isFree && "border-none dark:bg-foreground dark:text-background")}
          >
            {slug.charAt(0).toUpperCase() + slug.slice(1)}
          </Badge>
          <CardTitle className="text-xl min-w-40 4xl:text-4xl">
            ${price} / month
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent
        className="flex flex-col gap-8 w-full p-0"
      >
        <Button
          variant={isFree ? "outline" : "default"}
          className={cn(
            "w-full 4xl:h-14 4xl:text-lg",
            !isFree ? "bg-foreground hover:bg-foreground/90" : "w-full dark:border-foreground"
          )}
        >
          {buttonText ?? (isFree ? "Start for free" : "Get started")}
        </Button>
        <CardDescription className="text-foreground">
          {!isFree && (
            <p className="font-semibold mb-3 4xl:text-2xl">
              Everything in free plus:
            </p>
          )}
          <ul className="flex flex-col gap-2 4xl:gap-4 4xl:text-xl">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="size-4 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
