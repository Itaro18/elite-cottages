import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactFooter = () => {
  return (
    <footer id="contact" className="bg-[#52796f] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold mb-4">Contact Us Now</h2>
            <p className="text-lg mb-8">
              Have any questions or want to make a reservation? We&apos;re here to help!
            </p>

            {/* Use flex-col and center the phone numbers in small screens */}
            <div className="flex flex-col items-center sm:items-start space-y-6">
              <a
                href="tel:+911234567890"
                className="text-xl font-medium hover:underline"
              >
                📞 +91 76766 63778
              </a>
              <a
                href="tel:+919876543210"
                className="text-xl font-medium hover:underline"
              >
                📞 +91 74117 25246
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-6 mb-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl hover:text-[#3b5998]" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-3xl hover:text-[#00acee]" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl hover:text-[#C13584]" />
              </a>
            </div>

            <p className="text-sm">
              © {new Date().getFullYear()} Elite Cottages, All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
