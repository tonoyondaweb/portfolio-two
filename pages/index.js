import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { TbBrandGithub, TbBrandTwitter, TbBrandLinkedin } from "react-icons/tb";
import { sanityClient } from "../sanity";

export default function Index({links}) {
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

	const { github, twitter, linkedin } = links;
	return (
		<>
			<Head>
				<title>Tanay Lodh - Home</title>
				<meta charSet="UTF-8" />
			</Head>
			<section className="h-screen grid place-items-center">
				<motion.div
					className="w-[90%] max-w-[800px] mx-auto px-5 h-[80%] max-h-[700px] flex flex-col justify-evenly"
					variants={container}
					initial="inital"
					animate="animate"
				>
					<motion.h2
						className="text-4xl font-bold md:text-[3.5em]"
						variants={item}
					>
						Hey! &#128075;
					</motion.h2>
					<motion.div
						className="text-indigo-300 font-semibold text-xl md:text-[2em]"
						variants={item}
					>
						My name is{" "}
						<h1 className="text-6xl font-extrabold md:text-[4em]">
							Tanay Lodh
						</h1>
					</motion.div>
					<motion.p
						className="text-xl font-bold md:text-[2em]"
						variants={item}
					>
						UI / Front-End
					</motion.p>
					<motion.div
						variants={item}
						className="flex items-center gap-x-5 text-4xl text-indigo-300"
					>
						<a
							href={github}
							className="transition-all hover:text-indigo-400"
						>
							<TbBrandGithub />
						</a>
						<a
							href={linkedin}
							className="transition-all hover:text-indigo-400"
						>
							<TbBrandLinkedin />
						</a>
						<a
							href={twitter}
							className="transition-all hover:text-indigo-400"
						>
							<TbBrandTwitter />
						</a>
					</motion.div>
					<motion.button variants={item}>
						<Link
							href="/about"
							className="w-max px-5 py-3 rounded-full flex items-center gap-x-5 text-xl text-slate-300 bg-indigo-400/50 cursor-pointer transition-all hover:gap-x-[100px] hover:text-white"
						>
							Learn more about me
							<HiArrowRight />
						</Link>
					</motion.button>
				</motion.div>
			</section>
		</>
	);
}

export async function getStaticProps() {
	const links = await sanityClient.fetch(`*[_type == "socials"][0]`)
	return {
		props: {
			links,
		},
	};
}
