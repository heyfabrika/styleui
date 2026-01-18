import Beam from "@/app/templates/notio/_components/beam";
import Hero from "@/app/templates/notio/_components/call-to-action/hero";
import Features from "@/app/templates/notio/_components/features/features";
import Footer from "@/app/templates/notio/_components/footer";
import LogoCloud from "@/components/logo-cloud";
import Navbar from "@/app/templates/notio/_components/navbar";
import Pricing from "@/components/pricing/pricing";
import Stats from "@/app/templates/notio/_components/stats";
import Team from "@/components/team-member/team";
import Testimonial from "@/components/testimonial/testimonial";

export default function Page() {
    return (
        <div className="relative flex flex-col gap-8 overflow-hidden p-3 md:p-2">
            <Navbar />
            <Hero />
            <LogoCloud />
            <Beam>
                <Features />
            </Beam>
            <Stats />
            <Team />
            <Testimonial />
            <Pricing />
            <Footer />
        </div>
    );
}
