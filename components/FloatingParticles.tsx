
import React from 'react';

const FloatingParticles: React.FC = () => {
  const particles = Array.from({ length: 15 });

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      {particles.map((_, i) => {
        const style = {
          left: `${Math.random() * 100}%`,
          animationName: 'particle-float',
          animationDuration: `${Math.random() * 20 + 15}s`,
          animationDelay: `${Math.random() * -35}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        };
        const size = Math.random() * 5 + 2;
        const color = Math.random() > 0.5 ? '#FFB6C1' : '#9F7AEA';

        return (
          <div
            key={i}
            className="absolute bottom-0 rounded-full"
            style={{
              ...style,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              boxShadow: `0 0 8px ${color}`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingParticles;
