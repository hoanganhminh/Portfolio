import React, { useMemo } from 'react';

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors: React.FC<MeteorsProps> = ({ number = 20, className = '' }) => {
  const meteors = useMemo(() => {
    return Array.from({ length: number }).map((_, idx) => ({
      id: idx,
      top: Math.floor(Math.random() * 80) + '%',
      left: Math.floor(Math.random() * 100) + '%',
      animationDelay: (Math.random() * 1 + 0.2).toFixed(2) + 's',
      animationDuration: Math.floor(Math.random() * 8 + 3) + 's',
    }));
  }, [number]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-sky-400 shadow-[0_0_0_1px_#ffffff10]"
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[60px] -translate-y-1/2 bg-gradient-to-r from-sky-400 to-transparent" />
        </span>
      ))}
    </div>
  );
};
