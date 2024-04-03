import ImageBox from "./ImageBox";

function PhotoArticle() {
  return (
    <div className="flex flex-col justify-center items-center px-[360px]">
      <p className="font-['ft-activica-strong'] text-[36px] text-center mb-[57px]">2024 KHU CNT FASHIONSHOW<br />MAKE-ING FILM
      </p>
      <div className="w-[1200px] h-[720px] bg-[#d9d9d9]"></div>

      <p className="mt-[71px] mb-[36px] font-['ft-activica-strong'] text-[36px] text-center">PHOTO</p>

      <div className="flex flex-wrap px-[360px] xl:px-[276px] lg:px-[212px] md:px-[163px] sm:px-[125px] m:px-[96px] gap-6 xl:gap-5 lg:gap-4 md:gap-3 sm:gap-2 m:gap-1 justify-center">
        <div className="flex gap-6 xl:gap-5 lg:gap-4 md:gap-3 sm:gap-2 m:gap-1">
          <ImageBox />
          <ImageBox />
          <ImageBox />
        </div>
        <div className="flex gap-6 xl:gap-5 lg:gap-4 md:gap-3 sm:gap-2 m:gap-1">
          <ImageBox />
          <ImageBox />
          <ImageBox />
        </div>
        <div className="flex gap-6 xl:gap-5 lg:gap-4 md:gap-3 sm:gap-2 m:gap-1">
          <ImageBox />
          <ImageBox />
          <ImageBox />
        </div>
        <div className="flex gap-6 xl:gap-5 lg:gap-4 md:gap-3 sm:gap-2 m:gap-1">
          <ImageBox />
          <ImageBox />
          <ImageBox />
        </div>
        <div className="flex gap-6 xl:gap-5 lg:gap-4 md:gap-3 sm:gap-2 m:gap-1">
          <ImageBox />
          <ImageBox />
          <ImageBox />
        </div>
        <div className="flex gap-6 xl:gap-5 lg:gap-4 md:gap-3 sm:gap-2 m:gap-1">
          <ImageBox />
          <ImageBox />
          <ImageBox />
        </div>
        {/* 추가 행을 계속 추가할 수 있습니다. */}
      </div>
    </div>
  );
}

export default PhotoArticle;