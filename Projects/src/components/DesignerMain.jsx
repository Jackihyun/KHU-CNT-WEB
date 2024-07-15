import ImageLoader from "./ImageLoader";
import Skeleton from "./Skeleton";
import { useEffect, useState, useRef } from "react";
import { useStore } from "zustand";
import { uiStore } from "../stores/uiStore";
import { DesignerData } from "../data/Designers";
import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

// 화면에 표시되고 있는지 확인하는 함수

const getDesignerData = () => {
  const designer = DesignerData;
  const slotData = [
    {
      id: "가",
      designers: [],
      firstItem: null,
    },
    {
      id: "나",
      designers: [],
      firstItem: null,
    },
    {
      id: "다",
      designers: [],
      firstItem: null,
    },
    {
      id: "라",
      designers: [],
      firstItem: null,
    },
    {
      id: "마",
      designers: [],
      firstItem: null,
    },
    {
      id: "바",
      designers: [],
      firstItem: null,
    },
    {
      id: "사",
      designers: [],
      firstItem: null,
    },
    {
      id: "아",
      designers: [],
      firstItem: null,
    },
    {
      id: "자",
      designers: [],
      firstItem: null,
    },
    {
      id: "차",
      designers: [],
      firstItem: null,
    },
    {
      id: "카",
      designers: [],
      firstItem: null,
    },
    {
      id: "타",
      designers: [],
      firstItem: null,
    },
    {
      id: "파",
      designers: [],
      firstItem: null,
    },
    {
      id: "하",
      designers: [],
      firstItem: null,
    },
  ];

  // 각 디자이너를 슬롯에 할당
  designer.forEach((it) => {
    const initial = it.id;
    const slot = slotData.find((slot) => slot.id === initial);

    if (slot) {
      slot.designers.push(it);
    }
  });

  // 각 슬롯에서 첫 번째 아이템 찾기
  slotData.forEach((slot) => {
    slot.firstItem = slot.designers[0];
  });

  return slotData;
};

