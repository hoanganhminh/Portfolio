import React from 'react';

interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  speed?: number;
}

export const OrbitingCircles: React.FC<OrbitingCirclesProps> = ({
  className = '',
  children,
  reverse = false,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
  speed = 1,
}) => {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-slate-300 dark:stroke-slate-800 stroke-[1.5]"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 4"
          />
        </svg>
      )}

      <div
        style={
          {
            '--duration': duration / speed,
            '--radius': radius,
            '--delay': -delay,
          } as React.CSSProperties
        }
        className={`absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full [animation-delay:calc(var(--delay)*1s)] ${
          reverse ? '[animation-direction:reverse]' : ''
        } ${className}`}
      >
        {children}
      </div>
    </>
  );
};
