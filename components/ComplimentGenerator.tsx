
import React, { useState, useCallback } from 'react';
import { compliments } from '../constants';

const ComplimentGenerator: React.FC = () => {
  const [currentCompliment, setCurrentCompliment] = useState<string>(compliments[0]);
  const [key, setKey] = useState(0);

  const showNewCompliment = useCallback(() => {
    let newCompliment = currentCompliment;
    while (newCompliment === currentCompliment) {
      newCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    }
    setCurrentCompliment(newCompliment);
    setKey(prevKey => prevKey + 1);
  }, [currentCompliment]);

  return (
    <section id="compliments" className="py-20 px-6 bg-white reveal">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <div className="relative w-full min-h-[150px] flex items-center justify-center p-4">
          <p key={key} className="font-playfair text-3xl md:text-4xl text-[#3B3054] animate-compliment-pop">
            “{currentCompliment}”
          </p>
        </div>
        <button
          onClick={showNewCompliment}
          className="mt-8 px-10 py-4 bg-[#FFB6C1] text-[#3B3054] font-bold text-lg rounded-full shadow-lg hover:bg-pink-300 transition-all duration-300 transform hover:scale-105"
        >
          Hazme sonreír
        </button>
      </div>
    </section>
  );
};

export default ComplimentGenerator;