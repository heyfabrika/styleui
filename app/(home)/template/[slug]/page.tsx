import TemplateRenderer from "@/components/renderers/template-renderer";
import { notFound } from "next/navigation";

const templates: Record<
  string,
  { name: string; preview: string; command: string; description: string }
> = {
  notio: {
    name: "Notio",
    description:
      "A modern landing page template with beautiful sections including hero, features, pricing, and testimonials.",
    preview: "/templates/notio",
    command: "https://styleui.dev/r/notio.json",
  },
  axis: {
    name: "Axis",
    description: "A modern CRM template for consultants and small teams.",
    preview: "/templates/axis",
    command: "https://styleui.dev/r/axis.json",
  },
};

type Params = { slug: string };

export async function generateStaticParams() {
  return Object.keys(templates).map((slug) => ({ slug }));
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const template = templates[slug];

  if (!template) {
    notFound();
  }

  return (
    <div className="py-16">
      <div className="mb-10 max-w-xl">
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          {template.name}
        </h1>
        <p className="text-muted-foreground">{template.description}</p>
      </div>

      <TemplateRenderer
        src={template.preview}
        name={template.name}
        command={template.command}
      />
    </div>
  );
}
