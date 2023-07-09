import AboutUs from "@/components/Fragments/AboutUs";
import HeroSection from "@/components/Fragments/HeroSection";
import Testimonials from "@/components/Fragments/Testimonials";
import Work from "@/components/Fragments/Work";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Work />
      <Testimonials />
    </main>
  );
}
