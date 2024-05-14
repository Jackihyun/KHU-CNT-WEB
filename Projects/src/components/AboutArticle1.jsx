import LOGO from '../assets/LOGO.png';
import AboutPoster from '../assets/AboutPoster.png';
import { useState } from 'react';

function AboutArticle1() {
  const text = {
    한국어: "이번 경희대학교 의상학과의 제44회 졸업작품패션쇼 <LASTING>은 삶과 패션의 조화를 통한 지속가능성을 주제로 환경오염과 인류의 미래에 대한 심도 깊은 성찰을 담고 있습니다. 패션 산업이 환경 오염의 주요 원인 중 하나로 꼽히는 상황에서, 현재 우리가 적극적인 조치를 취하지 않으면 이 세대가 인류의 마지막 세대가 될 위험이 있습니다. 그러나 지속적으로 환경 보호 노력을 이어간다면, 우리는 지속 가능한 발전을 이루는 첫 세대가 될 수 있습니다. <LASTING>은 이런 맥락에서 지속 가능한 삶과 패션의 조화를 모색합니다.",

    영어: "The 44th graduation fashion show <LASTING> by Kyung Hee University's department of clothing contains an in-depth reflection on environmental pollution and humanity's future under the theme of sustainability through the harmony of life and fashion. With the fashion industry considered one of the main causes of environmental pollution, this generation currently risks becoming the last generation of mankind if we do not take active action. However, if we continue our environmental protection efforts, we can be the first generation to achieve sustainable development. <LASTING> seeks to harmonize sustainable life and fashion in this context.",
  };


  return (
    <div className="flex flex-col justify-center">
      <img src={AboutPoster} alt='포스터' className='w-full' />
      <div className="grid grid-cols-2 mt-[48px] mb-[169px] gap-[45px]">
        <p className='font-pretendard-regular'>{text.한국어}</p>
        <p className='font-pretendard-regular'>{text.영어}</p>
      </div>
    </div>
  );
}

export default AboutArticle1;
