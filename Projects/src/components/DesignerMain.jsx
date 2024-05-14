import Minyoung from "../assets/조별이미지/B조/강민영.jpg";
import Sowoo from "../assets/조별이미지/G조/강사우.jpg";
import Gyuri from "../assets/조별이미지/E조/김규리.jpeg";
import Dayoung from "../assets/조별이미지/C조/김다영.jpg";
import Migon from "../assets/조별이미지/C조/김미곤.jpg";
import Minseo from "../assets/조별이미지/B조/김민서.jpg";
import Minji  from "../assets/조별이미지/A조/김민지.jpg";
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
      name: <p>강민영<br />Minyoung Kang</p>,
    },
    {
      alt: "강사우 디자이너",
      src: Sowoo,
      name: <p>강사우<br />Jiang Siyu</p>,
    },
    {
      alt: "김규리 디자이너",
      src: Gyuri,
      name: <p>김규리<br />Gyuri Kim</p>,
    },
    {
      alt: "김다영 디자이너",
      src: Dayoung,
      name: <p>김다영<br />Dayoung Kim</p>,
    },
    {
      alt : "김미곤 디자이너",
      src : Migon,
      name : <p>김미곤<br />Migon Kim</p>,
    },
    {
      alt : "김민서 디자이너",
      src : Minseo,
      name : <p>김민서<br />Minseo Kim</p>,
    },
    {
      alt :   "김민지 디자이너",
      src : Minji,
      name : <p>김민지<br />Minji Kim</p>,
    },
    {
      alt : "김민철 디자이너",
      src : Mincheol,
      name : <p>김민철<br />Mincheol Kim</p>,
    }, 
    {
      alt : "김소은 디자이너",
      src : Soeun,
      name : <p>김소은<br />Soeun Kim</p>,
    },
    {
      alt : "김은채 디자이너",
      src : Eunchae,
      name : <p>김은채<br />Eunchae Kim</p>,
    },
    {
      alt : "김이체 디자이너",
      src : Iche,
      name : <p>김이체<br />Iche Kim</p>,
    },
    {
      alt : "김희연 디자이너",
      src : Heeyeon,
      name : <p>김희연<br />Heeyeon Kim</p>,
    },
    {
      alt : "나민영 디자이너",
      src : NaMinyoung,
      name : <p>나민영<br />NaMinyoung</p>,
    }, 
    {
      alt : "민시은 디자이너",
      src : Sieun,
      name : <p>민시은<br />Sieun Min</p>,
    },
    {
      alt : "박슬빈 디자이너",
      src : Seulbin,
      name : <p>박슬빈<br />Seulbin Park</p>,
    },
    {
      alt : "박정은 디자이너",
      src : Jeongeun,
      name : <p>박정은<br />Jeongeun Park</p>,
    },
    {
      alt : "박지민 디자이너",
      src : Jimin,
      name : <p>박지민<br />Jimin Park</p>,
    },
    {
      alt : "사한나 디자이너",
      src : Hanna,
      name : <p>사한나<br />Hanna Sa</p>,
    },
    {
      alt : "송겸승 디자이너",
      src : Gyeomseung,
      name : <p>송겸승<br />Gyeomseung Song</p>,
    },
    {
      alt : "왕혜영 디자이너",
      src : Huiying,
      name : <p>왕혜영<br />Huiying Wang</p>,
    },
    {
      alt : "우가인 디자이너",
      src : Gain,
      name : <p>우가인<br />Gain Woo</p>,
    },
    {
      alt : "우수진 디자이너",
      src : Sujin,
      name : <p>우수진<br />Sujin Woo</p>,
    },
    {
      alt : "원소영 디자이너",
      src : Hsiaoyun,
      name : <p>원소영<br />Hsiaoyun Won</p>,
    },
    {
      alt : "유가동 디자이너",
      src : Jiatong,
      name : <p>유가동<br />Jiatong Yu</p>,
    },
    {
      alt : "유서안 디자이너",
      src : Juian,
      name : <p>유서안<br />Juian Yu</p>,
    },
    {
      alt : "유철찬 디자이너",
      src : Zhecan,
      name : <p>유철찬<br />Zhecan Yu</p>,
    },
    {
      alt : "이경범 디자이너",
      src : Gyeongbeom,
      name : <p>이경범<br />Gyeongbeom Lee</p>,
    },
    {
      alt : "이사기 디자이너",
      src : Siqi,
      name : <p>이사기<br />Siqi Lee</p>,
    }, 
    {
      alt : "이석준 디자이너",
      src : Seokjun,
      name : <p>이석준<br />Seokjun Lee</p>,
    },
    {
      alt : "이소망 디자이너",
      src : Somang,
      name : <p>이소망<br />Somang Lee</p>,
    },
    {
      alt : "이우기 디자이너",
      src : Yuqi,
      name : <p>이우기<br />Yuqi Lee</p>,
    },
    {
      alt : "이유나 디자이너",
      src : Yuna,
      name : <p>이유나<br />Yuna Lee</p>,
    },
    {
      alt : "이자영 디자이너",
      src : Jayoung,
      name : <p>이자영<br />Jayoung Lee</p>,
    },
    {
      alt : "이지우 디자이너",
      src : Jiwoo,
      name : <p>이지우<br />Jiwoo Lee</p>,
    },
    {
      alt : "이현민 디자이너",
      src : Hyunmin,
      name : <p>이현민<br />Hyunmin Lee</p>,
    },
    {
      alt : "임기현 디자이너",
      src : kihyun,
      name : <p>임기현<br />Kihyun Lim</p>,
    },
    {
      alt : "장유미 디자이너",
      src : Youmi,
      name : <p>장유미<br />Youmi Jang</p>,
    },
    {
      alt : "장한빙 디자이너",
      src : Hanbing,
      name : <p>장한빙<br />Hanbing Jang</p>,
    },
    {
      alt : "조연진 디자이너",
      src : Yeonjin,
      name : <p>조연진<br />Yeonjin Cho</p>,
    },
    {
      alt : "지서현 디자이너",
      src : Seohyeon,
      name : <p>지서현<br />Seohyeon Ji</p>,
    },
    {
      alt : "하정문 디자이너",
      src : Jingwen,
      name : <p>하정문<br />Jingwen Ha</p>,
    },
    {
      alt : "한수민 디자이너",
      src : Phamphuong,
      name : <p>한수민<br />Phamphuong Han</p>,
    },
    {
      alt : "한승헌 디자이너",
      src : Seungheon,
      name : <p>한승헌<br />Seungheon Han</p>,
    },
    {
      alt : "허귀연 디자이너",
      src : Guiyan,
      name : <p>허귀연<br />Guiyan He</p>,
    },
    {
      alt : "홍채희 디자이너",
      src : Chaehui,
      name : <p>홍채희<br />Chaehui Hong</p>,
    },
  ]

  const [repaint, setRepaint] = useState(0);

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
    <div className="flex flex-col w-full ">
      <div className="flex flex-col justify-center items-center bg-[#cd6629]">
        <p className="text-[20.3vw]  text-center text-[#fbf9f8] font-['ft-activica-strong']">DESIGERS</p>
        <p className="w-full  text-[5.6vw] text-center mt-[5%] text-[#fbf9f8] sm:text-sm">
          제44회 패션쇼, 46인의 디자이너
        </p>
        <p className="w-full text-[1.5vw] text-center text-[#fbf9f8] mt-[10%] sm:text-sm">
          추후 본 페이지에서 디자이너 소개 및 작품 페이지를 만나보실 수 있습니다.
        </p>
      </div>

      <div className="bg-white grid grid-cols-3 sm:grid-cols-2 m:grid-cols-1 gap-4 p-4 mt-[65px] px-[360px] xl:px-[250px] lg:px-[200px] md:px-[150px] sm:px-[100px] m:px-[80px]">
        {designer.map((designer, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-full h-[350px] overflow-hidden">
              <img src={designer.src} alt={designer.alt} className="w-full h-full object-cover" />
            </div>
            <p className="text-center mt-2">{designer.name}</p>
            </div>
        ))}
      </div>
      <div className="mb-[20vh] bg-white"></div>
    </div>
  );
}

export default DesignerMain;