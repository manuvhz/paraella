import React from 'react';
import FloatingParticles from './FloatingParticles';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-t from-[#9F7AEA]/20 to-[#F8F5FF] py-20 px-6 text-center overflow-hidden reveal">
      <FloatingParticles />
      <div className="max-w-3xl mx-auto z-10 relative">
        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-[#6B46C1]">
          Eres mi orgullo, mi inspiración y mi amor.
        </h2>
        <h3 className="font-playfair text-2xl md:text-4xl font-bold text-[#6B46C1] mt-2">
          Andrea, nunca olvides lo increíble que eres.
        </h3>
        <p className="mt-6 text-lg md:text-xl">
          Te amo sin medida, sin prisa, y con toda el alma.
        </p>
        <p className="font-dancing text-2xl mt-10">
          Con amor, de quien siempre te admira 💖
        </p>
        <button
          onClick={scrollToTop}
          className="mt-12 px-6 py-2 bg-white text-[#6B46C1] font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          Volver arriba
        </button>
      </div>
    </footer>
  );
};

export default Footer;