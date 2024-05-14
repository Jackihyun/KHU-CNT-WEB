import Header from "../components/Header";
import Footer from "../components/Footer";
import teamAimage from "../assets/조별이미지/A조/A조.jpg";
import teamAgroupPhoto from "../assets/조별이미지/A조/A조단체사진.jpg";
import teamAdesinger1 from "../assets/조별이미지/A조/김민지.jpg";
import teamAdesinger2 from "../assets/조별이미지/A조/사한나.jpg";
import teamAdesinger3 from "../assets/조별이미지/A조/이석준.jpg";
import teamAdesinger4 from "../assets/조별이미지/A조/이소망.jpg";
import teamAdesinger5 from "../assets/조별이미지/A조/이유나.jpg";
import teamAdesinger6 from "../assets/조별이미지/A조/이지우.jpg";
import teamAdesinger7 from "../assets/조별이미지/A조/조연진.jpg";

import { useParams } from "react-router-dom";

const teams = {
  A: {
    team: "TEAM A",
    name: "ANEMOIA",
    image: teamAimage, // "../assets/조별이미지/A조/A조.jpg
    groupPhoto: teamAgroupPhoto,
    shortIntro: "‘사라져가는 시골에 대한 도시인의 낯선 그리움’",
    longIntro: `아네모이아란 경험하지 못한 대상에게서 느끼는 향수나 그리움의 감정을 뜻한다.<br/><br/>

      팀 Anemoia는 특히 공간과 관련된 요소에서 아네모이아의 힌트를 얻었다.<br/>
      현재 살고 있는 “서울”이라는 도시에서, 미경험의 공간이자 그리움의 대상인 시골을 떠올린다는 주제로 컬렉션을 전개한다.<br/>

      'Stage 1. 살아가다'에서는 바쁜 도시와 그곳에서 사는 현대인의 모습을,
      'Stage 2. 사라지다'에서는 그들이 떠올리는 시골의 모습을 펼쳐낸다.<br/><br/>

      역설적으로, 우리가 떠올리는 시골이 아름답고 평화롭기만 한 모습은 아니다.<br/>
      우리는 수도권 과밀 현상과 지방 소멸이라는 현실적인 문제 가운데 사라져가는 시골의 모습을 가감없이 제시하고자 한다.<br/><br/>

      자연과 사람의 온기를 동시에 머금을 수 있는 존재는 오로지 인간으로부터 비롯된다.<br/>
      우리는 우리만이 표현할 수 있는 그리운 고향의 조각들을 모아 자연의 공백을 회고하고자 한다.<br/>
      자연이 주는 위로와 안정의 힘은 강력하다.
      우리의 재치 있는 위로를 통해 각자의 그리운 공간을 떠올려주길 바란다.<br/><br/><br/>

      <strong>Stage 1. 살아가다</strong> : 바삐 살아가는 현대인의 도시<br/>
      <strong>Stage 2. 사라지다</strong> : 그리움 속에 사라져가는 시골`,

    desingers: [
      {
        photo: teamAdesinger1,
        name: "김민지",
        ename: "Minji Kim",
      },
      {
        photo: teamAdesinger2,
        name: "사한나",
        ename: "Hanna Sa",
      },
      {
        photo: teamAdesinger3,
        name: "이석준",
        ename: "Seokjun Lee",
      },
      {
        photo: teamAdesinger4,
        name: "이소망",
        ename: "Somang Lee",
      },
      {
        photo: teamAdesinger5,
        name: "이유나",
        ename: "Yu-na Lee",
      },
      {
        photo: teamAdesinger6,
        name: "이지우",
        ename: "Jiwoo Lee",
      },
      {
        photo: teamAdesinger7,
        name: "조연진",
        ename: "Yeonjin Jo",
      }
    ]
  },
  B: {
    team: "TEAM B",
    name: "ANEMOIA",
    image: "../assets/조별이미지/B조.jpg",
    groupPhoto: "../assets/조별이미지/B조/B조단체사진.jpg",
    shortIntro: "‘사라져가는 시골에 대한 도시인의 낯선 그리움’",
    longIntro: "아네모이아란 경험하지 못한 대상에게서 느끼는 향수나 그리움의 감정을 뜻한다. 팀 Anemoia는 특히 공간과 관련된 요소에서 아네모이아의 힌트를 얻었다. 현재 살고 있는 “서울”이라는 도시에서, 미경험의 공간이자 그리움의 대상인 시골을 떠올린다는 주제로 컬렉션을 전개한다. 'Stage 1. 살아가다'에서는 바쁜 도시와 그곳에서 사는 현대인의 모습을, 'Stage 2. 사라지다'에서는 그들이 떠올리는 시골의 모습을 펼쳐낸다. 역설적으로, 우리가 떠올리는 시골이 아름답고 평화롭기만 한 모습은 아니다.우리는 수도권 과밀 현상과 지방 소멸이라는 현실적인 문제 가운데 사라져가는 시골의 모습을 가감없이 제시하고자 한다.자연과 사람의 온기를 동시에 머금을 수 있는 존재는 오로지 인간으로부터 비롯된다. 우리는 우리만이 표현할 수 있는 그리운 고향의 조각들을 모아 자연의 공백을 회고하고자 한다.자연이 주는 위로와 안정의 힘은 강력하다.우리의 재치 있는 위로를 통해 각자의 그리운 공간을 떠올려주길 바란다. Stage 1. 살아가다  : 바삐 살아가는 현대인의 도시 Stage 2. 사라지다  : 그리움 속에 사라져가는 시골",

    desingers: [
      {
        photo: "../assets/조별이미지/A조/김민지.jpg",
        name: "김민지",
        ename: "Minji Kim",
      },
      {
        photo: "../assets/조별이미지/A조/사한나.jpg",
        name: "사한나",
        ename: "Hanna Sa",
      },
      {
        photo: "../assets/조별이미지/A조/이석준.jpg",
        name: "이석준",
        ename: "Seokjun Lee",
      },
      {
        photo: "../assets/조별이미지/A조/이소망.jpg",
        name: "이소망",
        ename: "Somang Lee",
      },
      {
        photo: "../assets/조별이미지/A조/이유나.jpg",
        name: "이유나",
        ename: "Yu-na Lee",
      },
      {
        photo: "../assets/조별이미지/A조/이지우.jpg",
        name: "이지우",
        ename: "Jiwoo Lee",
      },
      {
        photo: "../assets/조별이미지/A조/조연진.jpg",
        name: "조연진",
        ename: "Yeonjin Jo",
      }
    ]
  },
};

