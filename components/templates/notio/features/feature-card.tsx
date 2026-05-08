import { FeatureCardProps } from "@/types/components/feature";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BlurredOrb from "@/components/blurred-orb";

export default function FeatureCard({
  feature,
}: {
  feature: FeatureCardProps;
}) {
  return (
    <Card
      key={feature.title}
      className="h-96 w-80 max-w-full gap-0 bg-background py-0 4xl:h-120 4xl:w-[36rem]"
    >
      <div className="relative flex h-48 shrink-0 items-center justify-center 4xl:h-60">
        <feature.icon size={32} className="4xl:size-12" />
        <BlurredOrb className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl md:blur-2xl h-12 w-12 md:h-16 md:w-16 opacity-60 4xl:h-20 4xl:w-20 4xl:blur-2xl" />
      </div>
      <CardHeader className="flex h-14 items-center justify-center px-6 py-0 4xl:h-20">
        <CardTitle className="w-full text-center text-xl leading-tight 4xl:text-4xl">
          {feature.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 items-start justify-center px-6 pb-8 pt-2 4xl:px-14 4xl:pt-4">
        <CardDescription className="w-full text-center leading-normal opacity-80 4xl:text-2xl">
          {feature.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
