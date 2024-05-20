import Footer from "../components/Footer";
// 쇼 끝나고 씀
// import PhotoArticle from "../components/PhotoArticle";
// import PhotoArticle2 from "../components/PhotoArticle2";
import OrangePoster from "../assets/주황포스터.png";

function PhotoPage() {
  return (
    <div className='flex flex-col justify-between flex-1 '>
      {/* 이건 쇼끝나고 쓰는 것 */}
      {/* <main className="mb-[817px]">
        <PhotoArticle />
        <div className="mt-[254px]"></div>
        <PhotoArticle2 />
      </main> */}
      <div className="pt-[80px] flex flex-col overflow-hidden h-full w-full bg-[#D38050]">
        <div className="flex flex-col justify-center items-center mt-[5vh]">
          <p className="text-[15vw] leading-none text-center text-[#FBF9F8] font-['ft-activica-strong']">
            COMING
          </p>
          <p className="text-[15vw] leading-none text-center text-[#FBF9F8]  font-['ft-activica-strong']">
            SOON
          </p>
          <p className="text-[4vw] text-center text-[#FBF9F8] leading-none mt-[6vh] font-['ft-activica-strong']">
            2024. 05. 31 FRI. 4PM / 7PM
          </p>
          <p className="text-[4vw] text-center text-[#FBF9F8] mt-[1vh] leading-none font-['ft-activica-strong']">
            Kyunghee University
          </p>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center mt-[7vh] sm:text-sm">
            <p className="font-pretendard-medium text-[#FBF9F8] text-[1.5vw]">
              추후 본 페이지에서 패션쇼 영상 및 비하인드 사진을 만나보실 수 있습니다
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="max-w-full relative overflow-hidden">
            <a href="/">
              <img
                src={OrangePoster}
                alt="주황Poster"
                className="max-w-full h-auto object-contain"
                style={{ maxWidth: "100%", height: "full" }}
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PhotoPage;