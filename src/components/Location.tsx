import { FaMapMarkerAlt, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa'; // Importing icons

const Location = () => {
  return (
    <section id="location" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Location Title */}
        <h2 className="text-3xl font-extrabold mb-16">Location</h2>

        {/* Flex Container for Two Sections Side by Side */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Location Card with Map and Contact */}
          <div className="flex-1 max-w-3xl bg-white rounded-lg shadow-xl p-8">
            {/* Interactive Map (Placeholder for actual map integration) */}
            <div className="rounded-lg overflow-hidden mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12044.3911210977!2d75.73765929465817!3d12.379102494336975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae5b4c8a7a07f1%3A0x5798e2875d7eb2bc!2sHarangi%20Dam!5e0!3m2!1sen!2sin!4v1683464167166!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Information */}
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                {/* Map Pin Icon */}
                <div className="w-10 h-10 flex items-center justify-center bg-[#52796f] rounded-full mb-4 sm:mb-0">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <p className="text-xl font-medium text-left">Elite Cottages, Near Harangi Dam, Madikeri, Karnataka</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                {/* Phone Icon */}
                <div className="w-10 h-10 flex items-center justify-center bg-[#52796f] rounded-full mb-4 sm:mb-0">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>
                <p className="text-xl font-medium text-left">+91 76766 63778</p>
              </div>
            </div>
          </div>

          {/* The Perfect Setting Section */}
          <div className="flex-1 max-w-3xl bg-white rounded-lg shadow-xl p-8">
            {/* The Perfect Setting Heading */}
            <h3 className="text-2xl font-semibold mb-4">The Perfect Setting</h3>
            {/* Description for Location */}
            <p className="text-lg text-gray-700 my-12 text-left">
              Elite Cottages is strategically located near the magnificent Harangi Dam in Madikeri.
              Surrounded by lush greenery and offering spectacular views of the water, our homestay is the perfect retreat for nature lovers and adventure seekers alike.
            </p>

            {/* Nearby Attractions List */}
            <ul className="text-lg text-gray-700 space-y-3 text-left">
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-[#52796f]" />
                <span>Harangi Dam (2 km)</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-[#52796f]" />
                <span>Dubare Elephant Camp (15 km)</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-[#52796f]" />
                <span>Abbey Falls (20 km)</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-[#52796f]" />
                <span>Raja's Seat (22 km)</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-[#52796f]" />
                <span>Madikeri Fort (25 km)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
