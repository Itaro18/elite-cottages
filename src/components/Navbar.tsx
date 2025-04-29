// components/Navbar.tsx
"use client";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Accommodations", href: "#accommodations" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Now", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#fdfaf6] shadow-md">
      <div className="flex items-center justify-between flex-wrap p-4 max-w-7xl mx-auto">
        <div className="flex items-center flex-shrink-0 text-[#2f3e46] mr-6">
          <span className="font-bold text-2xl tracking-tight">Elite Cottages</span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-[#2f3e46] border-gray-400 hover:text-[#52796f] hover:border-[#52796f]"
          >
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
              <title>Menu</title>
              <path d="M0 3h20v2H0z M0 9h20v2H0z M0 15h20v2H0z" />
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
          <div className="text-sm lg:flex-grow">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block mt-4 lg:inline-block lg:mt-0 text-[#2f3e46] hover:text-[#52796f] mr-8 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
