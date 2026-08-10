import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { Capabilities } from "@/components/home/Capabilities";
import { AssuranceNarrative } from "@/components/home/AssuranceNarrative";
import { Authority } from "@/components/home/Authority";
import { AcademyWaitlist } from "@/components/home/AcademyWaitlist";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[60] rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background focus:not-sr-only focus:fixed focus:outline-2 focus:outline-offset-2 focus:outline-foreground"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <CompanyIntro />
        <Capabilities />
        <AssuranceNarrative />
        <Authority />
        <AcademyWaitlist />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
