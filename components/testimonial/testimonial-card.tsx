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
    <Card className={cn("flex flex-col h-full border border-border ring-0 shadow-none", className)}>
      {logo && (
        <CardHeader className="pb-4">
          <Image
            src={logo}
            alt={logo}
            width={100}
            height={100}
            className="invert dark:invert-0 4xl:w-48"
          />
        </CardHeader>
      )}
      <CardContent className="flex-1">
        <p className="text-lg leading-relaxed 4xl:text-2xl">{quote}</p>
      </CardContent>
      <CardFooter className="pt-4 border-t-0">
        <div className="flex items-center gap-3">
          <Avatar className="4xl:size-20">
            <AvatarImage src={avatarSrc} alt={author} className="4xl:w-20 4xl:h-20" />
            <AvatarFallback className="4xl:text-2xl">{author[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-base font-medium text-foreground 4xl:text-2xl">{author}</p>
            <p className="text-sm text-muted-foreground 4xl:text-2xl">{role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
