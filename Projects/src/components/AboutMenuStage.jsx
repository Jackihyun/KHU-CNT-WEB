import TeamA from "../assets/조별이미지/A조.jpg";
import TeamB from "../assets/조별이미지/B조.jpg";
import TeamC from "../assets/조별이미지/C조.jpg";
import TeamD from "../assets/조별이미지/D조.jpg";
import TeamE from "../assets/조별이미지/E조.jpg";
import TeamF from "../assets/조별이미지/F조.jpg";
import TeamG from "../assets/조별이미지/G조.jpg";

function AboutMenuStage() {
  return (
    <div className="flex flex-col mt-[205px] gap-[50px] mb-[347px] ">
      <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
        <p className="font-pretendard-regular text-[24px]">TEAM A. ANEMOIA</p>
        <img src={TeamA} alt="teamA" className="w-full h-[300px] bg-[#d1d1d1]" />
      </div>
      <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
        <p className="font-pretendard-regular text-[24px]">TEAM B. ODYSSEY</p>
        <img src={TeamB} alt="teamB" className="w-full h-[300px] bg-[#d1d1d1]" />
      </div>
      <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
        <p className="font-pretendard-regular text-[24px]">TEAM C. ANEMOIA</p>
        <img src={TeamC} alt="teamC" className="w-full h-[300px] bg-[#d1d1d1]" />
      </div>
      <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
        <p className="font-pretendard-regular text-[24px]">TEAM D. ANEMOIA</p>
        <img src={TeamD} alt="teamD" className="w-full h-[300px] bg-[#d1d1d1]" />
      </div>
      <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
        <p className="font-pretendard-regular text-[24px]">TEAM E. ANEMOIA</p>
        <img src={TeamE} alt="teamE" className="w-full h-[300px] bg-[#d1d1d1]" />
      </div>
      <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
        <p className="font-pretendard-regular text-[24px]">TEAM F. ANEMOIA</p>
        <img src={TeamF} alt="teamF" className="w-full h-[300px] bg-[#d1d1d1]" />
      </div>
      <div className="flex flex-col justify-center items-end hover:scale-105 duration-200">
        <p className="font-pretendard-regular text-[24px]">TEAM G. ANEMOIA</p>
        <img src={TeamG} alt="teamG" className="w-full h-[300px] bg-[#d1d1d1]" />
      </div>
    </div>
  );
}

export default AboutMenuStage;