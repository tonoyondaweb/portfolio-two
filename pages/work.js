import Head from "next/head";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import {sanityClient} from "../sanity"
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
	const {} = projects
	return (
		<>
			<Head>
				<title>Tanay Lodh - Work</title>
				<meta charSet="UTF-8" />
			</Head>
			<section className="min-h-screen grid items-center px-11">
				<motion.div
					className="min-h-[90%] mt-20 flex flex-col justify-center gap-y-5 md:ml-11"
					variants={container}
					initial="inital"
					animate="animate"
				>
					<motion.h1 className="text-[3.5em] font-bold md:text-[5em] lg:text-[10em] sticky top-20 -z-10" variants={item}>
						My Work.
					</motion.h1>
					<motion.div className="mt-6 grid grid-cols-1 gap-7 rounded-t-xl rounded-b-xl md:grid-cols-2 bg-gray-900 shadow-[0_1px_10px_15px] shadow-gray-900" variants={item}>
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
					<motion.button className="mt-5 mb-11" variants={item}>
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
	const projects = await sanityClient.fetch(`*[_type == "Work"]`)
		.then((data) =>
		data.map((item) => ({
			title: item.name,
			description: item.description,
			gitLink: item.gitLink,
			liveLink: item.liveLink,
			tech: item.tech,
			img: item.img,
			id: item._id
		}))
		);

	return {
		props: {
			projects,
			// : projects.sort((a, b) => a.index - b.index)
		},
		revalidate: 60
	};
}
