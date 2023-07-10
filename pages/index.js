import AboutUs from "@/components/Fragments/AboutUs";
import Footer from "@/components/Fragments/Footer";
import HeroSection from "@/components/Fragments/Hero";
import Testimonials from "@/components/Fragments/Testimonials";
import Work from "@/components/Fragments/Work";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Consult wise | Your creative digital agency</title>
      </Head>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Work />
      <Testimonials />
      <Footer />
      {/* <HeroSection />
      <AboutUs />
      <Work />
      <Testimonials />
      <Footer /> */}
    </main>
  );
}
