import Minyoung from "../assets/디자이너프로필/강민영.jpg";
import Sowoo from "../assets/디자이너프로필/강사우.jpg";
import Gyuri from "../assets/디자이너프로필/김규리.jpg";
import Dayoung from "../assets/디자이너프로필/김다영.jpg";
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
    <div className="flex flex-col w-full bg-[#cd6629]">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[20.3vw]  text-center text-[#fbf9f8] font-['ft-activica-strong']">DESIGERS</p>
        <p className="w-full  text-[5.6vw] text-center mt-[5%] text-[#fbf9f8] sm:text-sm">
          제44회 패션쇼, 46인의 디자이너
        </p>
        <p className="w-full text-[1.5vw] text-center text-[#fbf9f8] mt-[10%] sm:text-sm">
          추후 본 페이지에서 디자이너 소개 및 작품 페이지를 만나보실 수 있습니다.
        </p>
      </div>

      <div className="bg-white grid grid-cols-3 sm:grid-cols-2 gap-4 p-4 mt-[65px] px-[360px] xl:px-[250px] lg:px-[200px] md:px-[150px] sm:px-[100px] m:px-[80px]">
        {designer.map((designer, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-full h-[350px] overflow-hidden">
              <img src={designer.src} alt={designer.alt} className="w-full h-full object-cover" />
            </div>
            <p className="text-center mt-2">{designer.name}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default DesignerMain;