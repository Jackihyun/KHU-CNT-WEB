import Minyoung from "../assets/조별이미지/B조/강민영.jpg";
import Sowoo from "../assets/조별이미지/G조/강사우.jpg";
import Gyuri from "../assets/조별이미지/E조/김규리.jpg";
import Dayoung from "../assets/조별이미지/C조/김다영.jpg";
import Migon from "../assets/조별이미지/C조/김미곤.jpg";
import Minseo from "../assets/조별이미지/B조/김민서.jpg";
import Minji from "../assets/조별이미지/A조/김민지.jpg";
import Mincheol from "../assets/조별이미지/D조/김민철.jpg";
import Soeun from "../assets/조별이미지/C조/김소은.jpg";
import Eunchae from "../assets/조별이미지/E조/김은채.jpg";
import Iche from "../assets/조별이미지/B조/김이채.jpg";
import Heeyeon from "../assets/조별이미지/B조/김희연.jpg";
import NaMinyoung from "../assets/조별이미지/C조/나민영.jpg";
import Sieun from "../assets/조별이미지/C조/민시은.jpg";
import Seulbin from "../assets/조별이미지/C조/박슬빈.jpg";
import Jeongeun from "../assets/조별이미지/D조/박정은.jpg";
import Jimin from "../assets/조별이미지/B조/박지민.jpg";
import Hanna from "../assets/조별이미지/A조/사한나.jpg";
import Gyeomseung from "../assets/조별이미지/B조/송겸승.jpg";
import Huiying from "../assets/조별이미지/G조/왕혜영.jpg";
import Gain from "../assets/조별이미지/C조/우가인.jpg";
import Sujin from "../assets/조별이미지/B조/우수진.jpg";
import Hsiaoyun from "../assets/조별이미지/F조/원소영.jpg";
import Jiatong from "../assets/조별이미지/F조/유가동.jpg";
import Juian from "../assets/조별이미지/G조/유서안.jpg";
import Zhecan from "../assets/조별이미지/F조/유철찬.jpg";
import Gyeongbeom from "../assets/조별이미지/D조/이경범.jpg";
import Siqi from "../assets/조별이미지/F조/이사기.jpg";
import Seokjun from "../assets/조별이미지/A조/이석준.jpg";
import Somang from "../assets/조별이미지/A조/이소망.jpg";
import Yuqi from "../assets/조별이미지/F조/이우기.jpg";
import Yuna from "../assets/조별이미지/A조/이유나.jpg";
import Jayoung from "../assets/조별이미지/E조/이자영.jpg";
import Jiwoo from "../assets/조별이미지/A조/이지우.jpg";
import Hyunmin from "../assets/조별이미지/E조/이현민.jpg";
import kihyun from "../assets/조별이미지/D조/임기현.jpg";
import Youmi from "../assets/조별이미지/E조/장유미.jpg";
import Hanbing from "../assets/조별이미지/F조/장한빙.jpg";
import Yeonjin from "../assets/조별이미지/A조/조연진.jpg";
import Seohyeon from "../assets/조별이미지/D조/지서현.jpg";
import Jingwen from "../assets/조별이미지/G조/하정문.jpg";
import Phamphuong from "../assets/조별이미지/D조/한수민.jpg";
import Seungheon from "../assets/조별이미지/E조/한승헌.jpg";
import Guiyan from "../assets/조별이미지/G조/허귀연.jpg";
import Chaehui from "../assets/조별이미지/E조/홍채희.jpg";
import ImageLoader from './ImageLoader';
import Skeleton from './Skeleton';
import { useEffect, useState } from 'react';
import { useStore } from "zustand";
import { uiStore } from "../stores/uiStore";

