// src/components/WhiteArticle.js
import WprojPoster from "../assets/WprojPoster.png";
import ImageLoader from "./ImageLoader";
import Skeleton from "./Skeleton";

const importedImages = import.meta.glob('../assets/화이트프로젝트 사진/*.jpg', { eager: true });
const images = Object.values(importedImages).map((img) => ({ img: img.default }));
console.log(images);  // 이미지 경로를 확인하기 위해 로그 추가

function WhiteArticle() {
  return (
    <div className="flex w-full flex-col justify-center items-center pt-[80px] md:pt-[40px] sm:pt-[40px] m:pt-[40px]">
      {/* 제목 */}
      <p className="font-['ft-activica-strong'] text-[150px] xl:text-[115px] lg:text-[88px] md:text-[68px] sm:text-[40px] m:text-[35px] mt-[231px] xl:mt-[177px] lg:mt-[136px] md:mt-[104px] sm:mt-[80px] m:mt-[61px] whitespace-nowrap">
        THE WHITE PROJECT
      </p>

      {/* 유튜브 영상 */}
      <div className="youtube w-full pt-[56.25%] relative mt-[178px] xl:mt-[136px] lg:mt-[104px] md:mt-[80px] sm:mt-[60px] m:mt-[40px] mb-[146px] xl:mb-[112px] lg:mb-[86px] md:mb-[66px] sm:mb-[50px] m:mb-[38px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jGJNxhUP61I?si=jEeb8eHPM3O-u9Wi"
          title="YouTube video player"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      {/* 본문 */}
      <div className="flex flex-col justify-between px-[360px] xl:px-[200px] lg:px-[170px] md:px-[100px] sm:px-[30px] m:px-[20px] mb-[333px] xl:mb-[256px] lg:mb-[197px] md:mb-[151px] sm:mb-[116px] m:mb-[90px]">
        <div className="flex">
          <img
            src={WprojPoster}
            alt="whiteprojectposter"
            className="w-[60%] mr-[40px] xl:mr-[31px] lg:mr-[23px] md:mr-[18px] sm:mr-[14px] m:mr-[11px]"
          />
          <div className="w-full font-pretendard-regular text-[16px] xl:text-[14px] lg:text-[12px] md:text-[10px] sm:text-[8px] m:text-[7px]">
            <p>
              The White Project를 통해 2024년 경희대학교 의상학과 졸업 패션쇼의 과정을
              공개한다. 작품들은 컬러와 소재가 배제된 채 광목으로 완성되었다. 색이
              입혀지지 않은 작품들은 보는 이로 하여금 완성된 모습을 상상하고,
              디자이너들의 고민을 느낄 수 있는 여백을 제공한다. 화이트 프로젝트
              컬렉션에는 디자이너의 책임과 옷의 가치를 전달하기 위한 45인의
              디자이너의 노력이 담겨있다. LAST-ING을 재해석한 7가지 테마를 감상하며
              각자 지속하는 힘에 대해 생각해보는 시작점이 되기를 바란다.
            </p>
            <br />
            <p>
              Through The White Project, the 2024 Graduation Fashion Show of the
              Department of Clothing and Textiles at KyungHee University shows its
              creative process. The garments, crafted with muslin, invite viewers to
              imagine the finished designs, providing space to appreciate the
              designers' ideas. This collection highlights the hard work of 45
              designers to show the ethical responsibilities of their profession and
              the true value of clothing. By exploring the seven themes that
              reinterpret the idea of "LAST-ING," this project aims to encourage
              thinking about lasting impact and sustainability in fashion.
            </p>
          </div>
        </div>
        <div className="mt-[5vw] w-full grid grid-cols-3 gap-x-[3vw] gap-y-[3vw] items-center">
          {images.map((image, idx) => (
            <ImageLoader key={idx} fetcher={() => image.img} className="object-cover w-full aspect-[3/4]" >
              <Skeleton className="w-full aspect-[3/4]" />
            </ImageLoader>
          ))}
        </div>
      </div>
      <div className="mb-[10vw]"></div>
    </div>
  );
}

export default WhiteArticle;
