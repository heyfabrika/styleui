import TemplateRenderer from "@/components/renderers/template-renderer";

const templates = [
  {
    name: "Notio",
    description:
      "A modern landing page template with beautiful sections including hero, features, pricing, and testimonials.",
    href: "/template/notio",
    preview: "/templates/notio",
    previewImage: "/previews/notio.png",
    command: "https://styleui.dev/r/notio.json",
  },
  {
    name: "Axis",
    description: "A modern CRM template for consultants and small teams.",
    href: "/template/axis",
    preview: "/templates/axis",
    previewImage: "/previews/axis.png",
    command: "https://styleui.dev/r/axis.json",
  },
];

const Page = () => {
  return (
    <div className="py-16">
      <div className="mb-10 max-w-xl">
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          Templates
        </h1>
        <p className="text-muted-foreground">
          Expertly crafted layouts for your next big idea. Choose a template,
          customize the details, and ship a world-class site today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {templates.map((template) => (
          <TemplateRenderer
            key={template.name}
            src={template.preview}
            name={template.name}
            command={template.command}
            href={template.href}
            previewImage={template.previewImage}
            compact
          />
        ))}
      </div>
    </div>
  );
};

export default Page;