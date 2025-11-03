import React from 'react';
import FloatingParticles from './FloatingParticles';
import { ChevronDownIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <header id="hero" className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#9F7AEA]/20 to-[#F8F5FF] p-6 text-center overflow-hidden">
      <FloatingParticles />
      <div className="z-10 animate-float reveal">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-[#6B46C1]">
          Para ti, Andrea. 💖
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-[#3B3054] max-w-2xl mx-auto">
          Eres la maestra, la mujer y el amor que ilumina mis días.
        </p>
      </div>
      <div className="absolute bottom-10 z-10">
          <a href="#admiration" aria-label="Scroll down">
              <ChevronDownIcon className="w-10 h-10 text-[#6B46C1] opacity-50 animate-bounce-slow" />
          </a>
      </div>
    </header>
  );
};

export default Hero;