import React, { useState } from 'react';

interface InteractiveGridPatternProps {
  className?: string;
  width?: number;
  height?: number;
  squares?: [number, number];
}

export const InteractiveGridPattern: React.FC<InteractiveGridPatternProps> = ({
  className = '',
  width = 40,
  height = 40,
  squares = [24, 24],
}) => {
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

  const horizontal = squares[0];
  const vertical = squares[1];
  const total = horizontal * vertical;

  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 flex h-full w-full justify-center overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] ${className}`}
    >
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${horizontal}, ${width}px)`,
          gridTemplateRows: `repeat(${vertical}, ${height}px)`,
        }}
      >
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)}
            className={`pointer-events-auto border-b border-r border-slate-300/40 dark:border-slate-800/40 transition-colors duration-500 ${
              hoveredSquare === index
                ? 'bg-sky-500/20 shadow-[0_0_15px_rgba(56,189,248,0.5)]'
                : 'hover:bg-sky-500/10'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
