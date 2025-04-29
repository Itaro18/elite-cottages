import Image from "next/image";
import Navbar from "@/compnents/Navbar";
import Hero from "@/compnents/Hero";
import About from "@/compnents/About";
import Accommodation from "@/compnents/Accomodation";
import Amenities from "@/compnents/Amenities";
import Gallery from "@/compnents/Gallery";
import Location from "@/compnents/Location";
import Testimonials from "@/compnents/Testmonials";
import ContactFooter from "@/compnents/Footer";

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
