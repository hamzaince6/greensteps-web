import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Screenshots } from "@/components/Screenshots";
import { CTA } from "@/components/CTA";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <HowItWorks />
        <Features />
        <CTA />
        <Screenshots />
      </main>
    </>
  );
}
