"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import { motion } from "framer-motion";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";


// Define navigation items with icons
const navItems = [
  {
    id: 1,
    title: "Contact",
    href: "/contact",
    icon: AiOutlineMail
  },
  {
    id: 2,
    title: "Services",
    href: "/services",
    icon: MdOutlineDesignServices
  },
  {
    id: 3,
    title: "Home",
    href: "/",
    icon: HiOutlineHome
  },
  {
    id: 4,
    title: "Works",
    href: "/works",
    icon: AiOutlineFundProjectionScreen
  },
  {
    id: 5,
    title: "About",
    href: "/about",
    icon: HiOutlineUserGroup
  },
];

export default function MobileNav() {
  const pathname = usePathname();
  
  return (
    <>
      {/* Mobile icon navigation - visible ONLY on small screens (mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 md:hidden">
        <div className="flex justify-around items-center h-16 px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const IconComponent = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                className="flex flex-col items-center justify-center relative"
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`flex flex-col items-center justify-center p-2 ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                >
                  <IconComponent size={24} />
                  <span className="text-xs mt-1">{item.title}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 w-1.5 h-1.5 bg-white rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}