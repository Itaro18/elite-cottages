import Image from 'next/image';

const Gallery = () => {
  const images = [
    { src: '/relax.jpeg', alt: 'Image 1', text: 'Relax by the Lake' },
    { src: '/image2.jpg', alt: 'Image 2', text: 'Cottage View' },
    { src: '/image3.jpg', alt: 'Image 3', text: 'Cozy Tents' },
    { src: '/campfire.jpeg', alt: 'Image 4', text: 'Campfire Nights' },
    { src: '/image5.jpg', alt: 'Image 5', text: 'Morning Views' },
    { src: '/image6.jpg', alt: 'Image 6', text: 'Beautiful Sunset' },
  ];

  return (
    <section id="gallery" className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Starting Text */}
        <h2 className="text-3xl font-extrabold mb-6">Gallery</h2>
        <p className="text-lg text-gray-700 mb-16">
          Explore our charming cottages and the stunning natural surroundings of Elite Cottages in Madikeri.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={800}
                height={533}
                className="rounded-xl transition-transform duration-300 group-hover:scale-105" // Added rounded-xl for more rounded corners
              />
              {/* Soft Black Overlay with Rounded Corners */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl">
                {image.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
