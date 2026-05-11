import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Metrics from "@/components/sections/metrics";
import Problem from "@/components/sections/problem";
import Capabilities from "@/components/sections/capabilities";
import Clients from "@/components/sections/clients";
import Process from "@/components/sections/process";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Metrics />
      <Problem />
      <Capabilities />
      <Clients />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
