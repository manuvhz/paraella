
import React from 'react';
import { ourSong } from '../constants';
import { MusicNoteIcon } from './Icons';

const OurSongSection: React.FC = () => {
  return (
    <section id="song" className="py-20 px-6 bg-white reveal">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <MusicNoteIcon className="w-16 h-16 text-[#6B46C1] mb-4" />
        <h2 className="font-playfair text-4xl font-bold mb-2">Nuestra Canción</h2>
        <p className="text-2xl font-dancing text-[#3B3054] mb-1">"{ourSong.title}"</p>
        <p className="text-lg text-gray-500 mb-8">{ourSong.artist}</p>
        <a
          href={ourSong.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-[#FFB6C1] text-[#3B3054] font-bold text-lg rounded-full shadow-lg hover:bg-pink-300 transition-all duration-300 transform hover:scale-105"
        >
          Escuchar ahora
        </a>
      </div>
    </section>
  );
};

export default OurSongSection;
