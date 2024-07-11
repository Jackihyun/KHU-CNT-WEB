import { useState } from "react";
import AboutButton from "./AboutButton";
import AboutMenuThanks from "./AboutMenuThanks";
import AboutMenuStage from "./AboutMenuStage";
import AboutMenuPartner from "./AboutMenuPartner";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

const decodeParam = (param) => {
  if (param === "thanks") return <AboutMenuThanks />;
  if (param === "partner") return <AboutMenuPartner />;
  else return <AboutMenuStage />;
};

function AboutMenu() {
  const [params, setSearchParams] = useSearchParams();
  const [menuParam, setMenuParam] = useState(params.get("menu") || "stage");
  const showingPanel = useMemo(() => decodeParam(menuParam), [menuParam]);

  const handleMenuButtonClick = (selectedMenu) => {
    setSearchParams({ menu: selectedMenu });
    setMenuParam(selectedMenu);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <AboutButton
          isActive={menuParam === "stage"}
          onClick={() => handleMenuButtonClick("stage")}
          title="STAGE"
          content="스테이지 주제"
          showLine={false}
          position="left"
        />

        <AboutButton
          isActive={menuParam === "thanks"}
          onClick={() => handleMenuButtonClick("thanks")}
          title="THANKS TO"
          content="지도 및 지원"
          showLine={true}
        />

        <AboutButton
          isActive={menuParam === "partner"}
          onClick={() => handleMenuButtonClick("partner")}
          title="PARTNER"
          content="협찬사"
          showLine={false}
          position="right"
        />
      </div>
      <div className="flex items-start justify-between mt-[15px] sm:mt-[5px] m:mt-[5px] ">
        <p
          className={`text-center w-28 xl:w-28 lg:w-24 md:w-20 sm:w-11  m:w-8 font-semibold font-['ft-activica-strong'] text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] m:text-[8px] text-nowrap ${
            menuParam === "stage" ? "text-black" : "text-black/40"
          }`}
        >
          STAGE
          <br />
          {menuParam === "stage" && (
            <span className="w-28 xl:w-28 lg:w-24 md:w-20 sm:w-11 m:w-8 font-pretendard-semibold text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] m:text-[8px] text-nowrap">
              스테이지 주제
            </span>
          )}
        </p>

        <p
          className={`text-center w-[12%] font-semibold font-['ft-activica-strong'] text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] m:text-[8px] text-nowrap ${
            menuParam === "thanks" ? "text-black" : "text-black/40"
          }`}
        >
          THANKS TO
          <br />
          {menuParam === "thanks" && (
            <span className="text-center w-[12%] font-pretendard-semibold text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] m:text-[8px] text-nowrap">
              지도 및 지원
            </span>
          )}
        </p>

        <p
          className={`text-center w-[12%] font-semibold font-['ft-activica-strong'] text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] m:text-[8px] text-nowrap ${
            menuParam === "partner" ? "text-black" : "text-black/40"
          }`}
        >
          PARTNER
          <br />
          {menuParam === "partner" && (
            <span className="w-[12%] font-pretendard-semibold text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] m:text-[8px] text-nowrap">
              협찬사
            </span>
          )}
        </p>
      </div>
      {showingPanel}
    </div>
  );
}

export default AboutMenu;
