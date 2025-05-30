"use client";
import Link from "next/link";
import { useRef } from "react";
import { TextMask } from "@/animation";
import { ArrowUpRight } from "lucide-react";
import { Rounded } from "@/components";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Ready() {
	const container = useRef(null);
	const phrase = ["Ready to", "invest in", "your brand?"];

	const { scrollYProgress } = useScroll({
		target: container, 
		offset: ["start end", "end start"],
	});
	const mq = useTransform(scrollYProgress, [0, 1], [0, -700]);

	return (
		<section
			className="w-full text-red-500 relative font-['Gilda_Display'] z-30 min-h-screen sm:h-screen xm:h-screen bg-black padding-y rounded-t-[20px] mt-[-20px]"
			ref={container}>
			<div className="w-full h-full flex justify-center gap-[50px] items-center flex-col">
				<div className="flex flex-col gap-[10px]">
					<h1 className="text-[20px] font-['Gilda_Display'] italic leading-[230px] lg:text-[220px] lg:leading-[170px] md:text-[180px] md:leading-[140px] sm:text-[120px] sm:leading-[90px] xm:text-[80px] xm:leading-[60px] tracking-[-2.5px] text-center font-bold text-red-600 uppercase pointer-events-none">
						<TextMask>{phrase}</TextMask>
					</h1>
				</div>
				<div className="flex flex-col  items-center gap-[10px]">
					
					
					<div className="flex items-center justify-between bg-transparent cursor-pointer rounded-full group border border-[#212121]">
						<Link
							className="xl:text-[18px] xl:leading-[28px] text-[14px] leading-[24px] uppercase font-normal font-NeueMontreal"
							href="/contact">
							<Rounded
								className="py-[6px]"
								backgroundColor="#212121">
								<p className="z-10 px-[10px] ml-[15px] py-[6px] font-['Gilda_Display'] group-hover:text-white text-white">
								socialmoodboard@gmail.com
								</p>
								<div className="bg-white group-hover:bg-white p-[10px] rounded-full scale-[0.3] mr-[10px] group-hover:scale-[0.9] transition-all z-10 transform duration-[0.3s] ease-[.215,.61,.355,1]">
									<ArrowUpRight
										strokeWidth={1.5}
										size={30}
										className="scale-[0] group-hover:scale-[1]"
									/>
								</div>
							</Rounded>
						</Link>
					</div>
				</div>
			</div>
			<motion.div
				className="w-full absolute top-[50%] transform translate-y-[-50%] gap-[30px] flex items-center justify-center"
				style={{ y : mq }}>
				
			</motion.div>
		</section>
	);
}
