"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  color?: string;
  icon?: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionHeight = height / data.length;
    const newIndex = Math.min(
      Math.floor((latest * height) / sectionHeight),
      data.length - 1
    );
    if (newIndex >= 0 && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  // Create individual transforms for each section
  // We always create up to 10 transforms regardless of data length to satisfy React's rules of hooks
  const section0Progress = useTransform(
    scrollYProgress,
    [0, 0.1, 1/(data.length || 1) - 0.1, 1/(data.length || 1)],
    [0, 1, 1, 0]
  );
  
  const section1Progress = useTransform(
    scrollYProgress,
    [1/(data.length || 2), 1/(data.length || 2) + 0.1, 2/(data.length || 2) - 0.1, 2/(data.length || 2)],
    [0, 1, 1, 0]
  );
  
  const section2Progress = useTransform(
    scrollYProgress,
    [2/(data.length || 3), 2/(data.length || 3) + 0.1, 3/(data.length || 3) - 0.1, 3/(data.length || 3)],
    [0, 1, 1, 0]
  );
  
  const section3Progress = useTransform(
    scrollYProgress,
    [3/(data.length || 4), 3/(data.length || 4) + 0.1, 4/(data.length || 4) - 0.1, 4/(data.length || 4)],
    [0, 1, 1, 0]
  );
  
  const section4Progress = useTransform(
    scrollYProgress,
    [4/(data.length || 5), 4/(data.length || 5) + 0.1, 5/(data.length || 5) - 0.1, 5/(data.length || 5)],
    [0, 1, 1, 0]
  );
  
  const section5Progress = useTransform(
    scrollYProgress,
    [5/(data.length || 6), 5/(data.length || 6) + 0.1, 6/(data.length || 6) - 0.1, 6/(data.length || 6)],
    [0, 1, 1, 0]
  );
  
  const section6Progress = useTransform(
    scrollYProgress,
    [6/(data.length || 7), 6/(data.length || 7) + 0.1, 7/(data.length || 7) - 0.1, 7/(data.length || 7)],
    [0, 1, 1, 0]
  );
  
  const section7Progress = useTransform(
    scrollYProgress,
    [7/(data.length || 8), 7/(data.length || 8) + 0.1, 8/(data.length || 8) - 0.1, 8/(data.length || 8)],
    [0, 1, 1, 0]
  );
  
  const section8Progress = useTransform(
    scrollYProgress,
    [8/(data.length || 9), 8/(data.length || 9) + 0.1, 9/(data.length || 9) - 0.1, 9/(data.length || 9)],
    [0, 1, 1, 0]
  );
  
  const section9Progress = useTransform(
    scrollYProgress,
    [9/(data.length || 10), 9/(data.length || 10) + 0.1, 10/(data.length || 10) - 0.1, 10/(data.length || 10)],
    [0, 1, 1, 0]
  );
  
  // Put all section progresses in an array for easy access
  const sectionProgressValues = [
    section0Progress,
    section1Progress,
    section2Progress,
    section3Progress,
    section4Progress,
    section5Progress,
    section6Progress,
    section7Progress,
    section8Progress,
    section9Progress
  ];
  
  return (
    <div
      className="w-full h-full bg-gray-400 font-sans relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background Noise and Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1a1a1a,#000000)] opacity-80 z-0">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            animate={{
              x: ["0vw", `${Math.random() * 100}vw`],
              y: ["0vh", `${Math.random() * 100}vh`],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, Math.random() * 3, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto py-20 px-6 md:px-10 relative z-10"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl mb-6 font-['Gilda_Display'] text-white font-light bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Client <span className="italic text-red-700">Onboarding</span>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl font-['Gilda_Display'] max-w-2xl leading-relaxed">
          I&apos;ve always believed that understanding customers deeply is the key to building products they truly love.
        </p>
      </motion.div>

      {/* Timeline */}
      <div ref={ref} className="relative max-w-7xl font-['Gilda_Display'] mx-auto pb-40">
        {data.map((item, index) => {
          const isActive = index === activeIndex;
          const itemColor = item.color || "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-start pt-20 md:pt-40 md:gap-10 relative z-10"
            >
              <motion.div
                className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full"
                style={{ opacity: sectionProgressValues[index] || 0 }}
              >
                <div className="relative w-16 h-16">
                  <motion.div
                    className={`absolute inset-0 rounded-full ${isActive ? itemColor : 'bg-gray-800'} opacity-20`}
                    animate={{ scale: isActive ? [1, 1.5, 1] : 1 }}
                    transition={{ duration: 2, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
                  />
                  <div className={`relative h-12 w-12 top-2 left-2 rounded-full bg-black flex items-center justify-center border-2 ${isActive ? 'border-blue-500' : 'border-gray-700'}`}>
                    <motion.div
                      className={`h-6 w-6 rounded-full ${isActive ? itemColor : 'bg-gray-700'}`}
                      animate={{ scale: isActive ? [1, 0.8, 1] : 1 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                </div>
                <motion.h3
                  className={`hidden md:block text-5xl md:pl-8 font-bold ${isActive ? 'text-white' : 'text-gray-600'} transition-colors duration-300`}
                  animate={{ x: isActive ? 10 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {item.title}
                </motion.h3>
              </motion.div>

              <motion.div
                className="relative pl-20 pr-4 md:pl-4 w-full"
                style={{ opacity: sectionProgressValues[index] || 0 }}
              >
                <motion.h3
                  className={`md:hidden block text-3xl mb-6 text-left font-bold ${isActive ? 'text-white' : 'text-gray-600'}`}
                  animate={{ y: isActive ? [5, 0] : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.title}
                </motion.h3>
                <motion.div
                  className="bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-800 shadow-2xl transform-gpu"
                  initial={{ opacity: 0.5, y: 20, scale: 0.98 }}
                  animate={{
                    opacity: isActive ? 1 : 0.7,
                    y: isActive ? 0 : 10,
                    scale: isActive ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {item.content}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Progress Bar */}
        <div
          style={{ height: `${height}px` }}
          className="absolute left-8 top-0 overflow-hidden w-1 bg-gradient-to-b from-transparent via-gray-800 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-1 bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 from-[0%] via-[50%] rounded-full"
          />
        </div>

        {/* Glows */}
        <motion.div
          className="absolute right-0 top-[20%] w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
          animate={{ x: [0, 30, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[10%] bottom-[30%] w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
          animate={{ y: [0, -40, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
};