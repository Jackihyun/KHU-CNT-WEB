import { useParams } from "react-router-dom";
import { DesignerData } from "../data/Designers";
import ImageLoader from "../components/ImageLoader";
import Skeleton from "../components/Skeleton";
import Footer from "../components/Footer";

function DesignerDetailPage() {
  const { name } = useParams();
  const designer = DesignerData.find(
    (d) => d.name === decodeURIComponent(name)
  );

  if (!designer) {
    console.log(`디자이너를 찾을 수 없습니다: ${name}`);
    return <div>디자이너를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex flex-col justify-between flex-1 ">
      <div className="flex flex-col justify-center items-center bg-[#CD6629]">
        <p className="mt-[80px] xl:mt-[80px] lg:mt-[70px] md:mt-[60px] sm:mt-[50px] m:mt-[40px] pt-[50px] text-[9vw] text-center text-[#fbf9f8] font-['ft-activica-strong'] text-nowrap">
          {designer.ename}
        </p>
        <p className="w-full text-[60px] xl:text-[60px] lg:text-[50px] md:text-[40px] font-pretendard-medium text-center mt-[4vw] mb-[1%] text-[#fbf9f8] sm:text-[30px] m:text-[25px]">
          {designer.name}
        </p>
        <p className="w-full text-[24px] xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[18px] m:text-[16px] font-pretendard-regular text-center mb-[1%] text-[#FBF9F8]">
          {designer.team}
        </p>
        <p className="w-full text-[24px] xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[18px] m:text-[16px]  font-pretendard-regular text-center  text-[#FBF9F8] sm:text-lg m:text-md">
          {designer.email}
        </p>
        <p className="w-full text-[24px] xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[18px] m:text-[16px]  font-pretendard-regular text-center mb-[5%] text-[#FBF9F8] sm:text-lg m:text-md">
          instagram {designer.insta}
        </p>
      </div>
      <div className="mt-[100px] xl:mt-[90px] lg:mt-[70px] md:mt-[60px] sm:mt-[50px] m:mt-[40px] px-[360px] xl:px-[250px] lg:px-[200px] md:px-[100px] sm:px-[20px] m:px-[20px] flex flex-col mb-[450px] xl:mb-[400px] lg:mb-[350px] md:mb-[250px] sm:mb-[150px] m:mb-[100px]">
        <p className="text-[28px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[21px] m:text-[20px] mb-[30px] font-['ft-activica-strong']">
          ABOUT DESINGER
        </p>
        <div className="flex">
          <div className="w-[33.3%] overflow-hidden mr-[29px] sm:mr-[10px] m:mr-[10px]">
            <ImageLoader fetcher={() => designer.src}>
              <Skeleton className="w-full aspect-[3/4]" />
            </ImageLoader>
          </div>
          <div className="w-[66.6%]">
            <p className="font-pretendard-semibold text-[18px] xl:text-[18px] lg:text-[16px] md:text-[15px] sm:text-[13px] m:text-[12px]">
              Q. 간단한 자기소개 부탁드립니다. <br />
              <br />
            </p>
            <p className="font-pretendard-regular text-[18px] xl:text-[18px] lg:text-[16px] md:text-[15px] sm:text-[13px] m:text-[12px]">
              A. {designer.introduce}
              <br />
              <br />
            </p>
            <p className="font-pretendard-semibold text-[18px] xl:text-[18px] lg:text-[16px] md:text-[15px] sm:text-[13px] m:text-[12px]">
              Q. {designer.qna}
              <br />
              <br />
            </p>
            <p className="font-pretendard-regular text-[18px] xl:text-[18px] lg:text-[16px] md:text-[15px] sm:text-[13px] m:text-[12px] whitespace-pre-wrap">
              A. {designer.point}
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className="mb-[100px]">
          <p className="text-[28px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[21px] m:text-[20px] mt-[100px] mb-[30px] font-['ft-activica-strong']">
            LOOK 1
          </p>
          <div className="w-full flex justify-center items-center overflow-hidden mb-[49px] xl:mb-[49px] lg:mb-[45px] md:mb-[41px] sm:mb-[36px] m:mb-[32px]">
            <ImageLoader fetcher={() => designer.images[0]}>
              <Skeleton className="w-full aspect-[3/4]" />
            </ImageLoader>
          </div>
          <div className="flex flex-col gap-[30px] xl:gap-[30px] lg:gap-[26px] md:gap-[22px] sm:gap-[18px] m:gap-[12px]">
            <div className="flex gap-[30px] xl:gap-[30px] lg:gap-[26px] md:gap-[22px] sm:gap-[18px] m:gap-[12px]">
              <div className="w-full overflow-hidden">
                <ImageLoader fetcher={() => designer.images[1]}>
                  <Skeleton className="w-full aspect-[3/4]" />
                </ImageLoader>
              </div>
              <div className="w-full overflow-hidden">
                <ImageLoader fetcher={() => designer.images[2]}>
                  <Skeleton className="w-full aspect-[3/4]" />
                </ImageLoader>
              </div>
            </div>
            <div className="flex gap-[30px] xl:gap-[30px] lg:gap-[26px] md:gap-[22px] sm:gap-[18px] m:gap-[12px]">
              <div className="w-full overflow-hidden">
                <ImageLoader fetcher={() => designer.images[3]}>
                  <Skeleton className="w-full aspect-[3/4]" />
                </ImageLoader>
              </div>
              <div className="w-full overflow-hidden">
                <ImageLoader fetcher={() => designer.images[4]}>
                  <Skeleton className="w-full aspect-[3/4]" />
                </ImageLoader>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[100px]">
          <p className="text-[28px] xl:text-[24px] lg:text-[24px] md:text-[22px] sm:text-[21px] m:text-[20px] mb-[30px] font-['ft-activica-strong']">
            LOOK 2
          </p>
          <div className="w-full flex justify-center items-center overflow-hidden mb-[49px] xl:mb-[49px] lg:mb-[45px] md:mb-[41px] sm:mb-[36px] m:mb-[32px]">
            <ImageLoader fetcher={() => designer.images[5]}>
              <Skeleton className="w-full aspect-[3/4]" />
            </ImageLoader>
          </div>
          <div className="flex flex-col gap-[30px] xl:gap-[30px] lg:gap-[26px] md:gap-[22px] sm:gap-[18px] m:gap-[12px]">
            <div className="flex gap-[30px] xl:gap-[30px] lg:gap-[26px] md:gap-[22px] sm:gap-[18px] m:gap-[12px]">
              <div className="w-full overflow-hidden">
                <ImageLoader fetcher={() => designer.images[6]}>
                  <Skeleton className="w-full aspect-[3/4]" />
                </ImageLoader>
              </div>
              <div className="w-full overflow-hidden">
                <ImageLoader fetcher={() => designer.images[7]}>
                  <Skeleton className="w-full aspect-[3/4]" />
                </ImageLoader>
              </div>
            </div>
            <div className="flex gap-[30px] xl:gap-[30px] lg:gap-[26px] md:gap-[22px] sm:gap-[18px] m:gap-[12px]">
              <div className="w-full overflow-hidden">
                <ImageLoader fetcher={() => designer.images[8]}>
                  <Skeleton className="w-full aspect-[3/4]" />
                </ImageLoader>
              </div>
              <div className="w-full overflow-hidden">
                <ImageLoader fetcher={() => designer.images[9]}>
                  <Skeleton className="w-full aspect-[3/4]" />
                </ImageLoader>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DesignerDetailPage;
