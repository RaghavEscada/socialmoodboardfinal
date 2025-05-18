"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Target, TrendingUp, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Curve } from "@/components";
import { Ready } from "@/components";
import { cn } from "@/lib/utils";

// NumberTicker Component
const NumberTicker = ({
  value,
  direction = "up",
  delay = 0,
  className,
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.round(latest)
        );
      }
    });
  }, [springValue]);

  return (
    <span
      className={cn(
        "inline-block tabular-nums tracking-wider text-white",
        className
      )}
      ref={ref}
    />
  );
};

// Stats Section Component
const StatsSection = () => {
  return (
    <div className="mx-auto mt-14 pt-10 pb-12 grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 px-6">
      {/* Reach Stat */}
      <div className="relative bg-black rounded-xl text-white p-6 border border-gray-200 shadow-lg">
        <div className="absolute top-0 right-0 p-3">
          <Users className="size-10 text-gray-300" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">
              <NumberTicker value={10} />M+
            </span>
          </div>
          <div className="mt-3 text-white font-medium text-lg">
            Combined Reach
          </div>
          <p className="mt-1 text-sm text-white">
            Across all digital campaigns and platforms
          </p>
          <div className="group mt-4 flex cursor-pointer items-center gap-2 text-sm text-white hover:text-black">
          </div>
        </div>
      </div>
      {/* Brands Stat */}
      <div className="relative bg-black rounded-xl p-6 border border-gray-200 shadow-lg">
        <div className="absolute top-0 right-0 p-3">
          <TrendingUp className="size-10 text-gray-200" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">
              <NumberTicker value={20} />+
            </span>
          </div>
          <div className="mt-3 text-white font-medium text-lg">
            Elevated Brands
          </div>
          <p className="mt-1 text-sm text-white">
            With powerful content series and campaigns
          </p>
          <div className="group mt-4 flex cursor-pointer items-center gap-2 text-sm text-white hover:text-black">
          </div>
        </div>
      </div>
      {/* Content Quality Stat */}
      <div className="relative bg-black rounded-xl p-6 border text-white border-white shadow-lg">
        <div className="absolute top-0 right-0 p-3">
          <Target className="size-10 text-gray-300" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">
              <NumberTicker value={100} />%
            </span>
          </div>
          <div className="mt-3 text-white font-medium text-lg">
            Strategy Driven
          </div>
          <p className="mt-1 text-sm text-white">
            Purposeful content that delivers results, no fluff
          </p>
          <div className="group mt-4 flex cursor-pointer items-center gap-2 text-sm text-gray-400 hover:text-white">
          </div>
        </div>
      </div>
    </div>
  );
};

