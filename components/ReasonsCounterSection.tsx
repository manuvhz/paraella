
import React, { useState, useEffect } from 'react';
import { reasonsToLove } from '../constants';

const ReasonsCounterSection: React.FC = () => {
  const [count, setCount] = useState(0);
  const [reasonIndex, setReasonIndex] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsCounting(true);
        }
      },
      { threshold: 0.5 }
    );

    const target = document.querySelector('#reasons-counter');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isCounting) return;

    if (count < 365) {
      const timeout = setTimeout(() => {
        setCount(prevCount => Math.min(prevCount + Math.ceil(Math.random() * 5), 365));
      }, 5);
      return () => clearTimeout(timeout);
    }
  }, [count, isCounting]);

  useEffect(() => {
    const interval = setInterval(() => {
      setReasonIndex(prevIndex => (prevIndex + 1) % reasonsToLove.length);
    }, 4000); // Change reason every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reasons-counter" className="py-20 px-6 bg-white reveal">
      <div className="max-w-3xl mx-auto text-center">
        <div className="font-playfair text-8xl font-bold text-[#6B46C1]">
          {count}{count === 365 && '+'}
        </div>
        <h2 className="font-playfair text-3xl mt-2 mb-8">Razones por las que te amo</h2>
        <div className="relative min-h-[100px] flex items-center justify-center">
          {reasonsToLove.map((reason, index) => (
             <p
                key={index}
                className={`text-xl md:text-2xl text-[#3B3054] transition-opacity duration-1000 absolute ${index === reasonIndex ? 'opacity-100' : 'opacity-0'}`}
             >
                “{reason}”
             </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsCounterSection;
