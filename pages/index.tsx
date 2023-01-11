import { NextPage } from "next";
import tw from "twin.macro";

interface Props {}

const Container = tw.div`h-screen grid place-items-center text-2xl font-bold tracking-widest`;
const Home: NextPage<Props> = ({}) => {
  return (
    <>
      <Container>REDESIGN</Container>
    </>
  );
};

export default Home;
