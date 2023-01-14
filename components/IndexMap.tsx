import { motion, Variants } from "framer-motion";
import React, { MutableRefObject } from "react";
import tw from "twin.macro";
import PageLink from "./PageLink";

const Container = tw.section`h-screen py-2`;
const PagesWrapper = tw(
  motion.div
)`h-full flex flex-col items-stretch justify-evenly gap-y-9 p-11`;

const containerVariants: Variants = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
  pagesRef: MutableRefObject<null | HTMLDivElement>;
};

const IndexMap = ({ pagesRef }: Props) => {
  return (
    <Container ref={pagesRef} id="pages">
      <PagesWrapper
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        <PageLink title="work" link="/work" />
        <PageLink title="me" link="/about" />
        <PageLink title="contact" link="/contact" />
      </PagesWrapper>
    </Container>
  );
};

export default IndexMap;
