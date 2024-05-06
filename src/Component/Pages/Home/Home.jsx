import Navbar from "../../Layout/Navbar/Navbar";
import MarqueeSlider from "../../Marquee/MarqueeSlider";
import AboutUs from "../AboutUs/AboutUs";
import HappyClient from "../HappyClient/HappyClient";
import LatestVlogs from "../LatestVlogs/LatestVlogs";
import Portfolio from "../Portfolio/Portfolio";
import Service from "../Service/Service";
import Test from "../Test/Test";
import Footer from "./../../Layout/Footer/Footer";
import Testimonial from "./../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MarqueeSlider></MarqueeSlider>
      <Service></Service>
      <AboutUs></AboutUs>
      <Portfolio></Portfolio>
      <HappyClient></HappyClient>
      <Testimonial></Testimonial>
      <Test></Test>
      <LatestVlogs></LatestVlogs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
