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
                  We Do not fw <span className="italic text-red-600">Ordinary</span>
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
                <li><Link href="https://www.facebook.com/profile.php?id=61573787330753" className="hover:text-gray-300">Facebook</Link></li>
                <li><Link href="https://www.instagram.com/socialmooodboard/" className="hover:text-gray-300">Instagram</Link></li>
                <li><Link href="https://www.linkedin.com/in/vishishta-banerjee-9652ba198/" className="hover:text-gray-300">LinkedIn</Link></li>
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

        {/* Website by Raghav Section */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-3 py-2">
            <span className="text-sm font-medium text-white opacity-60">Website by Raghav</span>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/raghav-krishna-m-6357bb290/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center bg-blue-600 rounded hover:bg-blue-700 transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/_raaghaavvvv_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center bg-pink-600 rounded hover:bg-pink-700 transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zm4.613 4.614a1.49 1.49 0 01.431 1.05v8.672c0 .4-.156.784-.431 1.05a1.49 1.49 0 01-1.05.431H6.437c-.4 0-.784-.156-1.05-.431a1.49 1.49 0 01-.431-1.05V5.664c0-.4.156-.784.431-1.05a1.49 1.49 0 011.05-.431h7.126c.4 0 .784.156 1.05.431zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm3.5-1.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" clipRule="evenodd"/>
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </div>

      {/* Large DevStudio text at bottom with full width */}
      <div className="w-full mt-16 pb-32 overflow-hidden">
        <h1 className="text-3xl text-center md:text-7xl lg:text-8xl font-bold text-secondary opacity-30 leading-none">
          SOCIAL <br /> MOODBOARD
        </h1>
      </div>
    </footer>
  );
}
