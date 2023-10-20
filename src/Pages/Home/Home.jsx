import Accordion from "../../Components/Accordion/Accordion";
import Banner from "../../Components/Header/Banner";
import Studios from "./Studios/Studios";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Studios></Studios>
      <Accordion></Accordion>
      <div className="my-10 flex gap-5 flex-col-reverse md:flex-row-reverse lg:flex-row justify-between items-center max-w-screen-xl mx-auto px-2">
        <div>
          <img src="https://i.ibb.co/ZJzMG1C/image6.png" alt="" />
        </div>
        <div>
          <p className="text-4xl lg:text-5xl font-extrabold text-center">
            Download Our mobile app from playstroe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
