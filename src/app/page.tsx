
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Accommodation from "@/components/Accomodation";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Testimonials from "@/components/Testmonials";
import ContactFooter from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Accommodation/>
      <Amenities/>
      <Gallery/>
      <Location/>
      <Testimonials/>
      <ContactFooter/>
    </div>
  );
}
