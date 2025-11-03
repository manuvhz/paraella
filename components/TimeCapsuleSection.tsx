
import React, { useState } from 'react';
import { TimeCapsuleIcon } from './Icons';

const TimeCapsuleSection: React.FC = () => {
    const [dream, setDream] = useState('');
    const [isSealed, setIsSealed] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (dream.trim() === '') return; // No sellar un sueño vacío

        setIsAnimating(true);
        // La duración de la animación es de 1s
        setTimeout(() => {
            setIsSealed(true);
        }, 1000); 
    };

    return (
        <section id="time-capsule" className="py-20 px-6 bg-white reveal">
            <div className="max-w-3xl mx-auto text-center">
                {!isSealed ? (
                    <>
                        <div className={`transition-all duration-1000 ${isAnimating ? 'animate-seal' : ''}`}>
                             <TimeCapsuleIcon className={`w-24 h-24 mx-auto text-[#6B46C1] transition-transform duration-500 ${isAnimating ? 'animate-[seal-capsule_1s_ease-in-out_forwards]' : ''}`} />
                        </div>
                        <h2 className="font-playfair text-4xl font-bold mt-4 mb-4">Cápsula del Tiempo para Dos</h2>
                        <p className="text-lg mb-8">Andrea, escribe un sueño, un deseo o una promesa para nuestro futuro juntos.</p>
                        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
                            <textarea
                                value={dream}
                                onChange={(e) => setDream(e.target.value)}
                                placeholder="Un día, nosotros..."
                                className="w-full max-w-lg p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#9F7AEA] focus:border-transparent transition duration-300 bg-white"
                                rows={4}
                                aria-label="Escribe tu sueño"
                                disabled={isAnimating}
                            />
                            <button
                                type="submit"
                                disabled={dream.trim() === '' || isAnimating}
                                className="px-10 py-4 bg-[#6B46C1] text-white font-bold text-lg rounded-full shadow-lg hover:bg-[#8d6e63] transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
                            >
                                {isAnimating ? 'Sellando...' : 'Sellar en Nuestro Futuro'}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="animate-[fade-in-slow_1.5s_ease-out_forwards]">
                        <h2 className="font-playfair text-4xl font-bold text-[#6B46C1]">¡Sellado!</h2>
                        <p className="text-2xl mt-4">Tu sueño ha sido guardado en nuestro futuro.</p>
                        <p className="font-dancing text-3xl mt-8 text-[#3B3054]">Te amo. 💖</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TimeCapsuleSection;
