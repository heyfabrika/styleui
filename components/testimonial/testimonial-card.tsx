import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TestimonialProps } from "@/types/components/testimonial";
import Image from "next/image";

export default function TestimonialCard({
  logo,
  quote,
  author,
  role,
  avatarSrc,
  className,
}: TestimonialProps) {
  return (
    <Card className={cn("flex flex-col h-full", className)}>
      {logo && (
        <CardHeader className="pb-4">
          <Image
            src={logo}
            alt={logo}
            width={100}
            height={100}
            className="grayscale dark:invert-0"
          />
        </CardHeader>
      )}
      <CardContent className="flex-1">
        <p className="text-muted-foreground leading-relaxed">{quote}</p>
      </CardContent>
      <CardFooter className="pt-4 border-t-0">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={avatarSrc} alt={author} />
            <AvatarFallback>{author[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-foreground">{author}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
