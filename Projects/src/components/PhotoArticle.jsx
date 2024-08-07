import Skeleton from "./Skeleton";
import ImageLoader from "./ImageLoader";

const importedImages = import.meta.glob("../assets/포토_패션쇼사진/*.jpg", {
  eager: true,
});
const images = Object.values(importedImages).map((img) => ({
  img: img.default,
}));

const importedImages2 = import.meta.glob("../assets/포토_메이킹사진/*.jpg", {
  eager: true,
});
const images2 = Object.values(importedImages2).map((img) => ({
  img: img.default,
}));

function PhotoArticle() {
  return (
    <div className="flex flex-col w-full justify-center items-center px-[360px] xl:px-[200px] lg:px-[150px] md:px-[100px] sm:px-[30px] m:px-[20px] pt-[80px] xl:pt-[70px] lg:pt-[60px] md:pt-[50px] sm:pt-[50px] m:pt-[50px]">
      <p className="font-['ft-activica-strong'] mt-[70px] xl:mt-[70px] lg:mt-[60px] md:mt-[45px] sm:mt-[35px] m:mt-[25px] text-[36px] xl:text-[36px] lg:text-[32px] md:text-[28px] sm:text-[24px] m:text-[20px] text-center">
        2024 KHU CNT FASHIONSHOW
        <br /> LAST-ING RE-PLAY
      </p>
      <div className="youtube w-full pt-[56.25%] relative mt-[57px] xl:mt-[57px] lg:mt-[50px] md:mt-[43px] sm:mt-[36px] m:mt-[30px] mb-[71px] xl:mb-[64px] lg:mb-[58px] md:mb-[52px] sm:mb-[48px] m:mb-[42px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/L4ahE9UqeQU?si=l0DTjOQfSpnmFyaF"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <p className="mb-[36px] font-['ft-activica-strong'] text-[36px] xl:text-[36px] lg:text-[32px] md:text-[28px] sm:text-[24px] m:text-[20px] text-center">
        PHOTO - FASHION SHOW
      </p>
      <div className="mt-[20px] w-full grid grid-cols-3 gap-x-[3vw] gap-y-[3vw] items-center">
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
      <p className="mt-[100px] mb-[36px] font-['ft-activica-strong'] text-[36px] xl:text-[36px] lg:text-[32px] md:text-[28px] sm:text-[24px] m:text-[20px] text-center">
        PHOTO - MAKING PROCESS
      </p>
      <div className="mt-[20px] w-full grid grid-cols-3 gap-x-[3vw] gap-y-[3vw] items-center">
        {images2.map((image, idx) => (
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

export default PhotoArticle;
