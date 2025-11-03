
import React from 'react';
import { promises } from '../constants';

const PromisesSection: React.FC = () => {
  return (
    <section id="promises" className="py-20 px-6 bg-[#F8F5FF] reveal">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-playfair text-4xl font-bold mb-12">Promesas para Nuestro Futuro</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 card-glow"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {promise.icon}
              <h3 className="font-playfair text-2xl font-semibold text-[#6B46C1] mb-2">{promise.title}</h3>
              <p className="text-center">{promise.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromisesSection;
