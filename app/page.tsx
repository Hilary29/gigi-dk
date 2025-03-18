import Cta from "@/components/Cta";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import Partnership from "@/components/Partnership";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div>
      <Hero/>
      <HowWeWork/>
      <Services/>
      <Gallery/>
      <Testimonials/>
      <Partnership/>
      <Cta/> 
    </div>
  );
}
