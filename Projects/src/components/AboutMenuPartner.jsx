import AboutPartnerBox from "./AboutPartnerBox";

function AboutMenuPartner() {
  return (
    <div className="flex flex-col items-start mb-[318px]">
      <p className="font-pretendard-semibold text-[44px] text-black mb-[50px] mt-[167px]">협찬사</p>
      <div className="flex flex-col">
        <div className="flex mb-[70px] gap-[25px] justify-between ">
          <div className="flex flex-col">
            <AboutPartnerBox />
            <p className="mt-[21px] font-pretendard-regular text-[24px] text-black">협찬사1<br />partner1</p>
          </div>
          <div className="flex flex-col">
            <AboutPartnerBox />
            <p className="mt-[21px] font-pretendard-regular text-[24px] text-black">협찬사2<br />partner2</p>
          </div>
          <div className="flex flex-col">
            <AboutPartnerBox />
            <p className="mt-[21px] font-pretendard-regular text-[24px] text-black">협찬사3<br />partner3</p>
          </div>
        </div>
        <div className="flex mb-[70px] justify-between">
          <div className="flex flex-col">
            <AboutPartnerBox />
            <p className="mt-[21px] font-pretendard-regular text-[24px] text-black">협찬사1<br />partner1</p>
          </div>
          <div className="flex flex-col">
            <AboutPartnerBox />
            <p className="mt-[21px] font-pretendard-regular text-[24px] text-black">협찬사2<br />partner2</p>
          </div>
          <div className="flex flex-col">
            <AboutPartnerBox />
            <p className="mt-[21px] font-pretendard-regular text-[24px] text-black">협찬사3<br />partner3</p>
          </div>
        </div>
        <div className="flex mb-[70px] justify-between">
          <div className="flex flex-col">
            <AboutPartnerBox />
            <p className="mt-[21px] font-pretendard-regular text-[24px] text-black">협찬사1<br />partner1</p>
          </div>
          <div className="flex flex-col">
            <AboutPartnerBox />
            <p className="mt-[21px] font-pretendard-regular text-[24px] text-black">협찬사2<br />partner2</p>
          </div>
          <div className="flex flex-col">
            <AboutPartnerBox />
            <p className="mt-[21px] font-pretendard-regular text-[24px] text-black">협찬사3<br />partner3</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <AboutPartnerBox />
            <p className="mt-[21px] font-pretendard-regular text-[24px] text-black">협찬사1<br />partner1</p>
          </div>
          <div className="flex flex-col">
            <AboutPartnerBox />
            <p className="mt-[21px] font-pretendard-regular text-[24px] text-black">협찬사2<br />partner2</p>
          </div>
          <div className="flex flex-col">
            <AboutPartnerBox />
            <p className="mt-[21px] font-pretendard-regular text-[24px] text-black">협찬사3<br />partner3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMenuPartner;