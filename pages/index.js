import Head from "next/head";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi"

export default function Index() {
  return (
    <>
      <Head>
        <title>Tanay Lodh - Home</title>
        <meta charSet="UTF-8" />
      </Head>
      <section className="h-screen grid place-items-center">
        <div className="w-[90%] max-w-[700px] mx-auto px-5 h-[80%] max-h-[700px] flex flex-col justify-evenly">
          <h2 className="text-4xl font-bold md:text-[3.5em]">Hey! &#128075;</h2>
          <h1 className="text-indigo-300 font-semibold text-xl md:text-[2em]">My name is <span className="text-5xl font-extrabold block md:text-[3em]">Tanay Lodh</span></h1>
          <p className="text-xl font-bold md:text-[2em]">Front-end Dev</p>
          <Link href="/about" className="w-max px-5 py-3 rounded-full flex items-center gap-x-5 text-xl text-slate-300 bg-indigo-400/50 cursor-pointer transition-all hover:gap-x-[70px] hover:text-white">Learn more about me
            < HiArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
