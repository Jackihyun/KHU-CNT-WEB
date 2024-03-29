import ImageBox from "./ImageBox";

function WhiteArticle() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* 제목 */}
      <p className="font-['ft-activica-strong'] text-[150px] xl:text-[115px] lg:text-[88px] md:text-[68px] sm:text-[52px] m:text-[40px] mt-[231px] xl:mt-[177px] lg:mt-[136px] md:mt-[104px] sm:mt-[80px] m:mt-[61px] whitespace-nowrap">THE WHITE PROJECT</p>

      {/* 유튜브 영상 */}
      <div className="youtube w-full h-full pt-[56.25%] relative mt-[178px] xl:mt-[136px] lg:mt-[104px] md:mt-[80px] sm:mt-[60px] mb-[146px] xl:mb-[112px] lg:mb-[86px] md:mb-[66px] sm:mb-[50px] m:mb-[38px]">
        <iframe className="absolute top-0 left-0 w-[100%] h-[100%]" width="560" height="315" src="https://www.youtube.com/embed/jGJNxhUP61I?si=jEeb8eHPM3O-u9Wi" title="YouTube video player" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      {/* 본문 */}
      <div className="flex justify-center px-[360px] xl:px-[276px] lg:px-[212px] md:px-[163px] sm:px-[125px] m:px-[96px] mb-[333px] xl:mb-[256px] lg:mb-[197px] md:mb-[151px] sm:mb-[116px] m:mb-[90px]">
        <div className="w-[718px] xl:w-[552px] lg:w-[424px] md:w-[326px] sm:w-[250px] m:w-[192px] h-[872px] xl:h-[670px] lg:h-[515px] md:h-[396px] sm:h-[304px] m:h-[233px] bg-[#D9D9D9] mr-[40px] xl:mr-[31px] lg:mr-[23px] md:mr-[18px] sm:mr-[14px] m:mr-[11px]">
          {/* <ImageBox src="" alt="white1" /> */}
        </div>
        <div className="w-[440px] xl:w-[338px] lg:w-[260px] md:w-[200px] sm:w-[154px] m:w-[118px] h-[624px] xl:h-[480px] lg:h-[369px] md:h-[284px] sm:h-[218px] m:h-[168px] font-pretendard-regular text-[16px] xl:text-[13px] lg:text-[10.5px] md:text-[8.5px] sm:text-[6.5px] m:text-[4.5px] text-[#000]">
          <p>
            The White Project를 통해 2024년 경희대학교 의상학과 졸업 패션쇼의 과정을 공개한다. 작품들은 컬러와 소재가 배제된 채 광목으로 완성되었다. 색이 입혀지지 않은 작품들은 보는 이로 하여금 완성된 모습을 상상하고, 디자이너들의 고민을 느낄 수 있는 여백을 제공한다. 화이트 프로젝트 컬렉션에는 디자이너의 책임과 옷의 가치를 전달하기 위한 47인의 디자이너의 노력이 담겨있다. LAST-ING을 재해석한 7가지 테마를 감상하며 각자 지속하는 힘에 대해 생각해보는 시작점이 되기를 바란다.
          </p>
          <br />
          <p>
            Through The White Project, the course of the 2024 Kyung Hee University&apos;s Costume Graduation Fashion Show will be revealed. The works were completed with mineral wood, excluding color and material. Uncolored works provide a margin for viewers to imagine the finished figure and feel the concerns of designers. The White Project collection contains 47 designers&apos; efforts to convey the designer&apos;s responsibilities and the value of clothes. I hope it will be a starting point to appreciate the seven themes reinterpreted by LAST-ING and think about the power that each of them continues.
          </p>
          <br />
          <p className="">
            通过&quot;The White Project&quot;公开2024年庆熙大学服装系毕业时装秀的过程。作品都是用粗布完成的, 没有色彩和素材。没有上色的作品让观看者想象完成的样子,并提供设计师们苦恼的空白. 白色项目收藏品包含了47名设计师为传达设计师的责任和衣服的价值而做出的努力。希望这将成为欣赏重新诠释LAST-ING的7个主题,并思考各自持续力量的起点。
          </p>
        </div>
      </div>

      {/* 이미지박스들 */}
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
        {/* 추가 행을 계속 추가할 수 있습니다. */}
      </div>
      <div className="mb-[1000px]"></div>
    </div>
  );
}

export default WhiteArticle;