import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ParticleBackground } from "@/components/ParticleBackground";
import { PortfolioMain } from "@/components/PortfolioMain";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <PortfolioMain />
      <Footer />
      <ScrollToTop />
    </>
  );
}
