// components/Accommodation.tsx
'use client'; // Ensure this is treated as a client-side component

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Image from 'next/image'; // For optimized images

const Accommodation = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  return (
    <section id="accommodation" className="py-16 bg-[#fdfaf6]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-[#2f3e46] mb-10">
          Choose Your Perfect Stay
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Whether you prefer the comfort of a cozy cottage or the adventurous spirit of camping by the lake, we have the perfect stay for you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cottage Stay */}
          <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-xl">
            <Image
              src="/cottage.jpg" // Replace with your cottage image
              alt="Cottage Stay"
              width={500}
              height={350}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-[#2f3e46] mb-4">Cottage Stay</h3>
            <p className="text-lg text-gray-700 mb-4">
              Relax and unwind in our comfortable cottages, surrounded by nature’s beauty. Perfect for families, couples, or anyone looking to escape the hustle and bustle.
            </p>
            <a
              href="#contact"
              className="bg-[#52796f] hover:bg-[#395e4c] text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300"
            >
              Book Cottage
            </a>
          </div>

          {/* Tent Stay */}
          <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-6 rounded-lg shadow-xl">
            <Image
              src="/tent.jpg" // Replace with your tent image
              alt="Tent Stay"
              width={500}
              height={350}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-[#2f3e46] mb-4">Tent Stay by the Lake</h3>
            <p className="text-lg text-gray-700 mb-4">
              Experience the great outdoors with our simple, cozy tents by the lake. Wake up to the sounds of nature and enjoy a peaceful, rustic camping experience.
            </p>
            <a
              href="#contact"
              className="bg-[#52796f] hover:bg-[#395e4c] text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300"
            >
              Book Tent Stay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
