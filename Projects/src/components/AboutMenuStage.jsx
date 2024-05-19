import TeamA from "../assets/About팀이미지/A조.jpg";
import TeamB from "../assets/About팀이미지/B조.jpg";
import TeamC from "../assets/About팀이미지/C조.jpg";
import TeamD from "../assets/About팀이미지/D조.jpg";
import TeamE from "../assets/About팀이미지/E조.jpg";
import TeamF from "../assets/About팀이미지/F조.jpg";
import TeamG from "../assets/About팀이미지/G조.jpg";
import { Link } from "react-router-dom";

function AboutMenuStage() {
  return (
    <div className="flex flex-col mt-[205px] md:mt-[150px] sm:mt-[60px] m:mt-[43px] gap-[50px] md:gap-[35px] sm:gap-[25px] m:gap-[15px] mb-[347px] md:mb-[280px] sm:mb-[200px] m:mb-[150px] ">
      <Link to="/teams/A">
        <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
          <p className="font-pretendard-regular text-[24px] md:text-[18px] sm:text-[14px] m:text-[10px]">TEAM A. ANEMOIA</p>
          <img src={TeamA} alt="teamA" className="w-full  bg-[#d1d1d1]" />
        </div>
      </Link>

      <Link to="/teams/B">
        <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
          <p className="font-pretendard-regular text-[24px] md:text-[18px] sm:text-[14px] m:text-[10px]">TEAM B. ODYSSEY</p>
          <img src={TeamB} alt="teamB" className="w-full  bg-[#d1d1d1]" />
        </div>
      </Link>

      <Link to="/teams/C">
        <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
          <p className="font-pretendard-regular text-[24px] md:text-[18px] sm:text-[14px] m:text-[10px]">TEAM C. Unbirthday</p>
          <img src={TeamC} alt="teamC" className="w-full bg-[#d1d1d1]" />
        </div>
      </Link>

      <Link to="/teams/D">
        <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
          <p className="font-pretendard-regular text-[24px] md:text-[18px] sm:text-[14px] m:text-[10px]">TEAM D. Lego</p>
          <img src={TeamD} alt="teamD" className="w-full bg-[#d1d1d1]" />
        </div>
      </Link >

      <Link to="/teams/E">
        <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
          <p className="font-pretendard-regular text-[24px] md:text-[18px] sm:text-[14px] m:text-[10px]">TEAM E. Endear</p>
          <img src={TeamE} alt="teamE" className="w-full bg-[#d1d1d1]" />
        </div>
      </Link >

      <Link to="/teams/F">
        <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
          <p className="font-pretendard-regular text-[24px] md:text-[18px] sm:text-[14px] m:text-[10px]">TEAM F. Soil</p>
          <img src={TeamF} alt="teamF" className="w-full bg-[#d1d1d1]" />
        </div>
      </Link >

      <Link to="/teams/G">
        <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
          <p className="font-pretendard-regular text-[24px] md:text-[18px] sm:text-[14px] m:text-[10px]">TEAM G. 籠中鳥</p>
          <img src={TeamG} alt="teamG" className="w-full bg-[#d1d1d1]" />
        </div>
      </Link >
    </div >
  );
}

export default AboutMenuStage;