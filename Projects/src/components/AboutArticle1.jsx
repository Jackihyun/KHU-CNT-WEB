import AboutPoster from '../assets/어바웃포스터.png';
import ImageLoader from '../components/ImageLoader';
import Skeleton from './Skeleton';
function AboutArticle1() {
  const text = {
    한국어: " 제44회 경희대학교 의상학과 졸업작품 패션쇼 <LASTING>은 삶과 패션의 조화를 통한 지속 가능성을 주제로 한다. 이번 패션쇼는 우리의 미래를 위협하는 사회 문제에 대한 성찰을 담고 있다. 특히 환경 오염의 주요 원인 중 하나로 꼽히는 패션 산업에 대한 경고의 메시지를 전달한다. 우리가 지금 적극적인 조치를 취하지 않으면 이 세대가 인류의 마지막(LAST) 세대가 될 수 있지만, 지속적으로 환경 보호 노력을 이어간다면(ING) 지속 가능한(LASTING) 발전을 이루는 첫 세대가 될 수 있다. 결국, 지속 가능한 미래는 우리의 손으로 만들어가야 한다는 이야기를 담고 있다. <LASTING>은 이러한 맥락에서 지속 가능한 삶과 패션의 조화를 모색한다.",

    영어: " <LASTING>, the 44th Graduation Fashion Show of Kyung Hee University's Department of Clothing and Textiles, centers on the theme of sustainability through the integration of life and fashion. This show reflects on social issues that threaten our future, particularly emphasizing the fashion industry's significant impact on environmental pollution. Without proactive measures, this generation could become the last (LAST) generation of humanity. However, through persistent action towards protecting the environment (ING), we can be the first generation to achieve sustainable (LASTING) development. Ultimately, it highlights that we must actively create a sustainable future with our own hands. <LASTING> aims to examine the balance between a sustainable lifestyle and fashion within this context.",
  };


  return (
    <div className="flex flex-col justify-center">
      <ImageLoader fetcher={() => AboutPoster} className='w-full'>
        <Skeleton className='w-full aspect-[3/4] rounded' />
      </ImageLoader>
      <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 m:grid-cols-1 mt-[48px] md:mt-[38px] sm:mt-[28px] m:mt-[28px] mb-[169px] md:mb-[150px] sm:mb-[130px] m:mb-[100px] gap-[45px] md:gap-[35px] sm:gap-[25px] m:gap-[20px]">
        <p className='font-pretendard-regular text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] m:text-[14px]'>{text.한국어}</p>
        <p className='font-pretendard-regular text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] m:text-[14px]'>{text.영어}</p>
      </div>
    </div>
  );
}

export default AboutArticle1;
