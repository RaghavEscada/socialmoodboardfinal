import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-10 pb-0 px-4 md:px-8 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between mb-16">
          {/* Logo and Copyright */}
          <div className="mb-8 lg:mb-0">
            <Link href="/">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-32 h-32 rounded-md flex items-center justify-center">
                  <Image
                    src="/smlogo.png"
                    alt="Social Moodboard Logo"
                    height={1500}
                    width={1500}
                  />
                </div>
                <span className="text-4xl font-['Gilda_Display']">
                  We do not do <span className="italic text-red-600">Ordinary.</span>
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400">© copyright Social Moodboard 2025. All rights reserved.</p>
          </div>
          
          {/* Navigation Columns */}
          <div className="grid grid-cols-3 gap-8 lg:gap-16">
            {/* Pages Column */}
            <div>
              <h3 className="text-lg font-medium mb-6">Pages</h3>
              <ul className="space-y-4">
                <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
                <li><Link href="/works" className="hover:text-gray-300">Works</Link></li>
                <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
                <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
              </ul>
            </div>
            
            {/* Socials Column */}
            <div>
              <h3 className="text-lg font-medium mb-6">Socials</h3>
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="https://www.facebook.com/profile.php?id=61573787330753" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://www.instagram.com/socialmooodboard/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://www.linkedin.com/in/vishishta-banerjee-9652ba198/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Legal Column */}
            <div>
              <h3 className="text-lg font-medium mb-6">Legal</h3>
              <ul className="space-y-4">
                <li><Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-gray-300">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Large DevStudio text at bottom with full width */}
        <div className="w-full mt-16 pb-32 overflow-hidden">
          <h1 className="text-3xl text-center md:text-7xl lg:text-8xl font-bold text-gray-600 opacity-30 leading-none">
            SOCIAL <br /> MOODBOARD
          </h1>
        </div>
      </div>
    </footer>
  );
}
