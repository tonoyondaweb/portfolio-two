import Head from "next/head";
import Link from "next/link";
import { client } from "../contentful";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

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

export default function About({ intro, text, skills }) {
	return (
		<>
			<Head>
				<title>Tanay Lodh - About</title>
				<meta charSet="UTF-8" />
			</Head>
			<section className="min-h-screen grid items-center px-11">
				<motion.div
					className="h-[90%] flex flex-col justify-center gap-y-5 md:ml-11"
					variants={container}
					initial="inital"
					animate="animate"
				>
					<motion.h1 className="text-[5em] font-bold lg:text-[10em]" variants={item}>
						About
					</motion.h1>
					<motion.h2 className="font-semibold text-3xl" variants={item}>{intro}</motion.h2>
					<motion.p className="text-lg max-w-[700px]" variants={item}>{text}</motion.p>
					<motion.div className="space-y-5 mt-11" variants={item}>
						<h2 className="font-semibold text-xl bg-slate-700 w-max px-3 py-1 rounded-full">
							Skills
						</h2>
						<ul className="flex flex-wrap ml-2">
							{skills.map((skill, index) => (
								<>
									<li key={index}> {skill} </li>
									<span className="mx-2 last:hidden">
										{" "}
										/{" "}
									</span>
								</>
							))}
						</ul>
					</motion.div>
					<motion.button className="mt-5" variants={item}>
						<Link
							href="/work"
							scroll={false}
							className="w-max px-5 py-3 rounded-full flex items-center gap-x-5 text-xl text-slate-300 bg-indigo-400/50 cursor-pointer transition-all hover:gap-x-[100px] hover:text-white"
						>
							Check out my work!
							<HiArrowRight />
						</Link>
					</motion.button>
				</motion.div>
			</section>
		</>
	);
}

export async function getStaticProps() {
	const about = await client.getEntry("3gB0WhoFBE3ux89M7d8mKk");

	return {
		props: {
			intro: about.fields.intro,
			text: about.fields.aboutText,
			skills: about.fields.skills,
		},
	};
}
