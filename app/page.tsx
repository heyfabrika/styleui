import Hero from "@/components/call-to-action/hero";
import Navbar from "@/components/navbar";

export default function Page() {
return (
  <div className="flex flex-col gap-4">
    <Navbar/>
    <Hero/>
  </div>
);
}