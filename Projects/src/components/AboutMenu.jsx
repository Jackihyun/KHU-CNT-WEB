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
      <div className="flex items-center justify-between px-2 xl:px-1 lg:px-0 md:px-[2px] sm:px-[10px] m:px-[7px]">
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
      <div className="flex items-start text-center justify-between mt-[15px] sm:mt-[5px] m:mt-[5px] ">
        <div>
          <p
            className={`text-center ml-2 xl:ml-2 xl:mr-1 lg:ml-0 md:ml-0 sm:ml-0 m:ml-0 w-28 xl:w-28 lg:w-24 md:w-20 sm:w-16 m:w-12 min-w-[36px] font-semibold font-['ft-activica-strong'] text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] m:text-[9px] text-nowrap ${
              menuParam === "stage" ? "text-black" : "text-black/40"
            }`}
          >
            STAGE
            <br />
          </p>
          {menuParam === "stage" && (
            <p className="text-center xl:ml-2 w-28 xl:w-28 lg:w-24 md:w-20 sm:w-16 m:w-12 min-w-[36px] font-pretendard-semibold text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] m:text-[9px] text-nowrap">
              스테이지 주제
            </p>
          )}
        </div>
        <p
          className={`text-center min-w-[36px] font-semibold font-['ft-activica-strong'] text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] m:text-[9px] text-nowrap ${
            menuParam === "thanks" ? "text-black" : "text-black/40"
          }`}
        >
          THANKS TO
          <br />
          {menuParam === "thanks" && (
            <span className="text-center min-w-[36px] font-pretendard-semibold text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] m:text-[9px] text-nowrap">
              지도 및 지원
            </span>
          )}
        </p>

        <p
          className={`text-center min-w-[36px] w-28 xl:w-28 lg:w-24 md:w-20 sm:w-16 m:w-12 font-semibold font-['ft-activica-strong'] text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] m:text-[9px] text-nowrap ${
            menuParam === "partner" ? "text-black" : "text-black/40"
          }`}
        >
          PARTNER
          <br />
          {menuParam === "partner" && (
            <span className="text-center min-w-[36px] w-28 xl:w-28 lg:w-24 md:w-20 sm:w-16 m:w-12 font-pretendard-semibold text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] m:text-[9px] text-nowrap">
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
