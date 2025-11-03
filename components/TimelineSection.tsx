import React from 'react';
import { timelineEvents } from '../constants';

const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-20 px-6 bg-white reveal">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-4xl font-bold text-center mb-4">Nuestra Historia</h2>
        <p className="text-center text-lg mb-16">"Cartas que no supe cuándo darte"</p>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-[#9F7AEA] bg-opacity-30 -translate-x-1/2"></div>

          {/* Timeline events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const isRightSide = index % 2 !== 0;
              return (
                <div key={index} className="relative flex items-center">
                  {/* Card container */}
                  <div className={`w-[calc(50%-2rem)] ${isRightSide ? 'ml-auto' : 'mr-auto'}`}>
                    <div className={`p-6 rounded-lg shadow-xl ${isRightSide ? 'bg-pink-100' : 'bg-[#F8F5FF]'} ${isRightSide ? 'text-left' : 'text-right'}`}>
                      <p className="text-sm font-medium text-[#6B46C1]">{event.date}</p>
                      <h3 className="my-2 font-bold text-gray-800 text-xl">{event.title}</h3>
                      <p className="text-sm leading-snug tracking-wide text-gray-900">{event.description}</p>
                      <p className="text-xs italic mt-3 text-[#3B3054] opacity-75">{event.emotion}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                    <div className="z-20 flex items-center bg-[#6B46C1] shadow-xl w-8 h-8 rounded-full animate-pulse-dot">
                      <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;