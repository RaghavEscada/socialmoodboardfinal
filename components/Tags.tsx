import Link from "next/link";
import { Rounded } from "@/components";

interface TagItem {
	id: string | number;
	title: string;
	href: string;
}

interface TagsProps {
	item: TagItem;
	bgcolor: string;
	className: string;
}

export default function Tags({ item, bgcolor, className }: TagsProps) {
	return (
		<div
			className="w-fit rounded-[50px] border border-[#21212199] cursor-pointer"
			key={item.id}
		>
			<Link
				className={`small-text font-NeueMontreal uppercase ${className}`}
				href={item.href}
			>
				<Rounded className="py-[2px]" backgroundColor={bgcolor}>
					<p className="z-10 px-[15px]">{item.title}</p>
				</Rounded>
			</Link>
		</div>
	);
}
