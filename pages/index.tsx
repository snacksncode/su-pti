import Header from "../components/Header";
import Hero from "../components/Hero";
import LuckyNumber from "../components/LuckyNumber";
import Team from "../components/Team";
import Footer from "../components/Footer";

import readData from "../components/readData";

const Index = ({ data }: { data: Informations }) => {
  return (
    <>
      <Header />
      <Hero bgImg={data.bgImg} />
      <Team folks={data.team} />
      <LuckyNumber number={data.luckyNumber} />
      <Footer />
    </>
  );
};

export const getServerSideProps = () => ({
  props: {
    data: readData(),
  },
});

export default Index;
