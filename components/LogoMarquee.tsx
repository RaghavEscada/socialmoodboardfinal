import React from 'react';
import Image from 'next/image';

interface LogoMarqueeProps {
  logos: string[];
  className?: string;
}

export default function LogoMarquee({ logos, className = '' }: LogoMarqueeProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <div key={index} className="mx-8 flex items-center">
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={100}
              height={50}
              className="h-auto w-auto object-contain"
            />
          </div>
        ))}
        {/* Duplicate logos for seamless infinite scroll */}
        {logos.map((logo, index) => (
          <div key={`duplicate-${index}`} className="mx-8 flex items-center">
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={100}
              height={50}
              className="h-auto w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 