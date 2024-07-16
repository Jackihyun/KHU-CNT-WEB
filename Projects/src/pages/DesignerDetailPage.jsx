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
        <p className="mt-[80px] pt-[50px] text-[9vw] text-center text-[#fbf9f8] font-['ft-activica-strong'] text-nowrap">
          {designer.ename}
        </p>
        <p className="w-full text-[60px] font-pretendard-medium text-center mt-[4vw] mb-[1%] text-[#fbf9f8] sm:text-[40px] m:text-[35px]">
          {designer.name}
        </p>
        <p className="w-full text-[24px] font-pretendard-regular text-center mb-[1%] text-[#FBF9F8] sm:text-lg m:text-md">
          {designer.team}
        </p>
        <p className="w-full text-[24px] font-pretendard-regular text-center  text-[#FBF9F8] sm:text-lg m:text-md">
          {designer.email}
        </p>
        <p className="w-full text-[24px] font-pretendard-regular text-center mb-[5%] text-[#FBF9F8] sm:text-lg m:text-md">
          instagram {designer.insta}
        </p>
      </div>
      <div className="mt-[100px] xl:mt-[90px] lg:mt-[70px] md:mt-[60px] sm:mt-[50px] m:mt-[40px] px-[360px] xl:px-[250px] lg:px-[200px] md:px-[100px] sm:px-[20px] m:px-[20px] flex flex-col">
        <p className="text-[28px] mb-[30px] font-['ft-activica-strong']">
          ABOUT DESINGER
        </p>
        <div className="flex">
          <div className="w-full overflow-hidden mr-[29px]">
            <ImageLoader fetcher={() => designer.src}>
              <Skeleton className="w-full aspect-[3/4]" />
            </ImageLoader>
          </div>
          <div>
            <p className="font-pretendard-semibold text-[18px]">
              Q. 간단한 자기소개 부탁드립니다. <br />
              <br />
            </p>
            <p className="font-pretendard-regular text-[18px]">
              A. {designer.introduce}
              <br />
              <br />
            </p>
            <p className="font-pretendard-semibold text-[18px]">
              Q. {designer.qna}
              <br />
              <br />
            </p>
            <p className="font-pretendard-regular text-[18px] whitespace-pre-wrap">
              A. {designer.point}
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className="mb-[100px]">
          <p className="text-[28px] mt-[100px] mb-[30px] font-['ft-activica-strong']">
            LOOK 1
          </p>
          <div className="w-full overflow-hidden mb-[49px]">
            <ImageLoader fetcher={() => designer.one}>
              <Skeleton className="w-full aspect-[3/4]" />
            </ImageLoader>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="flex gap-[30px]">
              <div className="w-full overflow-hidden">
                <ImageLoader fetcher={() => designer.one1}>
                  <Skeleton className="w-full aspect-[3/4]" />
                </ImageLoader>
              </div>
              <div className="w-full overflow-hidden">
                <ImageLoader fetcher={() => designer.one2}>
                  <Skeleton className="w-full aspect-[3/4]" />
                </ImageLoader>
              </div>
            </div>
            <div className="flex gap-[30px]">
              <div className="w-full overflow-hidden">
                <ImageLoader fetcher={() => designer.one3}>
                  <Skeleton className="w-full aspect-[3/4]" />
                </ImageLoader>
              </div>
              <div className="w-full overflow-hidden">
                <ImageLoader fetcher={() => designer.one4}>
                  <Skeleton className="w-full aspect-[3/4]" />
                </ImageLoader>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[100px]">
          <p className="text-[28px] mt-[100px] mb-[30px] font-['ft-activica-strong']">
            LOOK 2
          </p>
          <div className="w-full overflow-hidden mb-[49px]">
            <ImageLoader fetcher={() => designer.two}>
              <Skeleton className="w-full aspect-[3/4]" />
            </ImageLoader>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="flex gap-[30px]">
              <div className="w-full overflow-hidden">
                <ImageLoader fetcher={() => designer.two1}>
                  <Skeleton className="w-full aspect-[3/4]" />
                </ImageLoader>
              </div>
              <div className="w-full overflow-hidden">
                <ImageLoader fetcher={() => designer.two2}>
                  <Skeleton className="w-full aspect-[3/4]" />
                </ImageLoader>
              </div>
            </div>
            <div className="flex gap-[30px]">
              <div className="w-full overflow-hidden">
                <ImageLoader fetcher={() => designer.two3}>
                  <Skeleton className="w-full aspect-[3/4]" />
                </ImageLoader>
              </div>
              <div className="w-full overflow-hidden">
                <ImageLoader fetcher={() => designer.two4}>
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
