import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Archive() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location,]);

  return (
    <div className="flex flex-col  bg-[#1A1A1A] mb-[2440px] xl:mb-[1877px] lg:mb-[1444px] md:mb-[1110px] sm:mb-[854px] m:mb-[657px]">
      <div className="flex flex-col justify-center text-center items-center my-[85px] xl:my-[65px] lg:my-[50px] md:my-[39px] sm:my-[30px] m:my-[23px]">
        <p className="text-white leading-none text-[285px] xl:text-[219px] lg:text-[169px] md:text-[130px] sm:text-[100px] m:text-[77px] font-['ft-activica-strong']">COMING</p>
        <p className="text-white leading-none text-[285px] xl:text-[219px] lg:text-[169px] md:text-[130px] sm:text-[100px] m:text-[77px] font-['ft-activica-strong'] mb-[67px]">SOON</p>
        <p className="text-white leading-none text-[64px] xl:text-[49px] lg:text-[38px] md:text-[29px] sm:text-[22px] m:text-[17px] font-['ft-activica-strong']">2024.05.31 FRI.4PM / 7PM</p>
        <p className="text-white leading-none text-[64px] xl:text-[49px] lg:text-[38px] md:text-[29px] sm:text-[22px] m:text-[17px] font-['ft-activica-strong']">KYUNGHEE UNIVERSITY</p>
      </div>
      <div className=" bg-white">
        <div className="flex flex-col justify-center items-center mt-[20px] mb-[20px]">
          <p className="text-[15px] font-['PT_MONO']">추후 이 페이지에서 작품 사진을 만나보실 수 있습니다</p>
        </div>
      </div>
      <div id="targetDiv" className="flex flex-col justify-center items-center">
        <p className="text-white text-[222px] xl:text-[171px] lg:text-[131px] md:text-[101px] sm:text-[77.8px] m:text-[60px] leading-none mt-[50px] xl:mt-[38px] lg:mt-[30px] md:mt-[23px] sm:mt-[18px] m:mt-[13px] mb-[133px] xl:mb-[102px] lg:mb-[79px] md:mb-[61px] sm:mb-[47px] m:mb-[36px] font-['ft-activica-strong']">INVITATION</p>
        <p className="text-white text-[100px] xl:text-[77px] lg:text-[59px] md:text-[45.5px] sm:text-[35px] m:text-[27px] leading-none mb-[50px] font-['ft-activica-strong']">오시는길</p>
        <p className="text-white text-[100px] xl:text-[77px] lg:text-[59px] md:text-[45.5px] sm:text-[35px] m:text-[27px] leading-none mb-[364px] xl:mb-[280px] lg:mb-[215px] md:mb-[166px] sm:mb-[127px] m:mb-[98px] font-['ft-activica-strong']">일시 장소</p>
      </div>
    </div>

  );
}

export default Archive;