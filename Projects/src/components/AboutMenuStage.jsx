import TeamA from "../assets/조별이미지/A조/A조.jpg";
import TeamB from "../assets/조별이미지/B조/B조.jpg";
import TeamC from "../assets/조별이미지/C조/C조.jpg";
import TeamD from "../assets/조별이미지/D조/D조.jpg";
import TeamE from "../assets/조별이미지/E조/E조.jpg";
import TeamF from "../assets/조별이미지/F조/F조.jpg";
import TeamG from "../assets/조별이미지/G조/G조.jpg";
import { Link } from "react-router-dom";

function AboutMenuStage() {
  return (
    <div className="flex flex-col mt-[205px] gap-[50px] mb-[347px] ">
      <Link to="/teams/A">
        <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
          <p className="font-pretendard-regular text-[24px]">TEAM A. ANEMOIA</p>
          <img src={TeamA} alt="teamA" className="w-full h-[300px] bg-[#d1d1d1]" />
        </div>
      </Link>

      <Link to="/teams/B">
        <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
          <p className="font-pretendard-regular text-[24px]">TEAM B. ODYSSEY</p>
          <img src={TeamB} alt="teamB" className="w-full h-[300px] bg-[#d1d1d1]" />
        </div>
      </Link>

      <Link to="/teams/C">
        <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
          <p className="font-pretendard-regular text-[24px]">TEAM C. Unbirthday</p>
          <img src={TeamC} alt="teamC" className="w-full h-[300px] bg-[#d1d1d1]" />
        </div>
      </Link>

      <Link to="/teams/D">
        <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
          <p className="font-pretendard-regular text-[24px]">TEAM D. Lego</p>
          <img src={TeamD} alt="teamD" className="w-full h-[300px] bg-[#d1d1d1]" />
        </div>
      </Link >

      <Link to="/teams/E">
        <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
          <p className="font-pretendard-regular text-[24px]">TEAM E. Endear</p>
          <img src={TeamE} alt="teamE" className="w-full h-[300px] bg-[#d1d1d1]" />
        </div>
      </Link >

      <Link to="/teams/F">
        <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
          <p className="font-pretendard-regular text-[24px]">TEAM F. Soil</p>
          <img src={TeamF} alt="teamF" className="w-full h-[300px] bg-[#d1d1d1]" />
        </div>
      </Link >

      <Link to="/teams/G">
        <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
          <p className="font-pretendard-regular text-[24px]">TEAM G. 籠中鳥</p>
          <img src={TeamG} alt="teamG" className="w-full h-[300px] bg-[#d1d1d1]" />
        </div>
      </Link >
    </div >
  );
}

export default AboutMenuStage;