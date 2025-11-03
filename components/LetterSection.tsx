
import React, { useState } from 'react';
import { letterContent } from '../constants';
import { EnvelopeIcon, EnvelopeOpenIcon } from './Icons';

const LetterSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="letter" className="py-20 px-6 bg-[#F8F5FF] reveal">
      <div className="max-w-3xl mx-auto text-center">
        {!isOpen ? (
          <div 
            className="cursor-pointer group"
            onClick={() => setIsOpen(true)}
          >
            <EnvelopeIcon className="w-24 h-24 mx-auto text-[#6B46C1] group-hover:scale-110 transition-transform duration-300" />
            <p className="mt-4 text-2xl font-playfair text-[#3B3054]">Una carta solo para ti</p>
            <p className="text-lg text-gray-500">(Haz clic para abrir)</p>
          </div>
        ) : (
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-2xl text-left animate-compliment-pop">
            <div className="flex justify-between items-center mb-6">
                <h2 className="font-playfair text-3xl text-[#6B46C1]">{letterContent.title}</h2>
                <EnvelopeOpenIcon className="w-12 h-12 text-[#9F7AEA]" />
            </div>
            {letterContent.paragraphs.map((p, index) => (
              <p key={index} className="mb-4 text-lg leading-relaxed text-[#3B3054]">
                {p}
              </p>
            ))}
            <p className="mt-8 font-dancing text-2xl text-right text-[#3B3054]">
              {letterContent.signature} 💖
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LetterSection;