import { TMarqueeProps } from "@/types";
import { TextMarquee } from "@/animation";

export default function Marquee({ title, className }: TMarqueeProps) {
	return (
		<TextMarquee baseVelocity="0.7">
			<h1
				className={`font-['Gilda_Display'] italic bg-black border-y border-[#ffffff55] uppercase text-slate-400 whitespace-nowrap tracking-[-0.1em] ${className}`}>
				{title} &nbsp;
			</h1>
			<h1
				className={`font-['Gilda_Display'] italic bg-black border-y border-[#ffffff55] uppercase text-white whitespace-nowrap tracking-[-0.1em] ${className}`}>
				{title} &nbsp;
			</h1>
		</TextMarquee>
	);
}
