"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const locomotiveRef = useRef<any>(null);

  useEffect(() => {
    // Load hero.html in iframe
    if (containerRef.current) {
      // Create iframe with proper scrolling attributes
      const iframe = document.createElement('iframe');
      iframe.src = '/hero.html';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.zIndex = '1'; // Behind the scroll layer
      
      // Clear container and add the iframe
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(iframe);
      
      // Initialize Locomotive Scroll after iframe loads
      iframe.onload = () => {
        initLocomotive();
      };
    }

    // Initialize Locomotive Scroll
    const initLocomotive = () => {
      if (typeof window === 'undefined' || !scrollContainerRef.current) return;
      
      // Wait for Locomotive Scroll to be loaded
      if (typeof window.LocomotiveScroll === 'undefined') {
        setTimeout(initLocomotive, 200);
        return;
      }
      // Initialize Locomotive Scroll
      const locomotiveScrollInstance = new window.LocomotiveScroll({
        el: scrollContainerRef.current,
        smooth: true,
        lerp: 0.06,
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      });
      
      // Store the instance in the ref
      locomotiveRef.current = locomotiveScrollInstance;
      
      // Update locomotive scroll on window resize
      window.addEventListener('resize', () => {
        setTimeout(() => {
          if (locomotiveRef.current) {
            locomotiveRef.current.update();
          }
        }, 300);
      });
    };

    // Cleanup function
    return () => {
      if (locomotiveRef.current) {
        locomotiveRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      {/* Load Locomotive Scroll Script */}
      <Script 
        src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"
        strategy="beforeInteractive"
        onLoad={() => console.log('Locomotive Scroll loaded')}
      />
      
      {/* Add global styles for Locomotive Scroll */}
      <style jsx global>{`
        html.has-scroll-smooth {
          overflow: hidden;
        }
        
        .has-scroll-smooth body {
          overflow: hidden;
        }
        
        .has-scroll-smooth [data-scroll-container] {
          min-height: 100vh;
        }
        
        [data-scroll-section] {
          position: relative;
        }
        
        .c-scrollbar {
          position: absolute;
          right: 0;
          top: 0;
          width: 11px;
          height: 100%;
          transform-origin: center right;
          transition: transform 0.3s, opacity 0.3s;
          opacity: 0;
        }
        
        .c-scrollbar:hover {
          transform: scaleX(1.45);
        }
        
        .c-scrollbar:hover,
        .has-scroll-scrolling .c-scrollbar,
        .has-scroll-dragging .c-scrollbar {
          opacity: 1;
        }
        
        .c-scrollbar_thumb {
          position: absolute;
          top: 0;
          right: 0;
          background-color: #fff;
          opacity: 0.5;
          width: 7px;
          border-radius: 10px;
          margin: 2px;
          cursor: -webkit-grab;
          cursor: grab;
        }
        
        .has-scroll-dragging .c-scrollbar_thumb {
          cursor: -webkit-grabbing;
          cursor: grabbing;
        }
      `}</style>
      
      {/* Base container that contains the iframe with hero.html */}
      <div
        ref={containerRef}
        className="w-full h-screen relative pt-16"
        style={{ overflow: 'hidden' }}
      />
      
      {/* Locomotive scroll layer on top of hero.html */}
      <div 
        ref={scrollContainerRef} 
        data-scroll-container
        className="w-full h-screen absolute top-0 left-0 z-10 pointer-events-auto"
        style={{ 
          background: 'transparent',
          overflow: 'hidden'
        }}
      >
        {/* First scroll section - height matches hero */}
        <div data-scroll-section className="h-screen w-full relative">
          {/* Optional: Add scroll animations or effects here */}
          <div 
            data-scroll
            data-scroll-speed="0.1" 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center"
          >
           
          </div>
        </div>
        
        {/* You can add more scroll sections below this point */}
      </div>
    </>
  );
}

// Add this type definition for window.LocomotiveScroll
declare global {
  interface Window {
    LocomotiveScroll: any;
  }
}