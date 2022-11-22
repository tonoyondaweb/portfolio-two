import Head from "next/head";
import Link from "next/link";
import {HiArrowRight} from "react-icons/hi"
import { client } from "../contentful";

export default function About(props) {
	return (
		<>
			<Head>
				<title>Tanay Lodh - About</title>
				<meta charSet="UTF-8" />
			</Head>
			<section className="min-h-screen grid items-center px-11">
				<div className="h-[90%] flex flex-col justify-center gap-y-5 md:ml-11">
					<h1 className="text-[5em] font-bold lg:text-[10em]">
						About
					</h1>
					<h2 className="font-semibold text-3xl">{props.intro}</h2>
					<p className="text-lg max-w-[700px]">{props.text}</p>
					<div className="space-y-5 mt-11">
						<h2 className="font-semibold text-xl bg-slate-700 w-max px-3 py-1 rounded-full">
							Skills
						</h2>
						<ul className="flex flex-wrap ml-2">
							{props.skills.map((skill, index) => (
								<>
									<li key={index}> {skill} </li>
									<span className="mx-2 last:hidden">
										{" "}
										/{" "}
									</span>
								</>
							))}
						</ul>
					</div>
					<button className="mt-5">
						<Link
							href="/work"
							className="w-max px-5 py-3 rounded-full flex items-center gap-x-5 text-xl text-slate-300 bg-indigo-400/50 cursor-pointer transition-all hover:gap-x-[100px] hover:text-white"
						>
							Check out my work!
							<HiArrowRight />
						</Link>
					</button>
				</div>
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
