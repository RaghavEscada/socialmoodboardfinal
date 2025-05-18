"use client";
import { ReactNode, useState } from "react";
import { Instagram, Linkedin, MessageCircle, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Ready } from "@/components";

// Define types for our data structures
interface SocialLink {
  id: number;
  title: string;
  href: string;
  icon: ReactNode;
}



interface Service {
  id: number;
  title: string;
  description: string;
  color: string;
  src: string;
  bulletins: string[];
}

const socialLinks: SocialLink[] = [
  { id: 1, title: "Instagram", href: "https://www.instagram.com/thesocialmoodboard/", icon: <Instagram size={20} /> },
  { id: 2, title: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={20} /> },
  { id: 3, title: "WhatsApp", href: "https://wa.me/+1234567890?text=Dear%20Social%20Moodboard%20Team%2C%20I%20hope%20you%20are%20doing%20well.%20I%20am%20interested%20in%20learning%20more%20about%20your%20services%20and%20how%20you%20can%20help%20with%20my%20social%20media%20strategy.%20Could%20you%20please%20provide%20more%20details%3F%20Looking%20forward%20to%20your%20response.%20Best%20regards%2C", icon: <MessageCircle size={20} /> },
];

const services: Service[] = [
  {
    id: 1,
    title: "Social Media Suite",
    description:
      "Comprehensive management and content creation for all your social platforms. We craft engaging narratives that connect with your audience through carefully curated visuals and purposeful messaging.",
    color: "#ff2d20", // Red-600 color
    src: "/sms.png",
    bulletins: [
      "Social Media Management (SMM)",
      "Content Creation (Text, Images, Reels)",
      "Calendar Planning & Scheduling",
      "Community Engagement & DM Handling",
      "Hashtag & Trend Research",
      "Analytics & Reporting",
    ],
  },
  {
    id: 2,
    title: "Visual Identity",
    description:
      "Crafting distinctive brand aesthetics that resonate with your target audience. Our design philosophy embraces elegance, intention, and the subtle art of visual storytelling that captivates and endures.",
    color: "#ff2d20",
    src: "/vid.png",
    bulletins: [
      "Logo Design & Brand Marks",
      "Typography & Color Palette Selection",
      "Brand Guidelines Documentation",
      "Business Card & Stationery Design",
      "Social Media Branding Templates",
      "Moodboards & Visual Style Guides",
    ],
  },
  {
    id: 3,
    title: "Optimization Hub",
    description:
      "Data-driven strategies to maximize engagement and conversion rates. We leverage analytical insights to refine your digital presence, ensuring your content performs optimally across all touchpoints.",
    color: "#ff2d20",
    src: "/opt.png",
    bulletins: [
      "Engagement & Conversion Analysis",
      "SEO & Hashtag Optimization",
      "A/B Testing of Content & Ads",
      "Growth Tracking & KPI Reports",
      "Funnel Optimization Strategy",
      "Social Media Algorithm Insights",
    ],
  },
  {
    id: 4,
    title: "Website Development",
    description:
      "Forward-thinking approaches to position your brand for long-term success. We develop comprehensive roadmaps that align with your business objectives while maintaining flexibility for emerging trends.",
    color: "#ff2d20",
    src: "/web.png",
    bulletins: [
      "Responsive Website Design",
      "Frontend & Backend Development",
      "SEO Optimization",
      "CMS Setup (WordPress, Webflow, etc.)",
      "Performance & Speed Optimization",
      "UI/UX Best Practices Implementation",
    ],
  },
  {
    id: 5,
    title: "Digital Strategy & Beyond",
    description:
      "Forward-thinking approaches to position your brand for long-term success. We develop comprehensive roadmaps that align with your business objectives while maintaining flexibility for emerging trends.",
    color: "#ff2d20",
    src: "/ds.png",
    bulletins: [
      "Full Digital Marketing Roadmap",
      "Competitive & Market Analysis",
      "Paid Campaign Strategy (Google, Meta)",
      "Influencer & Affiliate Strategy",
      "Future Trend Adaptability Planning",
      "Cross-Platform Integration Blueprint",
    ],
  },
];

