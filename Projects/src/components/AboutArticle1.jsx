import LOGO from '../assets/LOGO.png';

function AboutArticle1() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <p className='text-[36px]'>제 44회 경희대학교 의상학과 졸업패션쇼</p>
        <img src={LOGO} alt="LOGO" className='w-[70%]' />
      </div>
    </div>
  );
}

export default AboutArticle1;