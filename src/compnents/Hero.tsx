// components/Hero.tsx
"use client";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-between"
      style={{
        backgroundImage: "url('/lake-view.jpeg')", 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Escape to Serenity
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl drop-shadow-md">
          Nestled by the tranquil waters of Harangi, Elite Cottages offers cozy lakeside Cottage and tent stays experiences in the heart of Madikeri's breathtaking nature.
        </p>
        <a
          href="#contact"
          className="bg-[#52796f] hover:bg-[#395e4c] text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300"
        >
          Book Your Stay
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 flex justify-center w-full animate-bounce">
        <a href="#about">
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
