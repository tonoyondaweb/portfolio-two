import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
	const variants = {
		initial: {
			opacity: 0,
			y: 500,
		},
		enter: {
			opacity: 1,
			y: 0,
		},
		exit: {
			opacity: 0,
			y: -500,
		},
	};

	return (
		<Layout>
			<AnimatePresence
				exitBeforeEnter
				onExitComplete={() => window.scrollTo(0, 0)}
			>
				<motion.div
					key={router.route}
					initial="initial"
					animate="enter"
					exit="exit"
					variants={variants}
					transition={{ ease: "easeOut", duration: 0.3 }}
				>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
		</Layout>
	);
}

export default MyApp;
