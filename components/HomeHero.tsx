import { motion, spring, Variants } from "framer-motion";
import tw from "twin.macro";
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsChevronCompactDown,
} from "react-icons/bs";
import { MutableRefObject } from "react";

type Props = {
  mail: string;
  linkedIn: string;
  gitHub: string;
  twitter: string;
  pagesRef: MutableRefObject<null | HTMLDivElement>;
};

const Container = tw.div`min-h-screen flex flex-col justify-evenly gap-y-2`;
//Name Components
const NameWrapper = tw.h1`w-full max-w-[900px] mx-auto font-Cinzel flex flex-col px-3 text-8xl font-medium sm:text-9xl`;
const FirstName = tw(
  motion.span
)`flex gap-x-[0.5rem] justify-start overflow-hidden pb-2 md:gap-x-[2rem]`;
const LastName = tw(
  motion.span
)`flex gap-x-[0.5rem] justify-end overflow-hidden pb-2 md:gap-x-[2rem]`;
// Links and Sentence Components
const HeroContentWrapper = tw.div`flex gap-x-4 w-full max-w-[900px] mx-auto`;
const LinksWrapper = tw(
  motion.div
)`text-3xl flex flex-col gap-y-9 overflow-hidden pl-7`;
const LinkAnchor = tw(motion.a)`transition-colors hover:text-teal-600`;
const SentenceWrapper = tw(
  motion.div
)`flex-1 text-2xl flex flex-col items-end justify-center gap-y-10 pr-7`;
const ButtonWrapper = tw(motion.a)`w-[150px] h-[50px] flex cursor-pointer`;
const MailButton = tw(
  motion.div
)`border-[2px] border-teal-600 text-center leading-[45px] flex-1`;
const ButtonShadow = tw(
  motion.div
)`absolute border-[2px] border-teal-700/50 w-[150px] h-[50px] -z-10`;
//More Button Components
const MoreWrapper = tw(
  motion.button
)`absolute bottom-5 left-[50%] w-[150px] mx-auto flex flex-col items-center text-xl cursor-pointer`;
const AnimCaret = tw(motion.span)`absolute translate-y-full`;

const nameWrapperVariants: Variants = {
  hidden: { x: 200 },
  show: {
    x: 0,
    transition: {
      duration: 1.3,
      ease: [0.25, 0.01, 0.03, 0.97],
      staggerChildren: 0.1,
    },
  },
};

const nameCharVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 400,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        duration: 0.7,
        ease: [0.25, 0.01, 0.03, 0.97],
      },
      opacity: {
        duration: 1.1,
        ease: [0.25, 0.01, 0.03, 0.97],
      },
    },
  },
};

const linksWrapperVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const linkItemsVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -150,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      x: {
        duration: 1,
        ease: [0.25, 0.01, 0.03, 0.97],
      },
      opacity: {
        duration: 1,
      },
    },
  },
};

const sentenceWrapperVariants: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      x: {
        duration: 1,
        ease: [0.25, 0.01, 0.03, 0.97],
      },
      opacity: {
        duration: 1,
      },
    },
  },
};

const buttonShadowVariants: Variants = {
  rest: {},
  tap: {
    x: 0,
    y: 0,
    backgroundColor: "rgba(15 118 110 0.3)",
  },
  hover: {
    x: 4,
    y: 4,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 15,
    },
  },
};

const buttonVariants: Variants = {
  rest: {},
  tap: {
    x: 0,
    y: 0,
    backgroundColor: "rgba(15 118 110 0.3)",
  },
  hover: {
    x: -4,
    y: -4,
    backgroundColor: "rgba(102 205 170 0.3)",
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 15,
    },
  },
};

const moreWrapperVariants: Variants = {
  hidden: {
    x: "-50%",
    y: "-100px",
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: "-50%",
    y: 0,
    color: "rgba(19, 78, 74, 0.4)",
    transition: {
      y: {
        type: "spring",
        stiffness: 350,
        damping: 15,
      },
      opacity: {
        duration: 1,
        delay: 0.8,
      },
    },
  },
  hover: {
    y: "-5px",
    color: "rgba(19, 78, 74, 1)",
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 15,
    },
  },
};

const caretVariants: Variants = {
  show: { y: "32px", opacity: 0 },
  hover: {
    opacity: 1,
    y: "42px",
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 15,
    },
  },
};

const firstName = "Tanay";
const lastName = "Lodh";

const HomeHero = ({ mail, linkedIn, gitHub, twitter, pagesRef }: Props) => {
  const executeScroll = () => {
    if (pagesRef && pagesRef.current)
      pagesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <NameWrapper>
        <FirstName
          variants={nameWrapperVariants}
          initial="hidden"
          animate="show"
        >
          {firstName.split("").map((char, index) => (
            <motion.span key={index + char} variants={nameCharVariants}>
              {char}
            </motion.span>
          ))}
        </FirstName>
        <LastName
          variants={nameWrapperVariants}
          initial="hidden"
          animate="show"
        >
          {lastName.split("").map((char, index) => (
            <motion.span key={index + char} variants={nameCharVariants}>
              {char}
            </motion.span>
          ))}
        </LastName>
      </NameWrapper>
      <HeroContentWrapper>
        <LinksWrapper
          variants={linksWrapperVariants}
          initial="hidden"
          animate="show"
        >
          <LinkAnchor href={gitHub} variants={linkItemsVariants}>
            <BsGithub />
          </LinkAnchor>
          <LinkAnchor href={linkedIn} variants={linkItemsVariants}>
            <BsLinkedin />
          </LinkAnchor>
          <LinkAnchor href={twitter} variants={linkItemsVariants}>
            <BsTwitter />
          </LinkAnchor>
        </LinksWrapper>
        <SentenceWrapper
          variants={sentenceWrapperVariants}
          initial="hidden"
          animate="show"
        >
          <p>I build human interfaces for the web.</p>
          <ButtonWrapper
            href={`mailto:${mail}`}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            animate="rest"
          >
            <MailButton variants={buttonVariants}>Say Hello!</MailButton>
            <ButtonShadow variants={buttonShadowVariants} />
          </ButtonWrapper>
        </SentenceWrapper>
      </HeroContentWrapper>
      <MoreWrapper
        variants={moreWrapperVariants}
        initial="hidden"
        animate="show"
        whileHover="hover"
        onClick={executeScroll}
      >
        <span>More</span>
        <BsChevronCompactDown />
        <AnimCaret variants={caretVariants}>
          <BsChevronCompactDown />
        </AnimCaret>
      </MoreWrapper>
    </Container>
  );
};

export default HomeHero;
