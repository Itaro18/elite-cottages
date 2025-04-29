// components/About.tsx
'use client'; // Ensure this is treated as a client-side component

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Image from 'next/image'; // For optimized images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'; // FontAwesome icons

const About = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  return (
    <section id="about" className="py-16 bg-[#fdfaf6]">
      {/* First Section - Left Text / Right Image */}
      <div data-aos="fade-up" className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 space-y-10 lg:space-y-0 lg:space-x-8 mb-10">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-extrabold text-[#2f3e46] mb-4 flex items-center justify-center lg:justify-start">
            <FontAwesomeIcon icon={faArrowRight} className="w-6 h-6 text-[#52796f] mr-2" />
            A Peaceful Retreat
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Located by the serene waters of Harangi Dam, Elie Cottages offers an idyllic getaway for nature lovers. Our cozy cottages and luxury tents blend comfort with natural beauty.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/cottage-view.jpg" // Replace with your image path
            alt="Cottage view"
            width={800} // Set the width of the image
            height={600} // Set the height of the image
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Second Section - Right Text / Left Image */}
      <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col lg:flex-row-reverse items-center max-w-7xl mx-auto px-4 space-y-10 lg:space-y-0 lg:space-x-8">
        <div className="lg:w-1/2 text-center lg:text-right">
          <h2 className="text-3xl font-extrabold text-[#2f3e46] mb-4 flex items-center justify-center lg:justify-end">
            <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6 text-[#52796f] mr-2" />
            Experience Nature
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our homestay is designed to offer the perfect balance of adventure and relaxation. Whether you’re looking to explore the outdoors or simply unwind, there’s something for everyone.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/tent-view.jpg" // Replace with your image path
            alt="Tent view"
            width={800} // Set the width of the image
            height={600} // Set the height of the image
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div data-aos="fade-up" data-aos-delay="400" className="text-center mt-12">
        <p className="text-xl text-[#2f3e46] font-semibold mb-4">
          Ready to escape to nature?
        </p>
        <a
          href="#contact"
          className="bg-[#52796f] hover:bg-[#395e4c] text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300"
        >
          Book Your Stay
        </a>
      </div>
    </section>
  );
};

export default About;
