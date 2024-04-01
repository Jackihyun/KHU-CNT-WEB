import LOGO from '../assets/LOGO.png';
import POSTER from '../assets/POSTER.png';
import { useState } from 'react';

function AboutArticle1() {
  const text = {
    한국어: "우리는 환경오염으로 인한 영향이 어느 때보다 커지고 있는 세상에 살고 있다. 환경 오염의 주요 원인 중 하나로 패션은 빠지지 않는다. 삶과 패션의 양립 가능한 방법을 찾아야하는 지금, 아무것도 하지 않는다면 인류의 마지막(LAST) 세대가 될 것이고, 계속해서 ING 한다면 인류를 지속가능(LASTING)하게 하는 첫 세대가 될 것이다.",

    영어: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu diam ut dolor ornare bibendum. Nullam sed est ut leo commodo molestie. Praesent viverra lacinia mauris, ac efficitur lacus fermentum at. Mauris rhoncus sit amet diam in dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur volutpat arcu ex, vel tincidunt erat consequat sed. Suspendisse elementum, diam et tristique feugiat, purus nulla efficitur ante, a luctus felis enim ut dolor. Morbi ultrices sem mi, eu ultrices arcu molestie in. Praesent viverra non quam nec tincidunt.Nam quis eleifend libero.Maecenas rhoncus condimentum ultrices.Maecenas quis dolor eget elit consequat vestibulum quis eget diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean varius dignissim nulla, id vehicula sem pharetra at.In dolor nun. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam eu diam ut dolor ornare bibendum.Nullam sed est ut leo commodo molestie.Praesent viverra lacinia mauris, ac efficitur lacus fermentum at.Mauris rhoncus sit amet diam in dapibus.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Curabitur volutpat arcu ex, vel tincidunt erat consequat sed.Suspendisse elementum, diam et tristique feugiat.",

    중국어: "我们生活在环境污染的影响比任何时候都越来越高。环境污染的主要原因之一之一，时装并不掉。要想寻找生活生活和时尚的方法,如果什么都做,就会成为人类最后的(LAST)一代,继续IG的话,将成为持续IG的话,将成为可持续(LASTING)的第一代。"
  };

  const [languages, setLanguages] = useState('한국어');

  const handleLanguageChange = (language) => {
    setLanguages(language);
  };

  return (
    <div className="flex flex-col justify-center ">
      <div className="flex flex-col justify-center items-center">
        <p className='text-[36px] font-pretendard-regular'>제 44회 경희대학교 의상학과 졸업패션쇼</p>
        <img src={LOGO} alt="LOGO" className='w-[1300px] h-[274px]' />
      </div>
      <div className="flex mt-[118px] mb-[308px]">
        <img src={POSTER} alt="POSTER" className="w-[585px] h-[839px] mr-[24px]" />
        <div className="flex flex-col">
          <p className="text-[24px] font-pretendard-regular w-full h-[839px]">{text[languages]}
          </p>
          <div className="flex justify-end gap-[15px] mt-[24px]">
            <button onClick={() => handleLanguageChange('한국어')} className={`w-[40px] h-[40px] font-['PT_MONO'] text-[32px] rounded-full flex items-center justify-center ${languages === '한국어' ? 'bg-[#1A1A1A] text-[#FFF]' : 'bg-[#D9D9D9] text-[#000]'}`}>
              한
            </button>
            <button onClick={() => handleLanguageChange('영어')} className={`w-[40px] h-[40px] font-['PT_MONO'] text-[32px] rounded-full flex items-center justify-center ${languages === '영어' ? 'bg-[#1A1A1A] text-[#FFF]' : 'bg-[#D9D9D9] text-[#000]'}`}>
              A
            </button>
            <button onClick={() => handleLanguageChange('중국어')} className={`w-[40px] h-[40px] font-['PT_MONO'] text-[32px] rounded-full flex items-center justify-center ${languages === '중국어' ? 'bg-[#1A1A1A] text-[#FFF]' : 'bg-[#D9D9D9] text-[#000]'}`}>
              中
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutArticle1;