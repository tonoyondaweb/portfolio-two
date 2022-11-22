import Head from "next/head";
import {motion} from "framer-motion"

export default function Work() {
	return (
		<>
			<Head>
				<title>Tanay Lodh - Work</title>
				<meta charSet="UTF-8" />
			</Head>
			<section className="h-screen grid items-center px-11">
				<motion.div className="h-[90%] flex flex-col justify-center gap-y-5 md:ml-11">
					<h1 className="text-[5em] font-bold lg:text-[10em]">
						Work
					</h1>
				</motion.div>
			</section>
		</>
	);
}
