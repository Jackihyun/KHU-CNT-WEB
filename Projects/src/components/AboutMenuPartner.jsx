import JanSportPhoto from '../assets/JanSportPhoto.png';
import CarinLogo from '../assets/CarinLogo.png';
import IlHwaLogo from '../assets/IlHwaLogo.png';
import VerttyLogo from '../assets/VerttyLogo.png';
import { useEffect, useState } from 'react';

const partners = [
  {
    alt: "협찬사1",
    src: JanSportPhoto,
    name: <p>잔스포츠<br />JANSPORT</p>,
    height: "h-[194px]",
    link: "https://jansport.co.kr/"
  },
  {
    alt: "협찬사2",
    src: CarinLogo,
    name: <p>카린<br />CARIN</p>,
    height: "h-[64px]",
    link: "https://caringlasses.com/"
  },
  {
    alt: "협찬사3",
    src: VerttyLogo,
    name: <p>베르티<br />VERTTY</p>,
    height: "h-[194px]",
    link: "https://vertty.co.kr/"
  },
  {
    alt: "협찬사4",
    src: IlHwaLogo,
    name: <p>일화<br />ILHWA</p>,
    height: "h-[89.6px]",
    link: "https://www.ilhwa.co.kr/"
  },
]

function AboutMenuPartner() {
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
    <div className="flex flex-col items-start mb-[318px]">
      <p className="font-pretendard-semibold text-[44px] text-black mb-[50px] mt-[167px]">협찬사</p>

      <div className='grid grid-cols-3 gap-y-[66px] sm:grid-cols-2 m:grid-cols-1 gap-[25px] w-full'>
        {
          partners.map((partner, idx) => (
            <a key={idx} href={partner.link} target='_blank'>
              <div className='flex flex-col justify-center items-start'>
                <div className="supporter flex w-full bg-[#FBF9F8] justify-center items-center">
                  <img src={partner.src} alt={partner.alt} className={`w-full`} />
                </div>
                <p className='font-pretendard-regular text-black mt-[17px]'>{partner.name}</p>
              </div>
            </a>
          ))
        }
      </div>
    </div>
  );
}

export default AboutMenuPartner;