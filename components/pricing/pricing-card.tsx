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
          "bg-gradient-to-tl from-transparent to-primary/10 border border-primary/20 min-h-86 4xl:min-h-120",
        className
      )}
    >
      <CardHeader>
        <div className="flex flex-col gap-4 w-full 4xl:gap-8">
          <Badge
            variant="outline"
            className="w-fit bg-background 4xl:text-lg 4xl:px-6 4xl:py-4"
          >
            {slug.charAt(0).toUpperCase() + slug.slice(1)}
          </Badge>
          <CardTitle className="text-2xl min-w-40 4xl:text-4xl">
            ${price} / month
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent
        className="flex flex-col gap-4 w-full"
      >
        <Button
          variant={isFree ? "outline" : "default"}
          className={cn(
            "w-full 4xl:h-14 4xl:text-lg",
            !isFree ? "bg-foreground hover:bg-foreground/90" : "w-full"
          )}
        >
          {buttonText ?? (isFree ? "Start for free" : "Get started")}
        </Button>
        <CardDescription className="text-foreground">
          {!isFree && (
            <p className="font-semibold mb-3 text-lg 4xl:text-2xl">
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
