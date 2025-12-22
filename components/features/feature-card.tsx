import { FeatureCardProps } from "@/types/components/feature";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import BlurredOrb from "../blurred-orb";

export default function FeatureCard({
  feature,
}: {
  feature: FeatureCardProps;
}) {
  return (
    <Card key={feature.title} className="bg-background max-w-sm min-h-96 4xl:max-w-xl 4xl:min-h-120 4xl:gap-8">
      <div className="flex items-center justify-center p-16 relative">
        <feature.icon size={32} className="4xl:size-12" />
        <BlurredOrb className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl h-16 w-16 opacity-60 4xl:h-20 4xl:w-20 4xl:blur-2xl" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl mx-auto 4xl:text-4xl">{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center opacity-80 4xl:text-2xl">
          {feature.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
