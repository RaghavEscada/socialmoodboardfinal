"use client";
import { Curve } from "@/components";

export default function About() {
  const handleNavigation = (page: string) => {
    // Navigate to the respective HTML page
    switch(page) {
      case "photos":
        window.open("/photos.html", "_self");
        break;
      case "graphics":
        window.open("/graphics.html", "_self");
        break;
      case "videos":
        window.open("https://socialmoodboardvideogallery.netlify.app/", "_self");
        break;
      default:
        window.open("/photos.html", "_self");
    }
  };
  
  return (
    <Curve backgroundColor={"#f1f1f1"}>
    <section className="w-full h-screen flex flex-col">
      {/* Iframe taking full remaining height */}
      <div className="relative w-full h-full">
        <iframe
          src="/works.html"
          title="Works Page"
          className="w-full h-full border-none"
        />
        
        {/* Centered Buttons in the middle of the screen - Responsive for both desktop and mobile */}
        <div className="absolute top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[20%] max-w-full px-4 sm:px-0 sm:w-auto">
          <div className="flex flex-col sm:flex-col bg-black/50 backdrop-blur-sm px-4 sm:px-8 py-4 rounded-3xl mx-auto">
            <button 
              onClick={() => handleNavigation("photos")}
              className="my-1 sm:my-0 mx-2 sm:mx-4 px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 bg-transparent text-white hover:bg-white/20"
            >
              PHOTOS
            </button>
            
            <button 
              onClick={() => handleNavigation("graphics")}
              className="my-1 sm:my-0 mx-2 sm:mx-4 px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 bg-transparent text-white hover:bg-white/20"
            >
              GRAPHICS
            </button>
            
            <button 
              onClick={() => handleNavigation("videos")}
              className="my-1 sm:my-0 mx-2 sm:mx-4 px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 bg-transparent text-white hover:bg-white/20"
            >
              VIDEOS
            </button>
          </div>
        </div>
      </div>
     
    </section>
    </Curve>
  );
}