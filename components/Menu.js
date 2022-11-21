import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
	const [menu, setMenu] = useState(false);

	const triggerMenu = () => setMenu((prevState) => !prevState);

	return (
		<>
			<nav
				className={`border-[0.5px] w-[90%] max-w-[450px] h-[90vh] border-slate-500/50 rounded-xl fixed top-14 backdrop-blur-lg transition-all ease-in-out duration-300 ${
					menu ? "right-3" : "right-[-100%]"
				}`}
			>
				<ul className="w-[80%] mx-auto h-full flex flex-col justify-evenly text-right text-5xl px-4">
					<li className="w-max transition-all cursor-pointer hover:text-indigo-700 hover:tracking-widest hover:font-extrabold" onClick={triggerMenu}>
						<Link href="/">Home</Link>
					</li>
					<li className="w-max transition-all cursor-pointer hover:text-indigo-700 hover:tracking-widest hover:font-extrabold" onClick={triggerMenu}>
						<Link href="/about">About</Link>
					</li>
					<li className="w-max transition-all cursor-pointer hover:text-indigo-700 hover:tracking-widest hover:font-extrabold" onClick={triggerMenu}>
						<Link href="/work">Work</Link>
					</li>
					<li className="w-max transition-all cursor-pointer hover:text-indigo-700 hover:tracking-widest hover:font-extrabold" onClick={triggerMenu}>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<button
				className={`fixed top-3 right-3 text-4xl cursor-pointer transition-colors ${
					menu ? "text-indigo-700" : ""
				}`}
				onClick={triggerMenu}
			>
				<HiOutlineMenuAlt3 />
			</button>
		</>
	);
}
