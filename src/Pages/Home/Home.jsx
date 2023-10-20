import Accordion from "../../Components/Accordion/Accordion";
import Banner from "../../Components/Header/Banner";
import Studios from "./Studios/Studios";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Studios></Studios>
      <Accordion></Accordion>
    </div>
  );
};

export default Home;
