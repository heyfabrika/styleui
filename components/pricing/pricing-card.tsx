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
        "min-w-xs 4xl:min-w-md",
        !isFree &&
          "bg-gradient-to-tl from-transparent to-primary/10 border border-primary/20 lg:min-w-xl 4xl:min-w-4xl min-h-86 4xl:min-h-120 flex lg:flex-row items-start justify-between",
        className
      )}
    >
      <CardHeader>
        <div className="flex flex-col gap-4 w-full 4xl:gap-8">
          <Badge variant="outline" className="w-fit bg-background 4xl:text-lg 4xl:px-6 4xl:py-4">
            {slug.charAt(0).toUpperCase() + slug.slice(1)}
          </Badge>
          <CardTitle className="text-2xl min-w-40 4xl:text-4xl">${price} / month</CardTitle>
          {!isFree && (
            <Button
              variant={isFree ? "outline" : "default"}
              className="min-w-64 4xl:min-w-120 bg-foreground hover:bg-foreground/90 4xl:text-lg 4xl:px-6 4xl:h-14"
            >
              {buttonText ?? (isFree ? "Start for free" : "Get started")}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent
        className={cn("flex flex-col gap-4", !isFree && "flex flex-row gap-4")}
      >
        {isFree && (
          <Button
            variant={isFree ? "outline" : "default"}
            className={cn(
              "w-1/2 4xl:h-14 4xl:text-lg",
              !isFree ? "bg-foreground hover:bg-foreground/90" : "w-full"
            )}
          >
            {buttonText ?? (isFree ? "Start for free" : "Get started")}
          </Button>
        )}
        <CardDescription className="text-foreground">
          {!isFree && (
            <p className="font-semibold mb-3 text-lg 4xl:text-2xl">
              Everything in free plus:
            </p>
          )}
          <ul className="flex flex-col gap-2 4xl:gap-4 4xl:text-xl">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
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
