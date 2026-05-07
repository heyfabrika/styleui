"use client";
import { FallingPattern } from "@/components/background/falling-pattern";
import Navbar from "@/components/common/navbar";
import TemplateRenderer from "@/components/renderers/template-renderer";
import { useTheme } from "next-themes";

const Page = () => {
  const templates = [
    {
      name: "Notio",
      description: "A modern landing page template with beautiful sections including hero, features, pricing, and testimonials.",
      href: "/templates/notio",
      preview: "/templates/notio",
      command: "https://styleui.dev/r/notio.json",
    },
  ];

  const { resolvedTheme } = useTheme();
  const bgColor = resolvedTheme === "dark" ? "#000" : resolvedTheme === "light" ? "#FFF" : undefined;

  return (
    <div className="mx-auto w-full max-w-7xl">
      <Navbar showThemeSwitcher />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-210px)] py-12 px-4">
        {bgColor && <FallingPattern className="absolute h-full min-w-[calc(100vw-15px)] -z-1 dark:opacity-15" backgroundColor={bgColor} />}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4 font-serif italic">
            Launch Your Vision in Style
          </h1>
          <p className="text-lg text-muted-foreground">
            Expertly crafted layouts for your next big idea. Choose a template,
            customize the details, and ship a world-class site today.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 w-full mx-auto">
          {templates.map((template) => (
            <TemplateRenderer
            src={template.preview}
            name={template.name}
            command={template.command}
            />
          ))}
        </div>

        {templates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No templates available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;