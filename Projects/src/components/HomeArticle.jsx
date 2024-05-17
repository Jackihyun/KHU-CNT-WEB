import MainImage from "../assets/image 20.png";
import MainPoster from "../assets/메인포스터.png";
import {motion} from 'framer-motion';

function Article() {
  return (
    <>
      <img src={MainPoster} alt="메인포스터" className="mb-[250px] w-full " />
      <div className="w-full flex pl-[100px] xl:pl-[77px] lg:pl-[59.2px] md:pl-[45.5px] sm:pl-[35px] m:pl-[27px]">
        <div className="flex items-start w-full justify-between gap-[15px]">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1, y:-80, transition:{delay: 0.3, type:"spring"}, }}>
            <div className="flex">
              <div className="flex-col">
                <p className="text-[56px] mb-[85px] font-['ft-activica-strong']">Life is more important than fashion<br />THAT&#39;S WHY FASHION IS IMPORTANT</p>
                <p className="inline-block text-[24px] font-['ft-activica-strong'] max-w-[1190px]">이번 경희대학교 의상학과의 제44회 졸업작품패션쇼 &lt;LASTING&gt;은 삶과 패션의 조화를 통한 지속가능성을 주제로 환경오염과 인류의 미래에 대한 심도 깊은 성찰을 담고 있습니다. 패션 산업이 환경 오염의 주요 원인 중 하나로 꼽히는 상황에서, 현재 우리가 적극적인 조치를 취하지 않으면 이 세대가 인류의 마지막 세대가 될 위험이 있습니다. 그러나 지속적으로 환경 보호 노력을 이어간다면, 우리는 지속 가능한 발전을 이루는 첫 세대가 될 수 있습니다. &lt;LASTING&gt;은 이런 맥락에서 지속 가능한 삶과 패션의 조화를 모색합니다.<br /><br />
                  The 44th graduation fashion show &lt;LASTING&gt; by Kyung Hee University&#39;s department of clothing contains an in-depth reflection on environmental pollution and humanity&#39;s future under the theme of sustainability through the harmony of life and fashion. With the fashion industry considered one of the main causes of environmental pollution, this generation currently risks becoming the last generation of mankind if we do not take active action. However, if we continue our environmental protection efforts, we can be the first generation to achieve sustainable development. &lt;LASTING&gt; seeks to harmonize sustainable life and fashion in this context.</p >
              </div>
              <img src={MainImage} alt="메인이미지" className="w-[30%] h-full items-center" />
            </div>
          </motion.div>
        </div>

      </div>


    </>
  );
}

export default Article;