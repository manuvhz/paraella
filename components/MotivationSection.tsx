
import React from 'react';
import { motivationalNotes } from '../constants';

const MotivationSection: React.FC = () => {
  const rotations = ['-rotate-2', 'rotate-1', 'rotate-3', '-rotate-1', 'rotate-2', '-rotate-3'];

  return (
    <section id="motivation" className="py-20 px-6 bg-[#F8F5FF] overflow-hidden reveal">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-playfair text-4xl font-bold mb-16">Recordatorios para mi Amor</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {motivationalNotes.map((note, index) => (
            <div
              key={index}
              className={`p-6 bg-white shadow-xl rounded-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-0 ${rotations[index % rotations.length]}`}
            >
              <p className="text-lg leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotivationSection;