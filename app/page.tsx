import Beam from "@/components/beam";
import Hero from "@/components/call-to-action/hero";
import Features from "@/components/features/features";
import LogoCloud from "@/components/logo-cloud";
import Navbar from "@/components/navbar";
import Stats from "@/components/stats";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 overflow-hidden">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Beam>
        <Features />
      </Beam>
      <Stats />
    </div>
  );
}
