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
import Sieun from "../assets/조별이미지/C조/민시은.png";
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
import Chaehui from "../assets/조별이미지/E조/홍채희.jpeg";

import { useEffect, useState } from 'react';

function DesignerMain() {
  const designer = [
    {
      alt: "강민영 디자이너",
      src: Minyoung,
      name: "강민영",
      ename: "Minyoung Kang",
      lastName: "강"
    },
    {
      alt: "강사우 디자이너",
      src: Sowoo,
      name: "강사우",
      ename: "Jiang Siyu",
      lastName: "강"
    },
    {
      alt: "김규리 디자이너",
      src: Gyuri,
      name: "김규리",
      ename: "Gyuri Kim",
      lastName: "김"
    },
    {
      alt: "김다영 디자이너",
      src: Dayoung,
      name: "김다영",
      ename: "Dayoung Kim",
      lastName: "김"
    },
    {
      alt: "김미곤 디자이너",
      src: Migon,
      name: "김미곤",
      ename: "Migon Kim",
      lastName: "김"
    },
    {
      alt: "김민서 디자이너",
      src: Minseo,
      name: "김민서",
      ename: "Minseo Kim",
      lastName: "김"
    },
    {
      alt: "김민지 디자이너",
      src: Minji,
      name: "김민지",
      ename: "Minji Kim",
      lastName: "김"
    },
    {
      alt: "김민철 디자이너",
      src: Mincheol,
      name: "김민철",
      ename: "Mincheol Kim",
      lastName: "김"
    },
    {
      alt: "김소은 디자이너",
      src: Soeun,
      name: "김소은",
      ename: "Soeun Kim",
      lastName: "김"
    },
    {
      alt: "김은채 디자이너",
      src: Eunchae,
      name: "김은채",
      ename: "Eunchae Kim",
      lastName: "김"
    },
    {
      alt: "김이체 디자이너",
      src: Iche,
      name: "김이체",
      ename: "Iche Kim",
      lastName: "김"
    },
    {
      alt: "김희연 디자이너",
      src: Heeyeon,
      name: "김희연",
      ename: "Heeyeon Kim",
      lastName: "김"
    },
    {
      alt: "나민영 디자이너",
      src: NaMinyoung,
      name: "나민영",
      ename: "NaMinyoung",
      lastName: "나"
    },
    {
      alt: "민시은 디자이너",
      src: Sieun,
      name: "민시은",
      ename: "Sieun Min",
      lastName: "민"
    },
    {
      alt: "박슬빈 디자이너",
      src: Seulbin,
      name: "박슬빈",
      ename: "Seulbin Park",
      lastName: "박"
    },
    {
      alt: "박정은 디자이너",
      src: Jeongeun,
      name: "박정은",
      ename: "Jeongeun Park",
      lastName: "박"
    },
    {
      alt: "박지민 디자이너",
      src: Jimin,
      name: "박지민",
      ename: "Jimin Park",
      lastName: "박"
    },
    {
      alt: "사한나 디자이너",
      src: Hanna,
      name: "사한나",
      ename: "Hanna Sa",
      lastName: "사"
    },
    {
      alt: "송겸승 디자이너",
      src: Gyeomseung,
      name: "송겸승",
      ename: "Gyeomseung Song",
      lastName: "송"
    },
    {
      alt: "왕혜영 디자이너",
      src: Huiying,
      name: "왕혜영",
      ename: "Huiying Wang",
      lastName: "왕"
    },
    {
      alt: "우가인 디자이너",
      src: Gain,
      name: "우가인",
      ename: "Gain Woo",
      lastName: "우"
    },
    {
      alt: "우수진 디자이너",
      src: Sujin,
      name: "우수진",
      ename: "Sujin Woo",
      lastName: "우"
    },
    {
      alt: "원소영 디자이너",
      src: Hsiaoyun,
      name: "원소영",
      ename: "Hsiaoyun Won",
      lastName: "원"
    },
    {
      alt: "유가동 디자이너",
      src: Jiatong,
      name: "유가동",
      ename: "Jiatong Yu",
      lastName: "유"
    },
    {
      alt: "유서안 디자이너",
      src: Juian,
      name: "유서안",
      ename: "Juian Yu",
      lastName: "유"
    },
    {
      alt: "유철찬 디자이너",
      src: Zhecan,
      name: "유철찬",
      ename: "Zhecan Yu",
      lastName: "유"
    },
    {
      alt: "이경범 디자이너",
      src: Gyeongbeom,
      name: "이경범",
      ename: "Gyeongbeom Lee",
      lastName: "이"
    },
    {
      alt: "이사기 디자이너",
      src: Siqi,
      name: "이사기",
      ename: "Siqi Lee",
      lastName: "이"
    },
    {
      alt: "이석준 디자이너",
      src: Seokjun,
      name: "이석준",
      ename: "Seokjun Lee",
      lastName: "이"
    },
    {
      alt: "이소망 디자이너",
      src: Somang,
      name: "이소망",
      ename: "Somang Lee",
      lastName: "이"
    },
    {
      alt: "이우기 디자이너",
      src: Yuqi,
      name: "이우기",
      ename: "Yuqi Lee",
      lastName: "이"
    },
    {
      alt: "이유나 디자이너",
      src: Yuna,
      name: "이유나",
      ename: "Yuna Lee",
      lastName: "이"
    },
    {
      alt: "이자영 디자이너",
      src: Jayoung,
      name: "이자영",
      ename: "Jayoung Lee",
      lastName: "이"
    },
    {
      alt: "이지우 디자이너",
      src: Jiwoo,
      name: "이지우",
      ename: "Jiwoo Lee",
      lastName: "이"
    },
    {
      alt: "이현민 디자이너",
      src: Hyunmin,
      name: "이현민",
      ename: "Hyunmin Lee",
      lastName: "이"
    },
    {
      alt: "임기현 디자이너",
      src: kihyun,
      name: "임기현",
      ename: "Kihyun Lim",
      lastName: "임"
    },
    {
      alt: "장유미 디자이너",
      src: Youmi,
      name: "장유미",
      ename: "Youmi Jang",
      lastName: "장"
    },
    {
      alt: "장한빙 디자이너",
      src: Hanbing,
      name: "장한빙",
      ename: "Hanbing Jang",
      lastName: "장"
    },
    {
      alt: "조연진 디자이너",
      src: Yeonjin,
      name: "조연진",
      ename: "Yeonjin Cho",
      lastName: "조"
    },
    {
      alt: "지서현 디자이너",
      src: Seohyeon,
      name: "지서현",
      ename: "Seohyeon Ji",
      lastName: "지"
    },
    {
      alt: "하정문 디자이너",
      src: Jingwen,
      name: "하정문",
      ename: "Jingwen Ha",
      lastName: "하"
    },
    {
      alt: "한수민 디자이너",
      src: Phamphuong,
      name: "한수민",
      ename: "Phamphuong Han",
      lastName: "한"
    },
    {
      alt: "한승헌 디자이너",
      src: Seungheon,
      name: "한승헌",
      ename: "Seungheon Han",
      lastName: "한"
    },
    {
      alt: "허귀연 디자이너",
      src: Guiyan,
      name: "허귀연",
      ename: "Guiyan He",
      lastName: "허"
    },
    {
      alt: "홍채희 디자이너",
      src: Chaehui,
      name: "홍채희",
      ename: "Chaehui Hong",
      lastName: "홍"
    },
  ]

  const [activeButton, setActiveButton] = useState("all");

  function calInitial(lastName) {
    const initialConsonant = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

    const ga = 44032;
    const code = lastName.charCodeAt(0);
    const uni = code - ga;
    const consonantIndex = parseInt(uni / 588);

    return initialConsonant[consonantIndex];
  }

  const [filterDesigners, setFilterDesigners] = useState(designer);
  const [showAll, setShowAll] = useState(true);

  const handleFilterByInitial = (initial) => {
    if (initial === "all") {
      setFilterDesigners(designer);
      setShowAll(true);
      setActiveButton("all");
    } else {
      const filtered = designer.filter((designer) => initial === calInitial(designer.lastName));
      setFilterDesigners(filtered);
      setShowAll(false);
      setActiveButton(initial);
    }
  };

  const initiaalButtons = [
    'all', 'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
  ];

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

      <div className="flex flex-col w-full h-full">
        <div className="flex justify-center md:justify-start sm:justify-start m:justify-start mt-[4vh] overflow-x-scroll">
          {initiaalButtons.map((initial) => (
            <button
              key={initial}
              onClick={() => handleFilterByInitial(initial)}
              className={`mx-2 px-4 py-2 rounded-md ${activeButton === initial ? 'bg-[#CD6629]' : 'bg-gray-200 hover:bg-[#CD6629]'
                }`}
            >
              {initial}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 m:grid-cols-2 gap-x-6 gap-y-[75px] mt-[75px] px-[360px] xl:px-[250px] lg:px-[100px] md:px-[50px] sm:px-[20px] m:px-[20px]">
        {showAll ? designer.map((designer, idx) => (
          <div key={idx} className="flex flex-col items-start">
            <div className="w-full overflow-hidden">
              <img src={designer.src} alt={designer.alt} className="w-full h-full object-cover" />
            </div>
            <p className="font-pretendard-semibold mt-[7%] text-[24px] md:text-[15px] sm:text-[13px] m:text-[11px] ">{designer.name}</p>
            <p className="font-pretendard-regular text-[24px] md:text-[15px] sm:text-[13px] m:text-[11px] ">{designer.ename}</p>
          </div>
        ))
          : filterDesigners.map((designer, idx) => (
            <div key={idx} className="flex flex-col items-start">
              <div className="w-full overflow-hidden">
                <img src={designer.src} alt={designer.alt} className="w-full h-full object-cover" />
              </div>
              <p className="font-pretendard-semibold mt-[7%] text-[24px] md:text-[16px] sm:text-[12px] m:text-[8px] ">{designer.name}</p>
              <p className="font-pretendard-regular text-[24px] md:text-[15px] sm:text-[13px] m:text-[11px] ">{designer.ename}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DesignerMain;