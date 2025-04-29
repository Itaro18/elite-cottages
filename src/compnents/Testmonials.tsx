import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-8">What Our Guests Are Saying</h2>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between">
            <div className="flex items-center justify-start mb-4">
              {/* Circular Icon for DP */}
              <div className="w-12 h-12 rounded-full bg-[#52796f] text-white flex items-center justify-center text-xl font-semibold">
                JD
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold">John Doe</p>
                <p className="text-sm text-gray-500 text-left">Mumbai, India</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4 flex-grow">“Our stay at Elite Cottages was absolutely amazing! The serene atmosphere and stunning views made it a perfect getaway.”</p>
            <div className="flex justify-center mt-auto">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-[#52796f]" />
              ))}
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between">
            <div className="flex items-center justify-start mb-4">
              {/* Circular Icon for DP */}
              <div className="w-12 h-12 rounded-full bg-[#52796f] text-white flex items-center justify-center text-xl font-semibold">
                JS
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold">Jane Smith</p>
                <p className="text-sm text-gray-500 text-left">Bangalore, India</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4 flex-grow">“The best homestay experience I’ve had! The cottages are beautiful, and the food was incredible. Highly recommend.”</p>
            <div className="flex justify-center mt-auto">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-[#52796f]" />
              ))}
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between">
            <div className="flex items-center justify-start mb-4">
              {/* Circular Icon for DP */}
              <div className="w-12 h-12 rounded-full bg-[#52796f] text-white flex items-center justify-center text-xl font-semibold">
                SK
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold">Samuel King</p>
                <p className="text-sm text-gray-500 text-left">London, UK</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4 flex-grow">“A perfect retreat for peace and relaxation. The location is stunning, and the hosts were very welcoming.”</p>
            <div className="flex justify-center mt-auto">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-[#52796f]" />
              ))}
            </div>
          </div>
        </div>

        {/* Second row with centered items and no stretching */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {/* Testimonial 4 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between max-w-md w-full">
            <div className="flex items-center justify-start mb-4">
              {/* Circular Icon for DP */}
              <div className="w-12 h-12 rounded-full bg-[#52796f] text-white flex items-center justify-center text-xl font-semibold">
                MK
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold">Michael Lee</p>
                <p className="text-sm text-gray-500 text-left">New York, USA</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4 flex-grow">“A wonderful experience! The ambiance and hospitality were truly exceptional. Would love to visit again.”</p>
            <div className="flex justify-center mt-auto">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-[#52796f]" />
              ))}
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between max-w-md w-full">
            <div className="flex items-center justify-start mb-4">
              {/* Circular Icon for DP */}
              <div className="w-12 h-12 rounded-full bg-[#52796f] text-white flex items-center justify-center text-xl font-semibold">
                AL
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold">Alice White</p>
                <p className="text-sm text-gray-500 text-left">Sydney, Australia</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4 flex-grow">“A peaceful and rejuvenating stay. The cottages are beautifully designed, and the surroundings are just breathtaking!”</p>
            <div className="flex justify-center mt-auto">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-[#52796f]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
