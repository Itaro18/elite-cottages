import { FaWifi, FaFireAlt, FaTv, FaTshirt, FaHouseDamage, FaUtensils } from 'react-icons/fa';

const Amenities = () => {
  return (
    <section id="amenities" className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-left">
        <h2 className="text-3xl font-extrabold mb-4">Our Amenities</h2>
        <p className="text-lg mb-8">
          Enjoy a range of thoughtful amenities designed to make your stay comfortable and memorable at Elite Cottages.
        </p>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {/* Amenity 1 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-[#52796f] text-white rounded-full flex items-center justify-center">
              <FaWifi className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-black">Free Wi-Fi</h3>
          </div>

          {/* Amenity 2 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-[#52796f] text-white rounded-full flex items-center justify-center">
              <FaFireAlt className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-black">Campfire Area</h3>
          </div>

          {/* Amenity 3 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-[#52796f] text-white rounded-full flex items-center justify-center">
              <FaTv className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-black">Entertainment (Common TV)</h3>
          </div>

          {/* Amenity 4 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-[#52796f] text-white rounded-full flex items-center justify-center">
              <FaTshirt className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-black">Washing Machine</h3>
          </div>

          {/* Amenity 5 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-[#52796f] text-white rounded-full flex items-center justify-center">
              <FaHouseDamage className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-black">Daily Housekeeping</h3>
          </div>

          {/* Amenity 6 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-[#52796f] text-white rounded-full flex items-center justify-center">
              <FaUtensils className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-black">Awesome Food</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