function TeamIntroPage() {
  const { teamId } = useParams();
  const team = teams[teamId];

  if (!team) {
    return <div>팀을 찾을 수 없습니다.</div>;
  }

  return (
    <div className='flex flex-col justify-between flex-1 '>
      <Header />
      <img src={team.image} alt="팀이미지" className="w-full h-full" />
      <main className="px-[360px] xl:px-[250px] lg:px-[200px] md:px-[150px] sm:px-[100px] m:px-[80px] mt-[50px]">
        <article className="flex flex-col justify-center items-center">
          <p className="font-['ft-activica-strong'] text-[32px]">{team.team}</p>
          <p className="font-['ft-activica-strong'] text-[150px] mb-[42px]">{team.name}</p>
          <p className="font-pretendard-regular text-[32px]">{team.shortIntro}</p>
        </article>
        <article className="mt-[97px]">
          <p className="text-[24px] w-full font-pretendard-regular" dangerouslySetInnerHTML={{ __html: team.longIntro }} />
        </article>
        <div className="mt-[150px]">
          <p className="font-['ft-activica-strong'] text-[40px] mb-[39px]">DESINGERS</p>
          <img src={team.groupPhoto} alt="groupphoto" className="mb-[69px]" />
          <div className="grid grid-cols-3 gap-y-[92px] gap-x-[23px]">
            {team.desingers.map((desinger, idx) => (
              <div key={idx} className="flex flex-col justify-center items-start">
                <img src={desinger.photo} alt={desinger.name} className="mb-[29px]" />
                <p className="font-pretendard-regular text-[24px]">{desinger.name}</p>
                <p className="font-pretendard-regular text-[24px]">{desinger.ename}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-[150px]">
          <p className="font-['ft-activica-strong'] text-[40px]">ARCHIVE</p>
          <div className="w-full bg-[#CD6629] mt-[50px] mb-[370px]">
            <p className="w-full text-center text-[#FBF9F8] text-[8vw] text-nowrap font-['ft-activica-strong']">COMING SOON</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default TeamIntroPage;