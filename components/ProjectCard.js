import Image from "next/image";
import {motion} from "framer-motion"
import { IoOpenOutline, IoLogoGithub } from "react-icons/io5";
import { urlFor } from "../sanity";

const item = {
	inital: {
		y: "100",
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			type: "linear",
		},
	},
};

export default function ProjectCard({
	title,
	desc,
	gitLink,
	liveLink,
	tech,
	img,
}) {
	return (
		<motion.div className="border-[0.5px] border-indigo-400/50 rounded-xl flex flex-col bg-gray-800 shadow-[0_3px_10px_rgb(0,0,0,0.2)]" variants={item}>
			<a
				href={liveLink}
			>
				<Image
					className="w-full h-max mb-5 rounded-t-xl"
					src={urlFor(img).url()}
					height={300}
					width={500}
					alt={`${title} project thumbnail`}
					priority
				/>
			</a>
			<div className="flex flex-col gap-y-5 items-center px-3 pb-3">
				<h3 className="self-start text-2xl font-bold">{title}</h3>
				<p className="self-start">{desc}</p>
				<ul className="w-full flex">
					{tech.map((tech, index) => (
						<>
							<li key={index}>{tech}</li>
							<span className="mx-1 last:hidden">/</span>
						</>
					))}
				</ul>
				<div className="flex gap-x-3 text-2xl self-start">
					<a href={gitLink} className="hover:text-indigo-300 transition-colors">
						<IoLogoGithub />
					</a>
					<a href={liveLink} className="hover:text-indigo-300 transition-colors">
						<IoOpenOutline />
					</a>
				</div>
			</div>
		</motion.div>
	);
}
