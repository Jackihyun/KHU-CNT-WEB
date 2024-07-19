import Skeleton from "./Skeleton";
import ImageLoader from "./ImageLoader";

// 화이트프로젝트 사진 -> 아카이브 사진 폴더로 바꾸기
const importedImages = import.meta.glob("../assets/화이트프로젝트 사진/*.jpg", {
  eager: true,
});
const images = Object.values(importedImages).map((img) => ({
  img: img.default,
}));

function Archive() {
  return (
    <div className="flex flex-col bg-[#fbf9f8] h-full w-full">
      <div className="flex flex-col justify-center items-center bg-[#F6F1ED]">
        <p className="text-[19.3vw] text-center text-[#CD6629] font-['ft-activica-strong']">
          ARCHIVE
        </p>
        <p className="w-full text-[4.6vw] font-['ft-activica-strong'] text-center mb-[10%] text-[#CD6629] sm:text-sm">
          제44회 패션쇼, 92착장의 작품
        </p>
      </div>

      <div className="mt-[5vw] w-full grid grid-cols-3 gap-x-[3vw] gap-y-[3vw] items-center px-[360px] xl:px-[200px] lg:px-[170px] md:px-[100px] sm:px-[30px] m:px-[20px] mb-[333px] xl:mb-[256px] lg:mb-[197px] md:mb-[151px] sm:mb-[116px] m:mb-[90px]">
        {images.map((image, idx) => (
          <ImageLoader
            key={idx}
            fetcher={() => image.img}
            className="object-cover w-full aspect-[3/4]"
          >
            <Skeleton className="w-full aspect-[3/4]" />
          </ImageLoader>
        ))}
      </div>
    </div>
  );
}
export default Archive;
