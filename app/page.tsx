import Features from "@/components/home/features";
import Footer from "@/components/home/footer";
import FreeServiceCard from "@/components/home/free-servec";
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import QuranShowcase from "@/components/home/quranshowcase";

export default function Home() {
  return (
    <main dir="rtl" lang="ar">
      <Header />
      <Hero />
      <Features />
      <QuranShowcase />
      <FreeServiceCard />
      <Footer />
    </main>
  );
}