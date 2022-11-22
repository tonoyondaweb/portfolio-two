import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

export default function Index() {
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

	return (
		<>
			<Head>
				<title>Tanay Lodh - Home</title>
				<meta charSet="UTF-8" />
			</Head>
			<section className="h-screen grid place-items-center">
				<motion.div
					className="w-[90%] max-w-[700px] mx-auto px-5 h-[80%] max-h-[700px] flex flex-col justify-evenly"
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
					<motion.h1
						className="text-indigo-300 font-semibold text-xl md:text-[2em]"
						variants={item}
					>
						My name is{" "}
						<span className="text-5xl font-extrabold block md:text-[3em]">
							Tanay Lodh
						</span>
					</motion.h1>
					<motion.p
						className="text-xl font-bold md:text-[2em]"
						variants={item}
					>
						Front-end Dev
					</motion.p>
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
