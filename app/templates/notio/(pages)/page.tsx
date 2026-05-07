import Beam from "../_components/beam";
import Hero from "../_components/call-to-action/hero";
import Features from "../_components/features/features";
import Footer from "../_components/footer";
import LogoCloud from "@/blocks/logo-cloud";
import Navbar from "../_components/navbar";
import Pricing from "@/blocks/pricing/pricing";
import Stats from "../_components/stats";
import Team from "@/blocks/team-member/team";
import Testimonial from "@/blocks/testimonial/testimonial";

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
