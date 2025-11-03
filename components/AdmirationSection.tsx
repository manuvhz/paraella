
import React from 'react';
import { admirationCards } from '../constants';

const AdmirationSection: React.FC = () => {
  return (
    <section id="admiration" className="py-20 px-6 bg-white reveal">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-playfair text-4xl font-bold mb-12">Lo que Admiro de Ti</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {admirationCards.map((card, index) => (
            <div
              key={card.title}
              className="flex flex-col items-center p-8 bg-[#F8F5FF] rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 card-glow"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {card.icon}
              <h3 className="font-playfair text-2xl font-semibold text-[#6B46C1] mb-2">{card.title}</h3>
              <p className="text-center">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmirationSection;