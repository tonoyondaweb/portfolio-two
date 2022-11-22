import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
	const [menu, setMenu] = useState(false);

	const triggerMenu = () => setMenu((prevState) => !prevState);

	return (
		<>
			<nav
				className={`w-screen h-screen fixed bg-black/60 backdrop-blur-xl top-0 transition-all ease-in-out duration-[400ms] ${
					menu ? "right-0" : "right-[-100%]"
				}`}
			>
				<ul className="w-[80%] max-w-[700px] mx-auto h-full flex flex-col justify-evenly text-right text-7xl px-4">
					<li className="w-max transition-all cursor-pointer hover:text-indigo-700 hover:tracking-widest hover:font-extrabold lg:hover:tracking-[0.8em]" onClick={triggerMenu}>
						<Link href="/">Home</Link>
					</li>
					<li className="w-max transition-all cursor-pointer hover:text-indigo-700 hover:tracking-widest hover:font-extrabold lg:hover:tracking-[0.8em]" onClick={triggerMenu}>
						<Link href="/about">About</Link>
					</li>
					<li className="w-max transition-all cursor-pointer hover:text-indigo-700 hover:tracking-widest hover:font-extrabold lg:hover:tracking-[0.8em]" onClick={triggerMenu}>
						<Link scroll={false} href="/work">Work</Link>
					</li>
					<li className="w-max transition-all cursor-pointer hover:text-indigo-700 hover:tracking-widest hover:font-extrabold lg:hover:tracking-[0.8em]" onClick={triggerMenu}>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<button
				className={`fixed top-6 right-6 text-6xl cursor-pointer transition-colors ${
					menu ? "text-indigo-700" : ""
				}`}
				onClick={triggerMenu}
			>
				<HiOutlineMenuAlt3 />
			</button>
		</>
	);
}
