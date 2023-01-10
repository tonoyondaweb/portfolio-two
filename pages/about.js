import Head from "next/head";
import Link from "next/link";
import { sanityClient } from "../sanity";
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
      <section className="min-h-screen mt-14 grid items-center px-11 lh:mt-0">
        <motion.div
          className="h-[90%] flex flex-col justify-center gap-y-2 md:ml-11"
          variants={container}
          initial="inital"
          animate="animate"
        >
          <motion.h1
            className="text-[3.5em] sticky top-14 -z-10 font-bold md:text-[5em] lg:text-[10em]"
            variants={item}
          >
            About Me.
          </motion.h1>
          <div
            className="bg-gray-900 mt-6
shadow-[0_1px_10px_15px] shadow-gray-900"
          >
            <motion.h2 className="font-semibold text-2xl mb-5" variants={item}>
              {intro}
            </motion.h2>
            <motion.p className="text-lg max-w-[900px]" variants={item}>
              {text}
            </motion.p>
            <motion.div className="space-y-5 mt-11" variants={item}>
              <h2 className="font-semibold text-xl bg-slate-700 w-max px-3 py-1 rounded-full">
                Skills
              </h2>
              <ul className="flex flex-wrap ml-2">
                {skills.map((skill, index) => (
                  <>
                    <li key={index}> {skill} </li>
                    <span className="mx-2 last:hidden"> / </span>
                  </>
                ))}
              </ul>
            </motion.div>
            <motion.button className="mt-11 mb-11" variants={item}>
              <Link
                href="/work"
                scroll={false}
                className="w-max px-5 py-3 rounded-full flex items-center gap-x-5 text-xl text-slate-300 bg-indigo-400/50 cursor-pointer transition-all hover:gap-x-[100px] hover:text-white"
              >
                Check out my work!
                <HiArrowRight />
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const about = await sanityClient.fetch(`*[_type == "about"][0]`);

  return {
    props: {
      intro: about.intro,
      text: about.text,
      skills: about.skills,
    },
    revalidate: 60
  };
}