function DesignerMain() {
  const designers = getDesignerData();
  const designerListRef = useRef(null);
  const [showingInitial, setShowingInitial] = useState("가");
  const uiContext = useStore(uiStore);

  // 스크롤 천천히 -> 저 숫자만 고치면 됨. 2000이면 2초
  const handleFilterByInitial = (initial) => {
    const slot = designers.find((slot) => slot.id === initial);
    if (slot && slot.firstItem) {
      const element = document.getElementById(slot.firstItem.id);
      if (element) {
        const y =
          element.getBoundingClientRect().top +
          window.scrollY -
          uiContext.HeaderHeight -
          40;
        smoothScrollTo(y, 2000); // 2000ms 동안 스크롤
      }
    }
  };

  const onScroll = () => {
    const designerItems = designerListRef.current.children;

    // 현재 화면에 보이는 items filter
    const visibleItems = Array.from(designerItems).filter((item) => {
      const rect = item.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    });

    // 첫번째로 보이는 item 찾기
    const firstVisibleItem = visibleItems[0];
    if (firstVisibleItem) {
      const initial = firstVisibleItem.id.slice(0, 1);
      setShowingInitial(initial);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const smoothScrollTo = (scrollAmount, duration) => {
    const startY = window.scrollY;
    const startTime =
      "now" in window.performance ? performance.now() : new Date().getTime();

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const scroll = () => {
      const currentTime =
        "now" in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, (currentTime - startTime) / duration);
      const timeFunction = easeInOutCubic(time);

      window.scroll(
        0,
        Math.ceil(timeFunction * (scrollAmount - startY) + startY)
      );

      if (window.scrollY === scrollAmount || time >= 1) {
        return;
      }

      requestAnimationFrame(scroll);
    };

    scroll();
  };

  const handleScrollToTop = () => {
    const duration = 2500;

    smoothScrollTo(0, duration);
  };

  const [, setRepaint] = useState(0);

  useEffect(() => {
    window.document.addEventListener("scroll", () => {
      const supporters = document.getElementsByClassName("supporter");

      for (const supporter of supporters) {
        supporter.style.height = `${supporter.clientWidth}px`;
      }

      setRepaint((prev) => prev + 1);
    });
  }, []);

  const designerRefs = useRef([]);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col justify-center items-center bg-[#CD6629]">
        <p className="mt-[80px] text-[19.3vw] text-center text-[#fbf9f8] font-['ft-activica-strong']">
          DESIGERS
        </p>
        <p className="w-full text-[4.6vw] font-['ft-activica-strong'] text-center mb-[10%] text-[#fbf9f8] sm:text-sm">
          제44회 패션쇼, 45인의 디자이너
        </p>
      </div>

      <div className="flex flex-row pr-[196px] xl:pr-[96px] lg:pr-[64px] md:pr-[35px] sm:pr-[25px] m:pr-[25px]">
        <div className="flex flex-col ">
          <div
            ref={designerListRef}
            className=" bg-white grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 m:grid-cols-2 gap-x-6 md:gap-x-4 sm:gap-x-4 m:gap-x-4 gap-y-[75px] md:gap-y-[55px] sm:gap-y-[55px] m:gap-y-[45px] mt-[65px] sm:mt-[25px] m:mt-[24px] pl-[360px]  xl:pl-[250px] lg:pl-[100px] md:pl-[50px] sm:pl-[20px] m:pl-[20px]"
          >
            {designers
              .flatMap((it) => it.designers)
              .map((designer, idx) => {
                if (!designerRefs.current[idx]) {
                  designerRefs.current[idx] = React.createRef();
                }
                return (
                  <Link
                    to={`/designer/${encodeURIComponent(designer.name)}`}
                    key={idx}
                    className="desinger-card"
                  >
                    <div
                      key={idx}
                      id={`${designer.id}`}
                      className="flex flex-col items-start"
                      ref={designerRefs.current[idx]}
                    >
                      <div className="w-full overflow-hidden">
                        <ImageLoader fetcher={() => designer.src}>
                          <Skeleton className="w-full aspect-[3/4]" />
                        </ImageLoader>
                      </div>
                      <p className="font-pretendard-semibold mt-[7%] text-[18px] md:text-[15px] sm:text-[13px] m:text-[11px] ">
                        {designer.name}
                      </p>
                      <p className="font-pretendard-regular text-[18px] md:text-[15px] sm:text-[13px] m:text-[11px] ">
                        {designer.ename}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
        <article className="flex flex-col mt-[65px] sm:mt-[25px] m:mt-[24px] ml-[134px] xl:ml-[120px] lg:ml-[80px] md:ml-[35px] sm:ml-[17px] m:ml-[16px]">
          <div className="sticky top-[150px] remove-scrollbar flex justify-end md:justify-end sm:justify-end m:justify-end overflow-x-scroll">
            <div className="flex flex-col">
              {designers.map((it) => {
                const isEmpty = it.designers.length === 0;
                const isActive = showingInitial === it.id;

                return (
                  <button
                    key={it.id}
                    onClick={() => {
                      if (it.designers.length > 0) {
                        handleFilterByInitial(it.id);
                      }
                    }}
                    className={clsx(
                      `text-[24px] xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px] m:text-[11px] font-pretendard-regular mb-[15px] xl:mb-[14px] lg:mb-[12px] md:mb-[10px] sm:mb-[8px] m:mb-[7px] text-[#CD6629] hover:bg-[#CD6629] hover:text-white`,
                      {
                        "text-[#CD6629]/40 cursor-default": isEmpty,
                        "bg-[#CD6629] text-white": isActive,
                      }
                    )}
                    disabled={isEmpty}
                  >
                    {it.id}
                  </button>
                );
              })}
              <button id="ScrollToTop" onClick={handleScrollToTop}>
                <p className="flex font-pretendard-regular justify-center items-center text-center p-2">
                  &#94;
                </p>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default DesignerMain;
