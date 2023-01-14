import { motion, Variants } from "framer-motion";
import React from "react";
import tw from "twin.macro";

type Props = {
  title: string;
  link: string;
};

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        duration: 1,
        ease: [0.25, 0.01, 0.03, 0.97],
      },
      opacity: {
        duration: 1,
      },
    },
  },
  hover: {},
};

const hoverVariants: Variants = {
  show: {
    x: 0,
    y: 0,
  },
  hover: {
    x: 5,
    y: 5,
  },
};

const nestedHoverVariants: Variants = {
  show: {
    x: 0,
    y: 0,
  },
  hover: {
    x: -15,
    y: -15,
    backgroundColor: "rgba(15 118 110 0.3)",
    color: "rgb(191 255 225)",
  },
};

const titleVariants: Variants = {
  show: { x: 0, y: 0 },
  hover: { x: 10, y: 10 },
};

const Container = tw(
  motion.a
)`shrink-0 text-4xl [text-transform: capitalize] cursor-pointer font-Cinzel flex-1`;

const HoverWrapper = tw(
  motion.div
)`border-[2px] border-teal-700/60 w-full h-full flex justify-center items-center`;

const HoverNestedWrapper = tw(
  motion.div
)`border-[2px] border-teal-700 w-full h-full flex justify-center items-center p-4`;

const PageLink = ({ title, link }: Props) => {
  return (
    <Container href={link} variants={containerVariants}>
      <HoverWrapper variants={hoverVariants} whileHover="hover">
        <HoverNestedWrapper variants={nestedHoverVariants}>
          <motion.span variants={titleVariants}>{title}</motion.span>
        </HoverNestedWrapper>
      </HoverWrapper>
    </Container>
  );
};

export default PageLink;
