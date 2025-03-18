import Cta from "@/components/Cta";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import Partnership from "@/components/Partnership";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="pt-16">
      <Header/>
      <Hero/>
      <HowWeWork/>
      <Services/>
      <Gallery/>
      <Testimonials/>
      <Partnership/>
      <Cta/> 
      <Footer/>
    </div>
  );
}
