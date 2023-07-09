import AboutUs from "@/components/Fragments/AboutUs";
import Footer from "@/components/Fragments/Footer";
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
      <Footer />
    </main>
  );
}