function DesignerMain() {
  const designer = [
    {
      alt: "강민영 디자이너",
      src: Minyoung,
      name: "강민영",
      ename: "Minyoung Kang",
      lastName: "강",
      id: "가"
    },
    {
      alt: "강사우 디자이너",
      src: Sowoo,
      name: "강사우",
      ename: "Jiang Siyu",
      lastName: "강",
      id: ""
    },
    {
      alt: "김규리 디자이너",
      src: Gyuri,
      name: "김규리",
      ename: "Gyuri Kim",
      lastName: "김",
      id: ""
    },
    {
      alt: "김다영 디자이너",
      src: Dayoung,
      name: "김다영",
      ename: "Dayoung Kim",
      lastName: "김",
      id: ""
    },
    {
      alt: "김미곤 디자이너",
      src: Migon,
      name: "김미곤",
      ename: "Migon Kim",
      lastName: "김",
      id: ""
    },
    {
      alt: "김민서 디자이너",
      src: Minseo,
      name: "김민서",
      ename: "Minseo Kim",
      lastName: "김",
      id: ""
    },
    {
      alt: "김민지 디자이너",
      src: Minji,
      name: "김민지",
      ename: "Minji Kim",
      lastName: "김",
      id: ""
    },
    {
      alt: "김민철 디자이너",
      src: Mincheol,
      name: "김민철",
      ename: "Mincheol Kim",
      lastName: "김",
      id: ""
    },
    {
      alt: "김소은 디자이너",
      src: Soeun,
      name: "김소은",
      ename: "Soeun Kim",
      lastName: "김",
      id: ""
    },
    {
      alt: "김은채 디자이너",
      src: Eunchae,
      name: "김은채",
      ename: "Eunchae Kim",
      lastName: "김",
      id: ""
    },
    {
      alt: "김이채 디자이너",
      src: Iche,
      name: "김이채",
      ename: "Iche Kim",
      lastName: "김",
      id: ""
    },
    {
      alt: "김희연 디자이너",
      src: Heeyeon,
      name: "김희연",
      ename: "Heeyeon Kim",
      lastName: "김",
      id: ""
    },
    {
      alt: "나민영 디자이너",
      src: NaMinyoung,
      name: "나민영",
      ename: "Minyoung Na",
      lastName: "나",
      id: "나"
    },
    {
      alt: "민시은 디자이너",
      src: Sieun,
      name: "민시은",
      ename: "Sieun Min",
      lastName: "민",
      id: "마"
    },
    {
      alt: "박슬빈 디자이너",
      src: Seulbin,
      name: "박슬빈",
      ename: "Seulbin Park",
      lastName: "박",
      id: "바"
    },
    {
      alt: "박정은 디자이너",
      src: Jeongeun,
      name: "박정은",
      ename: "Jeongeun Park",
      lastName: "박",
      id: ""
    },
    {
      alt: "박지민 디자이너",
      src: Jimin,
      name: "박지민",
      ename: "Jimin Park",
      lastName: "박",
      id: ""
    },
    {
      alt: "사한나 디자이너",
      src: Hanna,
      name: "사한나",
      ename: "Hanna Sa",
      lastName: "사",
      id: "사"
    },
    {
      alt: "송겸승 디자이너",
      src: Gyeomseung,
      name: "송겸승",
      ename: "Gyeomseung Song",
      lastName: "송",
      id: ""
    },
    {
      alt: "왕혜영 디자이너",
      src: Huiying,
      name: "왕혜영",
      ename: "Wang Hui Ying",
      lastName: "왕",
      id: "아"
    },
    {
      alt: "우가인 디자이너",
      src: Gain,
      name: "우가인",
      ename: "Gain Woo",
      lastName: "우",
      id: ""
    },
    {
      alt: "우수진 디자이너",
      src: Sujin,
      name: "우수진",
      ename: "Sujin Woo",
      lastName: "우",
      id: ""
    },
    {
      alt: "원소영 디자이너",
      src: Hsiaoyun,
      name: "원소영",
      ename: "Yuan Hsiao Yin",
      lastName: "원",
      id: ""
    },
    {
      alt: "유가동 디자이너",
      src: Jiatong,
      name: "유가동",
      ename: "Liu Jia Tong",
      lastName: "유",
      id: ""
    },
    {
      alt: "유서안 디자이너",
      src: Juian,
      name: "유서안",
      ename: "Liao Jui An",
      lastName: "유",
      id: ""
    },
    {
      alt: "유철찬 디자이너",
      src: Zhecan,
      name: "유철찬",
      ename: "Liu Zhe Can",
      lastName: "유",
      id: ""
    },
    {
      alt: "이경범 디자이너",
      src: Gyeongbeom,
      name: "이경범",
      ename: "Gyeongbeom Lee",
      lastName: "이",
      id: ""
    },
    {
      alt: "이사기 디자이너",
      src: Siqi,
      name: "이사기",
      ename: "Li Si Qi",
      lastName: "이",
      id: ""
    },
    {
      alt: "이석준 디자이너",
      src: Seokjun,
      name: "이석준",
      ename: "Seokjun Lee",
      lastName: "이",
      id: ""
    },
    {
      alt: "이소망 디자이너",
      src: Somang,
      name: "이소망",
      ename: "Somang Lee",
      lastName: "이",
      id: ""
    },
    {
      alt: "이우기 디자이너",
      src: Yuqi,
      name: "이우기",
      ename: "Li Yu Qi",
      lastName: "이",
      id: ""
    },
    {
      alt: "이유나 디자이너",
      src: Yuna,
      name: "이유나",
      ename: "Yu-na Lee",
      lastName: "이",
      id: ""
    },
    {
      alt: "이자영 디자이너",
      src: Jayoung,
      name: "이자영",
      ename: "Jayoung Lee",
      lastName: "이",
      id: ""
    },
    {
      alt: "이지우 디자이너",
      src: Jiwoo,
      name: "이지우",
      ename: "Jiwoo Lee",
      lastName: "이",
      id: ""
    },
    {
      alt: "이현민 디자이너",
      src: Hyunmin,
      name: "이현민",
      ename: "Hyunmin Lee",
      lastName: "이",
      id: ""
    },
    {
      alt: "임기현 디자이너",
      src: kihyun,
      name: "임기현",
      ename: "Kihyun Lim",
      lastName: "임",
      id: ""
    },
    {
      alt: "장유미 디자이너",
      src: Youmi,
      name: "장유미",
      ename: "Youmi Jang",
      lastName: "장",
      id: "자"
    },
    {
      alt: "장한빙 디자이너",
      src: Hanbing,
      name: "장한빙",
      ename: "Zhang Han Bing",
      lastName: "장",
      id: ""
    },
    {
      alt: "조연진 디자이너",
      src: Yeonjin,
      name: "조연진",
      ename: "Yeonjin Cho",
      lastName: "조",
      id: ""
    },
    {
      alt: "지서현 디자이너",
      src: Seohyeon,
      name: "지서현",
      ename: "Seohyeon Jee",
      lastName: "지",
      id: ""
    },
    {
      alt: "하정문 디자이너",
      src: Jingwen,
      name: "하정문",
      ename: "Xia Jing Wen",
      lastName: "하",
      id: "하"
    },
    {
      alt: "한수민 디자이너",
      src: Phamphuong,
      name: "한수민",
      ename: "Pham Phuong Thao",
      lastName: "한",
      id: ""
    },
    {
      alt: "한승헌 디자이너",
      src: Seungheon,
      name: "한승헌",
      ename: "Seungheon Han",
      lastName: "한",
      id: ""
    },
    {
      alt: "허귀연 디자이너",
      src: Guiyan,
      name: "허귀연",
      ename: "Xu Gui Yan",
      lastName: "허",
      id: ""
    },
    {
      alt: "홍채희 디자이너",
      src: Chaehui,
      name: "홍채희",
      ename: "Chaehui Hong",
      lastName: "홍",
      id: ""
    },
  ]

  const [activeButton, setActiveButton] = useState("all");

  // function calInitial(lastName) {
  //   const initialConsonant = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

  //   const ga = 44032;
  //   const code = lastName.charCodeAt(0);
  //   const uni = code - ga;
  //   const consonantIndex = parseInt(uni / 588);

  //   return initialConsonant[consonantIndex];
  // }




  const [filterDesigners, setFilterDesigners] = useState(designer);
  const [showAll, setShowAll] = useState(true);

  const uiContext = useStore(uiStore);

  // useEffect(() => {
  //   if(headerRef.current) {
  //     const headerHeight = headerRef.current.offsetHeight;
  //     height(headerSize);
  //   }
  // }, []);



  // 기존 스크롤. 속도 조절 안됐던 거
  // const handleFilterByInitial = (initial) => {
  //   const element = document.getElementById(`${initial}start`);
  //   if (element) {
  //     const y = element.getBoundingClientRect().top - uiContext.HeaderHeight - 40;
  //     window.scrollBy({ top: y, behavior: "smooth", });
  //   }
  // };

  // 스크롤 천천히 -> 저 숫자만 고치면 됨. 2000이면 2초
  const handleFilterByInitial = (initial) => {
    const element = document.getElementById(`${initial}`);
    if (element) {
      const y = element.getBoundingClientRect().top - uiContext.HeaderHeight - 40;
      smoothScrollBy(y, 2000); // 1000ms 동안 스크롤
    }
  };

  const smoothScrollBy = (scrollAmount, duration) => {
    const startY = window.scrollY;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const scroll = () => {
      const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, ((currentTime - startTime) / duration));
      const timeFunction = easeInOutCubic(time);

      window.scroll(0, Math.ceil((timeFunction * scrollAmount) + startY));

      if (window.scrollY === startY + scrollAmount || time >= 1) {
        return;
      }

      requestAnimationFrame(scroll);
    };

    scroll();
  };


  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };



  const initiaalButtons = [
    '가', '나', '다', '라', '마', '바', '사', '아', '자', '차', '카', '타', '파', '하'
  ];

  const specialButtons = ['다', '라', '차', '카', '타', '파',]; // 특별히 색을 변경할 성씨 목록

  const [, setRepaint] = useState(0);

  useEffect(() => {
    window.document.addEventListener('scroll', () => {
      const supporters = document.getElementsByClassName('supporter');

      for (const supporter of supporters) {
        supporter.style.height = `${supporter.clientWidth}px`;
      }

      setRepaint((prev) => prev + 1);
    });
  }, [])



  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col justify-center items-center bg-[#CD6629]">
        <p className="mt-[80px] text-[20.3vw] text-center text-[#fbf9f8] font-['ft-activica-strong']">DESIGERS</p>
        <p className="w-full text-[5.6vw] font-['ft-activica-strong'] text-center mt-[5%] text-[#fbf9f8] sm:text-sm">
          제44회 패션쇼, 45인의 디자이너
        </p>
        <p className="w-full text-[1.5vw] text-center text-[#fbf9f8] mt-[10%] mb-[3%] font-pretendard-regular sm:text-sm">
          추후 본 페이지에서 디자이너 소개 및 작품 페이지를 만나보실 수 있습니다.
        </p>
      </div>

      <div className="flex flex-row pr-[196px] xl:pr-[96px] lg:pr-[64px] md:pr-[35px] sm:pr-[25px] m:pr-[25px]">
        <div className="flex flex-col ">
          <div className=" bg-white grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 m:grid-cols-2 gap-x-6 md:gap-x-4 sm:gap-x-4 m:gap-x-4 gap-y-[75px] md:gap-y-[55px] sm:gap-y-[55px] m:gap-y-[45px] mt-[65px] sm:mt-[25px] m:mt-[24px] pl-[360px]  xl:pl-[250px] lg:pl-[100px] md:pl-[50px] sm:pl-[20px] m:pl-[20px]">
            {showAll ? designer.map((designer, idx) => (
              <div key={idx} id={designer.id} className="flex flex-col items-start">
                <div className="w-full overflow-hidden">
                  <ImageLoader fetcher={() => designer.src}>
                    <Skeleton className="w-full aspect-[3/4]" />
                  </ImageLoader>
                </div>
                <p className="font-pretendard-semibold mt-[7%] text-[18px] md:text-[15px] sm:text-[13px] m:text-[11px] ">{designer.name}</p>
                <p className="font-pretendard-regular text-[18px] md:text-[15px] sm:text-[13px] m:text-[11px] ">{designer.ename}</p>
              </div>
            ))
              : filterDesigners.map((designer, idx) => (
                <div key={idx} className="flex flex-col items-start">
                  <div className="w-full overflow-hidden">
                    <ImageLoader fetcher={() => designer.src}>
                      <Skeleton className="w-full aspect-[3/4]" />
                    </ImageLoader>
                  </div>
                  <p className="font-pretendard-semibold mt-[7%] text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px] ">{designer.name}</p>
                  <p className="font-pretendard-regular text-[24px] md:text-[15px] sm:text-[13px] m:text-[11px] ">{designer.ename}</p>
                </div>
              ))}
          </div>
        </div>
        <article className="flex flex-col mt-[65px] sm:mt-[25px] m:mt-[24px] ml-[134px] xl:ml-[120px] lg:ml-[80px] md:ml-[35px] sm:ml-[17px] m:ml-[16px]">
          <div className="sticky top-[150px] remove-scrollbar flex justify-end md:justify-end sm:justify-end m:justify-end overflow-x-scroll">
            <div className="flex flex-col">
              {initiaalButtons.map((initial) => (
                <button
                  key={initial}
                  onClick={() => {
                    if (!specialButtons.includes(initial)) {
                      setActiveButton(initial);
                      handleFilterByInitial(initial);
                    }
                  }}
                  className={`text-[24px] xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px] m:text-[11px] font-pretendard-regular mb-[15px] ${specialButtons.includes(initial) ? 'text-[#CD6629]/40 cursor-default' : activeButton === initial ? 'bg-[#CD6629] text-white' : 'text-[#CD6629] hover:bg-[#CD6629] hover:text-white'}`}
                  disabled={specialButtons.includes(initial)}
                //disabled={filterDesigners.length === 0}
                >
                  {initial}
                </button>
              ))}
              <button id="ScrollToTop" onClick={handleScrollToTop}>
                <p className="flex font-pretendard-regular justify-center items-center text-center p-2">&#94;</p>
              </button>
            </div>
          </div>
        </article>
      </div>

    </div>
  );
}

export default DesignerMain;