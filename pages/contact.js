import Head from "next/head";
import { client } from "../contentful";
import { motion } from "framer-motion";
import { HiMail } from "react-icons/hi";
import { TbBrandGithub, TbBrandTwitter, TbBrandLinkedin } from "react-icons/tb";

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
			ease: "linear",
		},
	},
};

export default function Contact(props) {
	const { email, github, twitter, linkedin } = props.links;

	return (
		<>
			<Head>
				<title>Tanay Lodh - Contact</title>
				<meta charSet="UTF-8" />
			</Head>
			<section className="h-screen grid items-center px-11">
				<motion.div
					className="h-[90%] flex flex-col justify-center gap-y-5 md:ml-11"
					variants={container}
					initial="inital"
					animate="animate"
				>
					<motion.h1
						className="text-[5em] font-bold lg:text-[10em]"
						variants={item}
					>
						Hello!
					</motion.h1>
					<motion.p className="text-lg max-w-[700px]" variants={item}>
						{props.text}
					</motion.p>
					<motion.div
						className="flex items-center gap-x-5 px-3 text-4xl mt-11 text-indigo-300"
						variants={item}
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
						<a
							href={email}
							className="bg-indigo-400 text-slate-200 w-max mt-5 py-3 px-5 text-xl text-center font-semibold rounded-full flex items-center gap-x-2 transition-all hover:scale-[1.2] hover:bg-indigo-500 hover:text-white"
						>
							Say hello!
							<HiMail className="text-3xl" />
						</a>
					</motion.button>
				</motion.div>
			</section>
		</>
	);
}

export async function getStaticProps() {
	const text = await client
		.getEntry("6orBYiEYuCXTMikY40PLIN")
		.then((data) => data.fields.text);

	const links = await client
		.getEntry("19XItu7QEOriO9CAKYPaSK")
		.then((data) => data.fields.links);

	return {
		props: {
			text,
			links,
		},
	};
}
