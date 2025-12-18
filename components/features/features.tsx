import { FeatureCardProps } from "@/types/components/feature";
import { AudioLines, NotebookPen, Sparkle } from "lucide-react";
import FeatureCard from "./feature-card";
import ToolFeature from "./tool-feature";
import TranscriptionFeature from "./transcription-feature";
export default function Features() {
  const features: FeatureCardProps[] = [
    {
      title: "Record your calls with ease",
      description:
        "Crystal-clear audio capture with automatic transcription. Never worry about missing details again.",
      icon: AudioLines,
    },
    {
      title: "Take notes as you talk",
      description:
        "Add highlights, action items, and reminders without interrupting the flow of conversation.",
      icon: NotebookPen,
    },
    {
      title: "Find any call in seconds",
      description:
        "Search transcripts, replay key moments, and export notes to your team—all in seconds.",
      icon: Sparkle,
    },
  ];

  return (
    <div className="flex flex-col gap-8 items-center justify-center p-4">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-aleo text-center">
        One app for all your conversations
      </h1>
      <p className="text-sm md:text-base lg:text-lg text-center max-w-2xl">
        Whether it&apos;s client meetings, interviews, or team calls—capture,
        organize, and review every conversation in one place.
      </p>
      <section className="flex flex-wrap gap-4 items-center justify-center">
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </section>
      <ToolFeature />
      <TranscriptionFeature />
    </div>
  );
}
