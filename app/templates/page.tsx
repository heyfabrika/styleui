import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/common/navbar";

const Page = () => {
  const templates = [
    {
      name: "Notio",
      description: "A modern landing page template with beautiful sections including hero, features, pricing, and testimonials.",
      href: "/templates/notio",
      preview: "/templates/notio",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen gap-4 max-w-7xl mx-auto w-full">
      <Navbar showGithubInfo={true} />
      <div className="flex flex-col min-h-[calc(100vh-200px)] py-12 px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Templates
          </h1>
          <p className="text-lg text-muted-foreground">
            Find the best templates for your next project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
          {templates.map((template) => (
            <Card key={template.name} className="h-full transition-all hover:shadow-lg group overflow-hidden flex flex-col pt-0">
              <div className="w-full h-64 bg-muted border-b relative overflow-hidden rounded-t-xl">
                <iframe
                  src={template.preview}
                  className="w-full h-full border-0"
                  style={{
                    pointerEvents: 'none',
                    transform: 'scale(0.3)',
                    transformOrigin: 'top left',
                    width: '333.33%',
                    height: '333.33%',
                  }}
                  title={`${template.name} Preview`}
                  loading="lazy"
                />
              </div>

              <CardHeader>
                <CardTitle>{template.name}</CardTitle>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>

              <CardContent className="mt-auto">
                <Link href={template.href}>
                  <Button variant="ghost" className="w-full justify-between group-hover:text-primary">
                    View Template
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
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