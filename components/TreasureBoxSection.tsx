
import React, { useState, useEffect } from 'react';
import { treasures } from '../constants';
import type { Treasure } from '../types';

const StarrySky: React.FC = () => {
    const stars = Array.from({ length: 50 });
    return (
        <div className="absolute inset-0 overflow-hidden rounded-lg">
            {stars.map((_, i) => {
                const style = {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 2 + 1}px`,
                    height: `${Math.random() * 2 + 1}px`,
                    animationDelay: `${Math.random() * 4}s`,
                };
                return <div key={i} className="absolute bg-white rounded-full animate-twinkle" style={style}></div>;
            })}
        </div>
    );
};

const TreasureModal: React.FC<{ treasure: Treasure; onClose: () => void }> = ({ treasure, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-lg relative animate-compliment-pop flex flex-col items-center text-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-4">{treasure.icon}</div>
                <h3 className="font-playfair text-3xl font-bold text-[#6B46C1] mb-2">{treasure.title}</h3>
                
                <div className="my-6 w-full h-64 flex items-center justify-center bg-[#3B3054] rounded-lg relative overflow-hidden">
                    {treasure.type === 'image' && <img src={treasure.data} alt={treasure.title} className="max-w-full max-h-full object-contain" />}
                    {treasure.type === 'emoji' && (
                        <span className="text-9xl" role="img" aria-label={treasure.title}>
                            {treasure.data}
                        </span>
                    )}
                    {treasure.type === 'animation' && (
                        <>
                            <StarrySky />
                            <p className="text-white z-10 text-xl font-dancing p-4">"{treasure.data}"</p>
                        </>
                    )}
                </div>

                <p className="text-lg text-center text-[#3B3054] mb-4">{treasure.description}</p>
                <button
                    onClick={onClose}
                    className="absolute -top-4 -right-4 bg-[#6B46C1] text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-lg"
                    aria-label="Cerrar"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};


const TreasureBoxSection: React.FC = () => {
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const [selectedTreasure, setSelectedTreasure] = useState<Treasure | null>(null);

    return (
        <section id="treasures" className="py-20 px-6 bg-white reveal">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-playfair text-4xl font-bold mb-4">Nuestra Caja de Tesoros</h2>
                <p className="text-lg mb-12">Algunas cosas que guardo cerca de mi corazón.</p>

                <div 
                    className="relative w-80 h-64 mx-auto"
                    style={{ perspective: '1000px' }}
                >
                    {!isBoxOpen ? (
                        <div className="w-full h-full cursor-pointer group" onClick={() => setIsBoxOpen(true)}>
                            <div className="absolute w-full h-full bg-[#8d6e63] rounded-lg shadow-2xl transform transition-transform duration-500 group-hover:scale-105" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(0deg) rotateX(0deg)' }}>
                                <div className="absolute top-0 left-0 w-full h-2 bg-[#795548]"></div>
                                <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center">
                                    <p className="text-white font-playfair text-xl">Haz clic para abrir</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-full">
                            {/* Box Base */}
                            <div className="absolute bottom-0 w-full h-1/2 bg-[#a1887f] rounded-b-lg shadow-inner">
                                <div className="absolute inset-0 bg-black opacity-20"></div>
                            </div>
                            {/* Contents */}
                            <div className="absolute bottom-4 w-full flex justify-center items-end gap-x-8 h-1/2 animate-reveal-contents">
                                {treasures.map((treasure, index) => (
                                    <div 
                                        key={treasure.id} 
                                        className="group cursor-pointer flex flex-col items-center" 
                                        onClick={() => setSelectedTreasure(treasure)}
                                        style={{ animationDelay: `${index * 150 + 300}ms` }}
                                    >
                                        {treasure.icon}
                                        <p className="text-sm font-semibold text-amber-100 opacity-0 group-hover:opacity-100 transition-opacity">{treasure.title}</p>
                                    </div>
                                ))}
                            </div>
                             {/* Box Lid */}
                             <div className="absolute top-1/2 left-0 w-full h-1/2 bg-[#8d6e63] rounded-t-lg shadow-2xl animate-open-lid" style={{ transformOrigin: 'bottom center' }}>
                                <div className="absolute top-0 left-0 w-full h-2 bg-[#795548]"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {selectedTreasure && <TreasureModal treasure={selectedTreasure} onClose={() => setSelectedTreasure(null)} />}
        </section>
    );
};

export default TreasureBoxSection;