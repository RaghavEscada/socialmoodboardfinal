"use client";

import { cn } from "@/lib/utils";


export default function Clients() {
  return (
    <section className="padding-y">
      <Testimonial />
    </section>
  );
}

const Testimonial = () => {
  return (
    <div className="relative flex h-auto w-full flex-col items-center font-['Gilda_Display'] justify-center overflow-hidden rounded-lg border bg-black md:shadow-xl">
      <div className="mx-auto max-w-4xl p-4 text-center sm:py-14">
        <h1 className="mb-4 text-7xl font-['Gilda_Display'] text-white dark:text-white md:text-5xl">
          Empowering
          <br />
          <span className="bg-red-700 bg-clip-text text-transparent italic">
          Individuals & Businesses
          </span>
        </h1>
        <p className="text-3xl p-7 text-white italic dark:text-white md:text-xl">
        "Ordinary doesn't live here. We craft the extraordinary, one bold idea at a time."
        </p>
      </div>

      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.email} {...review} />
        ))}
      </Marquee> 
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.email} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]">
        {thirdRow.map((review) => (
          <ReviewCard key={review.email} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-black"></div>
      

      
      <div className="bg-gray-200">
      <LogoCloud />
      </div>
      {/* Client logos placed below testimonials */}
     
    </div>
  );
};

const ReviewCard = ({ img, name, email, description }: any) => {
  return (
    <figure
      className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    >
      <div className="flex flex-row items-center gap-2">
       
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white dark:text-white">
            {name}
          </figcaption>
         
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white">{description}</blockquote> 
    </figure>
  );
};

const LogoCloud = () => {
  const logos = [
    {
      name: "Babel",
      url: "/l1.png",
    },
    {
      name: "Ngrok",
      url: "/l5.png",
    },
    {
      name: "Webflow",
      url: "/l12.png",
    },
    {
      name: "Perplexity",
      url: "/l9.png",
    },
    {
      name: "Sanity",
      url: "/l2.png",
    },
    {
      name: "Post CSS",
      url: "/l3.png",
    },
    {
      name: "Post CSS",
      url: "/l7.png",
    },  
    {
      name: "Post CSS",
      url: "/l8.png",
    },
    {
      name: "Post CSS",
      url: "/l6.png",
    },
    {
      name: "Post CSS",
      url: "/l10.png",
    },
    {
      name: "Post CSS",
      url: "/l11.png",
    },
    {
      name: "Post CSS",
      url: "/l2.png",
    },
    {
      name: "Post CSS",
      url: "/l3.png",
    },
  ];
  
  return (
    <div className="w-full py-12">
      <div className="mx-auto w-full px-2 md:px-4">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    className="h-28 w-42 px-2"
                    alt={logo.name}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};


const testimonials = [
  {
    name: "Prassana",
    email: "johndoe23@gmail.com",
    description: "Absolutely thrilled with Social Moodboard's service! They captured my brand's voice perfectly, crafted engaging content, and boosted my social media presence with professionalism, creativity, and strategic flair. A big thumbs up and 5 stars from me!",
    img: "https://img.freepik.com/free-photo/brunette-girl-posing_23-2148108748.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
  },
  {
    name: "JZ Lake View",
    email: "alexjohnson@gmail.com",
    description: "Partnering with Social Moodboard has elevated JZ's brand with creative, engaging content. Their fresh ideas and dedication have boosted our online presence and audience connection.",
    img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
  },
  {
    name: "Yogita Dalvi, KDBS",
    email: "emilydavis@gmail.com",
    description: "We had a pleasant experience working with Vishishta for handling our social media handle. Her promptness and creativity is adorable!",
    img: "https://img.freepik.com/free-photo/smiling-asian-woman_23-2147766303.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
  },
  {
    name: "Brew Merchant Café & Bar",
    email: "michaelbrown@gmail.com",
    description: "Working with Social Moodboard has been a total game-changer for us. Vishishta just *gets it*—she brings clarity, creativity, and structure to every campaign. From strategy to execution, everything feels intentional and aligned with our brand.",
    img: "https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
  },
  {
    name: "Founder, Echo Bowl",
    email: "sarahmiller@gmail.com",
    description: "Vishishta is a powerhouse. She leads with insight, understands the pulse of the audience, and never delivers anything mediocre. The Social Moodboard team has helped us show up with consistency, edge, and style.",
    img: "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
  },
  {
    name: "Owner, Chill House Interiors",
    description: "We came to Social Moodboard for content support, and stayed for the energy, professionalism, and genuine passion. Vishishta's strategies are sharp and rooted in what actually works. She treats our brand like her own.",
    img: "https://img.freepik.com/premium-photo/woman-wearing-glasses-yellow-shirt-is-wearing-yellow-shirt_911060-133057.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
  },
  {
    name: "Bloomhaus Interiors",
    description: "We were stuck with repetitive content until Vishishta came in with her magic. Within 2 months, our engagement went up 4x. If you want someone who brings strategy and taste, this is it.",
    img: "/api/placeholder/400/400",
  },
  {
    name: "Layla Hair Studio",
    description: "Social Moodboard helped us launch from scratch and build a full vibe. From brand voice to reel ideas—every detail was intentional and so us. Vishishta brings confidence and calm to the chaos.",
    img: "/api/placeholder/400/400",
  },
];

const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 3));
const secondRow = testimonials.slice(
  Math.ceil(testimonials.length / 3),
  2 * Math.ceil(testimonials.length / 3),
);
const thirdRow = testimonials.slice(2 * Math.ceil(testimonials.length / 3));
 
interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}
 
function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}