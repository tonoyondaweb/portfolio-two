import { motion } from "framer-motion";
import { GetStaticProps, NextPage } from "next";
import { useRef } from "react";
import tw from "twin.macro";
import HomeHero from "../components/HomeHero";
import IndexMap from "../components/IndexMap";
import { sanityClient } from "../utils/sanity";

interface Props {
  links: {
    email: string;
    linkedin: string;
    github: string;
    twitter: string;
  };
}

const Home: NextPage<Props> = ({ links }) => {
  const pagesRef = useRef(null);
  const { email, linkedin, github, twitter } = links;
  return (
    <motion.div>
      <HomeHero
        pagesRef={pagesRef}
        mail={email}
        linkedIn={linkedin}
        gitHub={github}
        twitter={twitter}
      />
      <IndexMap pagesRef={pagesRef} />
    </motion.div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const links = await sanityClient.fetch(`*[_type == "socials"][0]`);
  return {
    props: { links },
  };
};
