import Head from "next/head";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { client } from "../contentful";
import ProjectCard from "../components/ProjectCard";

const container = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

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

export default function Work({ projects }) {
	return (
		<>
			<Head>
				<title>Tanay Lodh - Work</title>
				<meta charSet="UTF-8" />
			</Head>
			<section className="h-screen overflow-y-scroll grid items-center px-11">
				<motion.div
					className="h-[90%] mt-20 flex flex-col justify-center gap-y-5 pb-11 md:ml-11"
					variants={container}
					initial="inital"
					animate="animate"
				>
					<motion.h1 className="text-[5em] font-bold lg:text-[10em] sticky top-20 -z-10" variants={item}>
						My Work
					</motion.h1>
					<motion.div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 bg-gray-900" variants={item}>
						{projects.map((project) => (
							<ProjectCard
								key={project.index}
								title={project.title}
								desc={project.description}
								gitLink={project.gitLink}
								liveLink={project.liveLink}
								tech={project.tech}
								img={project.img}
							/>
						))}
					</motion.div>
					<motion.button className="mt-5" variants={item}>
						<Link
							href="/contact"
							scroll={false}
							className="w-max px-5 py-3 rounded-full flex items-center gap-x-5 text-xl text-slate-300 bg-indigo-400/50 cursor-pointer transition-all hover:gap-x-[100px] hover:text-white"
						>
							{"What's next?"}
							<HiArrowRight />
						</Link>
					</motion.button>
				</motion.div>
			</section>
		</>
	);
}

export async function getStaticProps() {
	const projects = await client
		.getEntries({ content_type: "project" })
		.then((data) =>
			data.items.map((item) => ({
				title: item.fields.title,
				description: item.fields.description,
				gitLink: item.fields.gitLink,
				liveLink: item.fields.liveLink,
				tech: item.fields.tech,
				img: item.fields.thumbnail.fields.file.url,
				index: item.fields.serialNumber,
			}))
		);

	return {
		props: {
			projects: projects.sort((a, b) => a.index - b.index),
		},
	};
}
