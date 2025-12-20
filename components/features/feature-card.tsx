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
    <Card key={feature.title} className="bg-background max-w-sm min-h-96">
      <div className="flex items-center justify-center p-16 relative">
        <feature.icon size={32} />
        <BlurredOrb className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl h-16 w-16 opacity-60" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl mx-auto">{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-lg md:text-base">
          {feature.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
