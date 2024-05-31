import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const Intro = () => {
  return (
    <div className="w-[430px] h-screen flex flex-col justify-center items-center bg-[#F6F5FA]">
      <Carousel />
      <Link
        to="/landingPage"
        className="bg-[#1232D7] text-white font-semibold px-[58px] py-[11px] rounded-lg mt-24 hover:bg-[#0D259F]"
      >
        Gabung Sekarang
      </Link>
    </div>
  );
};

export default Intro;
