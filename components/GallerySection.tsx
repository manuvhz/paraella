import React, { useState, useEffect, useCallback } from 'react';
import { galleryImages } from '../constants';
import type { GalleryImage } from '../types';
import { ArrowLeftIcon, ArrowRightIcon } from './Icons';

const Lightbox: React.FC<{ 
  item: GalleryImage; 
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}> = ({ item, onClose, onNext, onPrevious }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNext();
      if (event.key === 'ArrowLeft') onPrevious();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose, onNext, onPrevious]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl p-4 w-full max-w-4xl max-h-[90vh] relative animate-compliment-pop flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-grow flex items-center justify-center">
          <img src={item.link} alt={item.title} className="max-w-full max-h-[75vh] object-contain rounded-md" />
        </div>
        <p className="text-center mt-4 text-lg text-[#3B3054]">{item.caption}</p>
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-[#6B46C1] text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-lg z-10"
          aria-label="Cerrar"
        >
          &times;
        </button>
        <button
          onClick={onPrevious}
          className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 transition-colors duration-300"
          aria-label="Anterior"
        >
          <ArrowLeftIcon className="w-8 h-8 text-[#3B3054]" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 transition-colors duration-300"
          aria-label="Siguiente"
        >
          <ArrowRightIcon className="w-8 h-8 text-[#3B3054]" />
        </button>
      </div>
    </div>
  );
};


const GallerySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  
  const handleOpen = (index: number) => setCurrentIndex(index);
  const handleClose = () => setCurrentIndex(null);

  const handleNext = useCallback(() => {
    if (currentIndex !== null) {
      setCurrentIndex((prevIndex) => (prevIndex! + 1) % galleryImages.length);
    }
  }, [currentIndex]);

  const handlePrevious = useCallback(() => {
    if (currentIndex !== null) {
      setCurrentIndex((prevIndex) => (prevIndex! - 1 + galleryImages.length) % galleryImages.length);
    }
  }, [currentIndex]);

  const selectedItem = currentIndex !== null ? galleryImages[currentIndex] : null;

  return (
    <section id="gallery" className="py-20 px-6 bg-[#F8F5FF] reveal">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-4xl font-bold text-center mb-12">Tu Esencia en Imágenes</h2>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {galleryImages.map((item, index) => (
            <div
              key={item.id}
              className="mb-4 break-inside-avoid group relative overflow-hidden rounded-lg shadow-lg cursor-pointer bg-black"
              onClick={() => handleOpen(index)}
            >
              <img
                src={item.link}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end p-4">
                <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedItem && (
        <Lightbox 
            item={selectedItem} 
            onClose={handleClose}
            onNext={handleNext}
            onPrevious={handlePrevious}
        />
      )}
    </section>
  );
};

export default GallerySection;