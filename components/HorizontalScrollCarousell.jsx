"use client";
import { useRef, useState, useEffect } from "react";

const textBoxes = [
  {
    id: 1,
    title: "Strategic Planning",
    description: "Crafting customized growth strategies for sustainable business development.",
  },
  {
    id: 2,
    title: "Growth Analysis",
    description: "Identifying untapped opportunities through comprehensive market analysis.",
  },
  {
    id: 3,
    title: "Digital Optimization",
    description: "Maximizing ROI through data-driven performance improvements.",
  },
  {
    id: 4,
    title: "Operational Excellence",
    description: "Streamlining processes for greater efficiency and profitability.",
  },
  {
    id: 5,
    title: "Customer Insights",
    description: "Analyzing behavior for targeted marketing strategies.",
  },
];

export default function HorizontalScrollCarousel() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // Scroll speed factor - lower values mean slower scrolling
  const scrollSpeedFactor = 0.35; // Adjust this value to control scroll speed (0.5 = half speed, 0.25 = quarter speed)
  
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * scrollSpeedFactor; // Apply speed factor here
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * scrollSpeedFactor; // Apply speed factor here
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Clean up event listeners
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    
    const handleWheel = (e) => {
      if (scrollContainer) {
        e.preventDefault();
        scrollContainer.scrollLeft += (e.deltaY * scrollSpeedFactor);
      }
    };
    
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-blue-50 overflow-y-auto px-6 py-10">
      <h3 className="text-4xl md:text-5xl font-NeueMontreal text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        What We Do?
      </h3>
      
      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto pb-6 scrollbar-hide cursor-grab"
        style={{ scrollBehavior: 'smooth', overflowX: 'scroll', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        <div className="flex space-x-6 px-4">
          {textBoxes.map((box) => (
            <div
              key={box.id}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-center items-center text-center transition hover:shadow-xl flex-shrink-0 w-64 h-48"
            >
              <h4 className="text-xl font-semibold text-blue-700 mb-2">{box.title}</h4>
              <p className="text-gray-600">{box.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Navigation Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {textBoxes.map((box) => (
          <button
            key={box.id}
            className="w-2 h-2 rounded-full bg-blue-300 hover:bg-blue-500 transition-colors"
            onClick={() => {
              const scrollAmount = (box.id - 1) * 288; // 288 = width(256) + gap(32)
              scrollRef.current.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
              });
            }}
          />
        ))}
      </div>
    </section>
  );
}