// ServicePopup component for showing bulletins
const ServicePopup = ({
  service,
  isOpen,
  onClose
}: {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-red-600/30 rounded-xl w-full max-w-md relative overflow-hidden animate-fadeIn">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-red-800 to-red-950 p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <h3 className="font-['Gilda_Display'] text-3xl text-white">{service.title}</h3>
        </div>

        {/* Bulletins section */}
        <div className="p-8">
          <h4 className="text-red-500 mb-4 font-['Gilda_Display'] text-xl">Services Include:</h4>
          <ul className="space-y-4">
            {service.bulletins.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1 h-4 w-4 rounded-full bg-red-500 flex-shrink-0"></div>
                <p className="font-['Gilda_Display'] text-lg text-white">{item}</p>
              </li>
            ))}
          </ul>

          {/* Action button */}
          <div className="mt-8 flex justify-center">

          </div>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  // State for controlling which service popup is showing
  const [activePopup, setActivePopup] = useState<string | null>(null);

  // Function to open popup for a specific service
  const openPopup = (serviceId: number) => {
    setActivePopup(serviceId.toString());
  };

  // Function to close popup
  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <>
      <section className="w-full bg-[#494949] py-32 px-8 sm:px-12 lg:px-16 relative overflow-hidden">
        {/* Refined background elements with reduced opacity */}

        {/* Header Section - Added more vertical spacing */}
        <div className="text-center max-w-4xl mx-auto relative z-10 mb-40">
          <div className="mb-12">
            <span className="px-6 py-2 bg-[#494949] tracking-tight font-bold rounded-full text-lg text-white opacity-100 border border-gray-800 uppercase">
              Elevate Your Digital Presence
            </span>
          </div>

          <h1 className="font-['Gilda_Display'] text-6xl sm:text-6xl md:text-7xl font-normal mb-12 tracking-tight leading-tight text-white opacity-100">
            Welcome to <span className="text-red-600 italic">The Social Moodboard</span>
          </h1>

          <p className="text-white opacity-100 text-2xl max-w-2xl mx-auto font-light leading-relaxed mt-6 font-['Gilda_Display']">
            We craft bespoke social media strategies, visual identities, optimization solutions, and forward-thinking digital strategies that elevate your brand&apos;s presence.
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <Link
              href="/contact"
              className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-light rounded-full hover:shadow-lg hover:translate-y-px transition-all duration-300 flex items-center gap-2 font-['Gilda_Display']"
            >
              Start a Project <ChevronRight size={16} />
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 bg-[#494949] text-white opacity-100 font-light rounded-full hover:bg-gray-600 transition-all duration-300 border border-gray-800 shadow-sm font-['Gilda_Display']"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Services Section - With Images */}
        <div id="services" className="w-full max-w-6xl mx-auto relative z-10 mb-40">
          <h2 className="text-6xl font-normal mb-24 text-center font-['Gilda_Display'] text-white opacity-100">
            Our Expertise
          </h2>

          {/* Alternating image layout for services */}
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} mb-32 last:mb-0 items-center`}
            >
              {/* Image Section */}
              <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-12 lg:mb-0`}>
                <div className="relative">
                  <div
                    className="absolute inset-0 bg-gray-800/5 rounded-2xl transform -rotate-3 scale-95"
                    style={{
                      borderLeft: index % 2 === 0 ? `4px solid ${service.color}` : 'none',
                      borderRight: index % 2 === 1 ? `4px solid ${service.color}` : 'none'
                    }}
                  ></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={service.src}
                      alt={service.title}
                      width={600}
                      height={450}
                      className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105 opacity-100"
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                <div className="w-16 h-0.5 mb-10" style={{ backgroundColor: service.color }}></div>
                <h3 className="text-5xl font-normal mb-8 text-red-600 opacity-100 font-['Gilda_Display']">
                  {service.title}
                </h3>
                <p className="text-white opacity-100 font-light text-lg leading-relaxed mb-8 font-['Gilda_Display']">
                  {service.description}
                </p>

                {/* Added bulletins in a clean, elegant format */}
                <div className="mb-8">
                  <h4 className="text-red-400 mb-4 font-['Gilda_Display'] text-lg">Services Include:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.bulletins.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-white/80">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <span className="font-['Gilda_Display'] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {service.bulletins.length > 4 && (
                    <div className="mt-2 text-white/60 text-sm font-['Gilda_Display']">
                      +{service.bulletins.length - 4} more services
                    </div>
                  )}
                </div>

                <button
                  onClick={() => openPopup(service.id)}
                  className="inline-flex items-center gap-2 text-white hover:text-red-500 font-['Gilda_Display'] group/link transition-all duration-300"
                >
                  <span>Discover More</span>
                  <ChevronRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                </button>

                {/* Render popup conditionally */}
                <ServicePopup
                  service={service}
                  isOpen={activePopup === String(service.id)}
                  onClose={closePopup}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Social Links Section - More elegant spacing */}
        <div className="pt-24 border-t border-gray-800 relative z-10">
          <h2 className="text-2xl font-normal mb-16 text-center font-['Gilda_Display'] text-white opacity-100">
            Connect With Us
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {socialLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white opacity-40 hover:text-red-400 font-light transition-all duration-300 gap-2"
              >
                {item.icon}
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <div>
        <Ready />
      </div>
    </>
  );
}