// Main About Component
export default function About() {
  // Updated niche data with fixed images
  const nicheData = [
    {
      id: 1,
      title: "Home Automation & Brands",
      imageUrl: "/i1.jpg"
    },
    {
      id: 2,
      title: "Interior Design Houses",
      imageUrl: "/i2.jpg"
    },
    {
      id: 3,
      title: "Building Solutions",
      imageUrl: "/i3.jpg"
    },
    {
      id: 4,
      title: "Salons",
      imageUrl: "/i4.jpg"
    },
    {
      id: 5,
      title: "Food & Beverage Brands",
      imageUrl: "/i5.jpg"
    },
    {
      id: 6,
      title: "Corporate Houses",
      imageUrl: "/ch.png"
    }
  ];

  // Reference for the iframe
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Effect to handle iframe loading and communication
  useEffect(() => {
    const handleIframeLoad = () => {
      // Ensure iframe exists
      if (iframeRef.current && iframeRef.current.contentWindow) {
        try {
          // Attempt to access and modify the iframe's scrolling behavior
          const iframeWindow = iframeRef.current.contentWindow;

          // This will post a message to the iframe to disable scrolling
          iframeWindow.postMessage({ action: 'disableScroll' }, '*');

          // Add a class to indicate the iframe is loaded
          iframeRef.current.classList.add('iframe-loaded');
        } catch (e) {
          console.error("Error setting up iframe:", e);
        }
      }
    };

    // Attach load event listener
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
    }

    // Clean up
    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
      }
    };
  }, []);

  return (
    <>
      <Curve backgroundColor={"#f1f1f1"}>
        <div className="bg-[#494949]">
          <div className="w-full">
            {/* Fullscreen Iframe - with improved handling */}
            <section className="w-full h-screen flex flex-col">
              <div className="relative w-full h-full">
                <iframe
                  ref={iframeRef}
                  src="/about.html"
                  title="About Page"
                  className="w-full h-full border-none"
                  scrolling="no"
                  style={{
                    overflow: 'hidden',
                    pointerEvents: 'auto' // Allow interaction but disable scrolling
                  }}
                />
              </div>
            </section>
            {/* Main scrollable content with Locomotive Scroll */}
            <div data-scroll-container className="w-full">
              <div className="relative z-10 bg-[#494949] lg:py-32 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-red-600 blur-3xl"></div>
                  <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-red-800 blur-3xl"></div>
                </div>
                <div className="container mx-auto px-6 relative">
                  {/* Heading with refined typography */}
                  <div className="container mx-auto px-6 relative">
                    {/* Heading with refined typography */}
                    <h2 className="text-4xl md:text-5xl lg:text-7xl mb-16 text-center font-['Gilda_Display'] text-white">
                      Behind <span className="italic text-red-500 relative">
                        Social Moodboard
                        <span className="absolute -bottom-2 left-0 w-full h-px bg-red-500 opacity-50"></span>
                      </span>
                    </h2>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mx-auto max-w-7xl">
                      {/* Image Section with enhanced styling */}
                      <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-600/30 to-transparent mix-blend-overlay z-10"></div>
                        <Image
                          src="/vis.png"
                          alt="Vishishta Banerjee"
                          width={320}
                          height={320}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Text Section with better layout */}
                      <div className="max-w-xl text-center lg:text-left mt-12 lg:mt-0">
                        <p className="text-white/90 text-lg font-light mb-8 font-['Gilda_Display'] leading-relaxed">
                          With over four years of experience, I, <strong className="text-red-400">Vishishta Banerjee</strong>, have worked with brands across industries, transforming their online presence. I create strategies that don&apos;t just &quot;look good&quot; but actually drive results. From F&B hotspots to corporate houses, I&apos;ve helped businesses craft an identity, connect with their audience, and, most importantly—convert.
                        </p>

                        {/* Enhanced button with animation - Fixed to use Next Link */}
                        <Link
                          href="/about"
                          className="inline-flex items-center m-16 px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-light rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                          <span className="font-['Gilda_Display'] ">Learn More About Us</span>
                          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Niches Section */}
                <div className="relative z-10 mb-20">
                  <h2 className="text-4xl md:text-5xl lg:text-7xl text-center font-['Gilda_Display'] text-white">
                    Niches <span className="relative inline-block">
                      <span className="italic text-red-500">Worked In</span>
                      <span className="absolute -bottom-2 left-0 w-full h-px bg-red-500 opacity-50"></span>
                    </span>
                  </h2>
                  <div className="mt-4 max-w-xl mx-auto">
                    <p className="text-gray-400 text-center text-sm md:text-base">
                      Specialized expertise across multiple industries with proven results
                    </p>
                  </div>
                </div>

                {/* Improved Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                  {nicheData.map((niche) => (
                    <div
                      key={niche.id}
                      className="group bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-red-500/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={niche.imageUrl}
                          alt={`${niche.title} niche`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

                        {/* Hover indicator */}
                        <div className="absolute top-4 right-4 bg-red-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-white font-['Gilda_Display'] group-hover:text-red-500 transition-colors duration-300">
                          {niche.title}
                        </h3>

                        <div className="mt-6 flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <span className="text-xs text-gray-400">Results-driven approach</span>
                          </div>
                          <div className="inline-flex items-center justify-center size-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-500/20">
                            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Horizontal Stats Section with Custom Background */}
              <section data-scroll-section className="py-16 bg-[#494949] text-black">
                <div className="flex flex-col items-center bg-[#494949] justify-center">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-lg border-2 border-black-500/30 bg-purple-500/10 shadow-lg shadow-white-500/20">
                    <Zap aria-hidden="true" className="size-7 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl bg-[#494949] lg:text-7xl mb-16 text-center font-['Gilda_Display'] text-white">
                    Our Statergies <span className="italic text-red-500 relative">
                      turnt brand into powerhouses
                      <span className="absolute -bottom-2 left-0 w-full h-px bg-red-500 opacity-50"></span>
                    </span>
                  </h2>
                  <p className="mt-4 text-center text-base text-gray-300 md:text-xl max-w-2xl">
                    Delivering measurable results through data-driven campaigns and strategic content solutions.
                  </p>
                </div>

                {/* Stats Cards */}
                <StatsSection />
              </section>

              <div data-scroll-section>
                <Ready />
              </div>
            </div>
          </div>
        </div>
      </Curve>
    </>
  );
}