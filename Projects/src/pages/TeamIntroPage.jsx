import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const teams = {
  A: {
    team: "TEAM A",
    name: "ANEMOIA",
    image: "조별이미지/A조.jpg",
    groupPhoto: "조별이미지/A조/A조단체사진.jpg",
    shortIntro: "‘사라져가는 시골에 대한 도시인의 낯선 그리움’",
    longIntro: "아네모이아란 경험하지 못한 대상에게서 느끼는 향수나 그리움의 감정을 뜻한다. 팀 Anemoia는 특히 공간과 관련된 요소에서 아네모이아의 힌트를 얻었다. 현재 살고 있는 “서울”이라는 도시에서, 미경험의 공간이자 그리움의 대상인 시골을 떠올린다는 주제로 컬렉션을 전개한다. 'Stage 1. 살아가다'에서는 바쁜 도시와 그곳에서 사는 현대인의 모습을, 'Stage 2. 사라지다'에서는 그들이 떠올리는 시골의 모습을 펼쳐낸다. 역설적으로, 우리가 떠올리는 시골이 아름답고 평화롭기만 한 모습은 아니다.우리는 수도권 과밀 현상과 지방 소멸이라는 현실적인 문제 가운데 사라져가는 시골의 모습을 가감없이 제시하고자 한다.자연과 사람의 온기를 동시에 머금을 수 있는 존재는 오로지 인간으로부터 비롯된다. 우리는 우리만이 표현할 수 있는 그리운 고향의 조각들을 모아 자연의 공백을 회고하고자 한다.자연이 주는 위로와 안정의 힘은 강력하다.우리의 재치 있는 위로를 통해 각자의 그리운 공간을 떠올려주길 바란다. Stage 1. 살아가다  : 바삐 살아가는 현대인의 도시 Stage 2. 사라지다  : 그리움 속에 사라져가는 시골",

    desingers: [
      {
        photo: "조별이미지/A조/김민지.jpg",
        name: "김민지",
        ename: "Minji Kim",
      },
      {
        photo: "조별이미지/A조/사한나.jpg",
        name: "사한나",
        ename: "Hanna Sa",
      },
      {
        photo: "조별이미지/A조/이석준.jpg",
        name: "이석준",
        ename: "Seokjun Lee",
      },
      {
        photo: "조별이미지/A조/이소망.jpg",
        name: "이소망",
        ename: "Somang Lee",
      },
      {
        photo: "조별이미지/A조/이유나.jpg",
        name: "이유나",
        ename: "Yu-na Lee",
      },
      {
        photo: "조별이미지/A조/이지우.jpg",
        name: "이지우",
        ename: "Jiwoo Lee",
      },
      {
        photo: "조별이미지/A조/조연진.jpg",
        name: "조연진",
        ename: "Yeonjin Jo",
      }
    ]
  },
  B: {

  },
};

function TeamIntroPage() {
  const teamId = useParams();
  const teamInfo = teams[teamId];

  if (!teamInfo) return <div>해당 팀 정보가 없습니다.</div>;

  return (
    <div className='flex flex-col justify-between flex-1 '>
      <Header />
      <main className="px-[360px] xl:px-[250px] lg:px-[200px] md:px-[150px] sm:px-[100px] m:px-[80px]">
        <img src={teamInfo.image} alt="팀소개이미지" />
        <p>{teamInfo.team}</p>
        <p>{teamInfo.shortIntro}</p>
      </main>
      <Footer />
    </div>
  );
}

export default TeamIntroPage;