import Menu from "./Menu";

export default function Layout({ children }) {
	return (
		<>
			<Menu />
			<main className="max-w-[1200px] mx-auto">{children}</main>
		</>
	);
}
