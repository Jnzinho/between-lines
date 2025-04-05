import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowToPlay } from "@/components/landing/HowToPlay";
import { Testimonials } from "@/components/landing/Testimonials";
import { CallToAction } from "@/components/landing/CallToAction";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f6f2] scroll-smooth">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <Features />
        <HowToPlay />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
