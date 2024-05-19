import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import newMainPoster from "../assets/아카이브포스터.png";

function Archive() {
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.hash) {
  //     let elem = document.getElementById(location.hash.slice(1));
  //     if (elem) {
  //       elem.scrollIntoView({ behavior: "smooth" });
  //     }
  //   } else {
  //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   }
  // }, [location,]);

  return (
    <div className="flex flex-col overflow-hidden bg-[#fbf9f8] h-full w-full">
      <div className="flex flex-col justify-center items-center mt-[5vh]">
        <p className="text-[15vw] leading-none text-center text-[#cd6629]  font-['ft-activica-strong']">
          COMING
        </p>
        <p className="text-[15vw] leading-none text-center text-[#cd6629]  font-['ft-activica-strong']">
          SOON
        </p>
        <p className="text-[4vw] text-center text-[#cd6629] leading-none mt-[6vh] font-['ft-activica-strong']">
          2024. 05. 31 FRI. 4PM / 7PM
        </p>
        <p className="text-[4vw] text-center text-[#cd6629] mt-[1vh] leading-none font-['ft-activica-strong']">
          Kyunghee University
        </p>
      </div>
      <div className="">
        <div className="flex flex-col justify-center items-center mt-[7vh] sm:text-sm">
          <p className="font-pretendard-medium text-black text-[1.5vw]">
            추후 본 페이지에서 작품 사진을 만나보실 수 있습니다
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="max-w-full relative overflow-hidden">
          <a href="/">
            <img
              src={newMainPoster}
              alt="newMainPoster"
              className="max-w-full h-auto object-contain"
              style={{ maxWidth: "100%", height: "full" }}
            />
          </a>
        </div>
      </div>
    </div>
  );

}
export default Archive; 
