import Footer from "../components/Footer";
import { useRef } from "react";
import { Link } from "react-router-dom";

// A조 이미지
import teamAimage from "../assets/조별이미지/A조/A조.jpg";
import teamAgroupPhoto from "../assets/조별이미지/A조/A조단체사진.jpg";
import teamAdesinger1 from "../assets/조별이미지/A조/김민지.jpg";
import teamAdesinger2 from "../assets/조별이미지/A조/사한나.jpg";
import teamAdesinger3 from "../assets/조별이미지/A조/이석준.jpg";
import teamAdesinger4 from "../assets/조별이미지/A조/이소망.jpg";
import teamAdesinger5 from "../assets/조별이미지/A조/이유나.jpg";
import teamAdesinger6 from "../assets/조별이미지/A조/이지우.jpg";
import teamAdesinger7 from "../assets/조별이미지/A조/조연진.jpg";
import videoA from "../assets/조별비디오/VIDEO_A.mp4";

// B조 이미지
import teamBgroupPhoto from "../assets/조별이미지/B조/B조단체사진.jpg";
import teamBimage from "../assets/조별이미지/B조/B조.jpg";
import teamBdesinger1 from "../assets/조별이미지/B조/강민영.jpg";
import teamBdesinger2 from "../assets/조별이미지/B조/김민서.jpg";
import teamBdesinger3 from "../assets/조별이미지/B조/김이채.jpg";
import teamBdesinger4 from "../assets/조별이미지/B조/김희연.jpg";
import teamBdesinger5 from "../assets/조별이미지/B조/박지민.jpg";
import teamBdesinger6 from "../assets/조별이미지/B조/송겸승.jpg";
import teamBdesinger7 from "../assets/조별이미지/B조/우수진.jpg";
import videoB from "../assets/조별비디오/VIDEO_B.mp4";

// C조 이미지
import teamCimage from "../assets/조별이미지/C조/C조.jpg";
import teamCgroupPhoto from "../assets/조별이미지/C조/C조단체사진.jpg";
import teamCdesinger1 from "../assets/조별이미지/C조/김다영.jpg";
import teamCdesinger2 from "../assets/조별이미지/C조/김미곤.jpg";
import teamCdesinger3 from "../assets/조별이미지/C조/김소은.jpg";
import teamCdesinger4 from "../assets/조별이미지/C조/나민영.jpg";
import teamCdesinger5 from "../assets/조별이미지/C조/민시은.jpg";
import teamCdesinger6 from "../assets/조별이미지/C조/박슬빈.jpg";
import teamCdesinger7 from "../assets/조별이미지/C조/우가인.jpg";
import videoC from "../assets/조별비디오/VIDEO_C.mp4";

// D조 이미지
import teamDimage from "../assets/조별이미지/D조/D조.jpg";
import teamDgroupPhoto from "../assets/조별이미지/D조/D조단체사진.jpg";
import teamDdesinger1 from "../assets/조별이미지/D조/김민철.jpg";
import teamDdesinger2 from "../assets/조별이미지/D조/박정은.jpg";
import teamDdesinger3 from "../assets/조별이미지/D조/이경범.jpg";
import teamDdesinger4 from "../assets/조별이미지/D조/임기현.jpg";
import teamDdesinger5 from "../assets/조별이미지/D조/지서현.jpg";
import teamDdesinger6 from "../assets/조별이미지/D조/한수민.jpg";
import videoD from "../assets/조별비디오/VIDEO_D.mp4";

// E조 이미지
import teamEimage from "../assets/조별이미지/E조/E조.jpg";
import teamEgroupPhoto from "../assets/조별이미지/E조/E조단체사진.jpg";
import teamEdesinger1 from "../assets/조별이미지/E조/김규리.jpg";
import teamEdesinger2 from "../assets/조별이미지/E조/김은채.jpg";
import teamEdesinger3 from "../assets/조별이미지/E조/이자영.jpg";
import teamEdesinger4 from "../assets/조별이미지/E조/이현민.jpg";
import teamEdesinger5 from "../assets/조별이미지/E조/장유미.jpg";
import teamEdesinger6 from "../assets/조별이미지/E조/한승헌.jpg";
import teamEdesinger7 from "../assets/조별이미지/E조/홍채희.jpg";
import videoE from "../assets/조별비디오/VIDEO_E.mp4";

// F조 이미지
import teamFimage from "../assets/조별이미지/F조/F조.jpg";
import teamFgroupPhoto from "../assets/조별이미지/F조/F조단체사진.jpg";
import teamFdesinger1 from "../assets/조별이미지/F조/원소영.jpg";
import teamFdesinger2 from "../assets/조별이미지/F조/유가동.jpg";
import teamFdesinger3 from "../assets/조별이미지/F조/유철찬.jpg";
import teamFdesinger4 from "../assets/조별이미지/F조/이사기.jpg";
import teamFdesinger5 from "../assets/조별이미지/F조/이우기.jpg";
import teamFdesinger6 from "../assets/조별이미지/F조/장한빙.jpg";
import videoF from "../assets/조별비디오/VIDEO_F.mp4";

// G조 이미지
import teamGimage from "../assets/조별이미지/G조/G조.jpg";
import teamGgroupPhoto from "../assets/조별이미지/G조/G조단체사진.jpg";
import teamGdesinger1 from "../assets/조별이미지/G조/강사우.jpg";
import teamGdesinger2 from "../assets/조별이미지/G조/왕혜영.jpg";
import teamGdesinger3 from "../assets/조별이미지/G조/유서안.jpg";
import teamGdesinger4 from "../assets/조별이미지/G조/하정문.jpg";
import teamGdesinger5 from "../assets/조별이미지/G조/허귀연.jpg";
import videoG from "../assets/조별비디오/VIDEO_G.mp4";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageLoader from "../components/ImageLoader";
import Skeleton from "../components/Skeleton";

const teams = {
  A: {
    team: "TEAM A",
    name: "ANEMOIA",
    image: teamAimage, // "../assets/조별이미지/A조/A조.jpg
    groupPhoto: teamAgroupPhoto,
    shortIntro: [
      {
        short1: "‘사라져가는 시골에 대한 도시인의 낯선 그리움’",
        short2: "",
      },
    ],
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
      우리의 재치 있는 위로를 통해 각자의 그리운 공간을 떠올려주길 바란다.<br/><br/><br/>`,

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
        ename: "Yeonjin Cho",
      },
    ],
    stage1: {
      name: "살아가다",
      intro: "바삐 살아가는 현대인의 도시",
      images: [
        "1_32-1_이유나.jpg",
        "2_30-1_이소망.jpg",
        "3_29-1_이석준.jpg",
        "4_7-1_김민지.jpg",
        "5_39-1_조연진.jpg",
        "6_18-1_사한나.jpg",
        "7_34-1_이지우.jpg",
      ],
    },
    stage2: {
      name: "사라지다",
      intro: "그리움 속에 사라져가는 시골",
      images: [
        "8_29-2_이석준.jpg",
        "9_7-2_김민지.jpg",
        "10_39-2_조연진.jpg",
        "11_18-2_사한나.jpg",
        "12_32-2_이유나.jpg",
        "13_34-2_이지우.jpg",
        "14_34-3_이지우.jpg",
        "15_30-2_이소망.jpg",
      ],
    },
    film: videoA,
  },
  B: {
    team: "TEAM B",
    name: "ODYSSEY",
    image: teamBimage,
    groupPhoto: teamBgroupPhoto,
    shortIntro: [
      {
        short1: `ODYSSEY : El Dorado`,
        short2: `- 항해와 정박의 여정, 엘도라도를 향하여`,
      },
    ],
    longIntro: `세상은 바다와 같고 우리의 삶은 항해와 같다.<br/>바다는 평온하고 조용할 수 있지만, 때로는 거세게 파도가 치고 폭풍우가 몰아친다. 항해의 과정에서 만나는 마찰과 고난은 필연적이다.<br/>고난으로 우리는 성장하고 새로운 것을 배우지만,<br/>이를 극복하는 것만큼이나 재정비를 통해 자신을 돌보는 것은 우리의 삶을 더 풍요롭고 안정적으로 만든다.<br/>정박을 할 때 비로소 우리는 삶을 균형 있게 유지할 수 있다.<br/>우리는 항해를 하는 과정에서 적절한 쉼과 재정비를 통해 과거를 돌아보고,<br/>현재의 위치를 파악하며 새로운 도약을 준비한다.<br/><br/><br/>`,

    desingers: [
      {
        photo: teamBdesinger1,
        name: "강민영",
        ename: "Minyoung Kang",
      },
      {
        photo: teamBdesinger2,
        name: "김민서",
        ename: "Minseo Kim",
      },
      {
        photo: teamBdesinger3,
        name: "김이채",
        ename: "Iche Kim",
      },
      {
        photo: teamBdesinger4,
        name: "김희연",
        ename: "Heeyeon Kim",
      },
      {
        photo: teamBdesinger5,
        name: "박지민",
        ename: "Jimin Park",
      },
      {
        photo: teamBdesinger6,
        name: "송겸승",
        ename: "Gyeomseung Song",
      },
      {
        photo: teamBdesinger7,
        name: "우수진",
        ename: "Sujin Woo",
      },
    ],
    stage1: {
      name: "Anchor 정박",
      intro: "적절한 쉼과 재정비",
      images: [
        "79_6-1_김민서.jpg",
        "80_1-1_강민영.jpg",
        "81_11-1_김이채.jpg",
        "82_17-1_박지민.jpg",
        "83_12-1_김희연.jpg",
        "84_22-1_우수진.jpg",
        "85_19-1_송겸승.jpg",
      ],
    },
    stage2: {
      name: "Voyage 항해",
      intro: "목표를 향한 여정",
      images: [
        "86_17-2_박지민.jpg",
        "87_12-2_김희연.jpg",
        "88_6-2_김민서.jpg",
        "89_11-2_김이채.jpg",
        "90_19-2_송겸승.jpg",
        "91_22-2_우수진.jpg",
        "92_1-2_강민영.jpg",
      ],
    },
    film: videoB,
  },
  C: {
    team: "TEAM C",
    name: "UNBIRTHDAY",
    image: teamCimage,
    groupPhoto: teamCgroupPhoto,
    shortIntro: [
      {
        short1: `“우리의 birthday를 특별하게 만들어주는 unbirthday의 소중함”`,
        short2: "",
      },
    ],
    longIntro: `어린 시절, 한 친구가 특별한 날이 아님에도 매일 공주처럼 드레스를 입고 다녔었다.<br/>그 친구는 평범한 날에도 매일 주인공같이 보였다.<br/>우리는 꼭 생일에만 주인공이 될 수 있을까?<br/>우리는 우리의 일상을 더욱 소중히 대할 때, 비로소 삶의 주인공이 되어 특별하고도 주체적인 삶으로 나아갈 수 있다.<br/><br/><br/>`,

    desingers: [
      {
        photo: teamCdesinger1,
        name: "김다영",
        ename: "Dayoung Kim",
      },
      {
        photo: teamCdesinger2,
        name: "김미곤",
        ename: "Migon Kim",
      },
      {
        photo: teamCdesinger3,
        name: "김소은",
        ename: "Soeun Kim",
      },
      {
        photo: teamCdesinger4,
        name: "나민영",
        ename: "Minyoung Na",
      },
      {
        photo: teamCdesinger5,
        name: "민시은",
        ename: "Sieun Min",
      },
      {
        photo: teamCdesinger6,
        name: "박슬빈",
        ename: "Seulbin Park",
      },
      {
        photo: teamCdesinger7,
        name: "우가인",
        ename: "Gain Woo",
      },
    ],
    stage1: {
      name: "Unbirthday",
      intro: "birthday를 특별하게 만드는 364일의 일상",
      images: [
        "16_9-1_김소은.jpg",
        "17_14-1_민시은.jpg",
        "18_4-1_김다영.jpg",
        "19_13-1_나민영.jpg",
        "20_21-1_우가인.jpg",
        "21_15-1_박슬빈.jpg",
        "22_5-1_김미곤.jpg",
      ],
    },
    stage2: {
      name: "Birthday",
      intro: "unbirthday로 인해 특별해질 수 있는 하루",
      images: [
        "23_4-2_김다영.jpg",
        "24_9-2_김소은.jpg",
        "25_21-2_우가인.jpg",
        "26_14-2_민시은.jpg",
        "27_5-2_김미곤.jpg",
        "28_13-2_나민영.jpg",
        "29_15-2_박슬빈.jpg",
      ],
    },
    film: videoC,
  },

  D: {
    team: "TEAM D",
    name: "LEGO",
    image: teamDimage,
    groupPhoto: teamDgroupPhoto,
    shortIntro: [
      {
        short1: `"LEG Godt, Play Well!"`,
        short2: "",
      },
    ],
    longIntro: `LEGO의 어원인 덴마크어 "Leg Godt"는 "재미있게 잘 놀다"라는 뜻을 가졌다.<br/>재미있게 놀 수 있는 장난감을 만들기 위한 레고사의 원칙에서는 삶의 중요한 가치를 엿볼 수 있다.<br/><br/>무한한 가능성을 지닐 것<br/>일년 내내 질리지 않을 것<br/>활기차고 조화로울 것<br/>영원히 가지고 놀 수 있을 것 등<br/><br/>연결과 가능성의 가치를 지닌 레고블록을 조립하는 것은 어린아이들의 자유로운 유희이며, 일상에 지친 어른들의 소소한 위로가 되기도 한다.<br/><br/><br/>`,

    desingers: [
      {
        photo: teamDdesinger1,
        name: "김민철",
        ename: "Mincheol Kim",
      },
      {
        photo: teamDdesinger2,
        name: "박정은",
        ename: "Jeongeun Park",
      },
      {
        photo: teamDdesinger3,
        name: "이경범",
        ename: "Gyeongbeom Lee",
      },
      {
        photo: teamDdesinger4,
        name: "임기현",
        ename: "Kihyun Lim",
      },
      {
        photo: teamDdesinger5,
        name: "지서현",
        ename: "Seohyeon Jee",
      },
      {
        photo: teamDdesinger6,
        name: "한수민",
        ename: "Pham Phuong Thao",
      },
    ],
    stage1: {
      name: "LEGO-DUPLO",
      intro: "아이들의 즐거운 놀이를 위한 밝은 색상과 큰 크기의 레고",
      images: [
        "30_16-1_박정은.jpg",
        "31_40-1_지서현.jpg",
        "32_8-1_김민철.jpg",
        "33_36-1_임기현.jpg",
        "34_42-1_한수민.jpg",
        "35_27-1_이경범.jpg",
      ],
    },
    stage2: {
      name: "LEGO-TECHNIC",
      intro: "공업적 부품을 활용한, 보다 정교한 어른들을 위한 장난감",
      images: [
        "36_36-2_임기현.jpg",
        "37_8-2_김민철.jpg",
        "38_27-2_이경범.jpg",
        "39_42-2_한수민.jpg",
        "40_40-2_지서현.jpg",
        "41_16-2_박정은.jpg",
      ],
    },
    film: videoD,
  },
  E: {
    team: "TEAM E",
    name: "ENDEAR",
    image: teamEimage,
    groupPhoto: teamEgroupPhoto,
    shortIntro: [
      {
        short1: `"사랑은 두 가지의 방향성을 띈다. 나에게로 수렴하는가? 타인을 향해 발산하는가?"`,
        short2: "",
      },
    ],
    longIntro: `우리는 사랑하기 위해, 그리고 사랑받기 위해 살아간다.<br/>
    사랑은 나에 대한 애착인가? 타인에 대한 집착인가?<br/>
    정상 속 비정상이 되는 것, 남들과 다른 것에 대한 두려움으로<br/>
    눈에 띄는 행위를 서로 단속해왔던 과거와는 달리,<br/>
    현재 우리 사회는 개인이 다양한 방식으로 자신을 뽐내고 표출하고자 한다.<br/>
    하지만 “개성”에 대한 계속된 찬미는 타인에 끊임없는 차별을 불러일으킬 수 있으며, 본인을 얽매이게도 한다. <br/><br/>
    반면, 타인에게 집중된 관심을 가지며 자신을 등외시하는 사람 또한 발생한다.<br/>
    너무나 완벽한 타인을 상정하기에, 끊임없이 타자에 몰두하고,<br/>
    흠없는 타자에 대한 열망은 자기파괴적 행동으로 귀결된다.<br/><br/>
    나 자신을 너무 사랑하여 사랑이 나 자신에게로 수렴하는 배타적인 성향의 Narcissism,<br/>나보다 타인을 사랑하여 사랑이 타인을 향해 발산하는 희생적인 성향의 Echoism<br/>사랑이 선사하는 변치 않는 행복을 추구하고 양극적인 방법으로 나아가지 않도록 관심을 가져야 한다고 생각하기에 우리는 양극화에 저항(Anti)하고자 한다.<br/><br/><br/>`,

    desingers: [
      {
        photo: teamEdesinger1,
        name: "김규리",
        ename: "Gyuri Kim",
      },
      {
        photo: teamEdesinger2,
        name: "김은채",
        ename: "Eunchae Kim",
      },
      {
        photo: teamEdesinger3,
        name: "이자영",
        ename: "Jayoung Lee",
      },
      {
        photo: teamEdesinger4,
        name: "이현민",
        ename: "Hyunmin Lee",
      },
      {
        photo: teamEdesinger5,
        name: "장유미",
        ename: "Youmi Jang",
      },
      {
        photo: teamEdesinger6,
        name: "한승헌",
        ename: "Seungheon Han",
      },
      {
        photo: teamEdesinger7,
        name: "홍채희",
        ename: "Chaehui Hong",
      },
    ],
    stage1: {
      name: "Anti-Echoism",
      intro:
        "오로지 자신만을 생각하던 미성숙한 사람에서, 어른스럽고 완성된 사람으로",
      images: [
        "65_3-1_김규리.jpg",
        "66_45-1_홍채희.jpg",
        "67_43-1_한승헌.jpg",
        "68_33-1_이자영.jpg",
        "69_37-1_장유미.jpg",
        "70_35-1_이현민.jpg",
        "71_10-1_김은채.jpg",
      ],
    },
    stage2: {
      name: "Anti-Narcissism",
      intro:
        "타인을 맹목적으로 좇던 불안정한 사랑에서, 자신을 소중히 하는 안정된 사랑으로",
      images: [
        "72_10-2_김은채.jpg",
        "73_37-2_장유미.jpg",
        "74_3-2_김규리.jpg",
        "75_43-2_한승헌.jpg",
        "76_33-2_이자영.jpg",
        "77_45-2_홍채희.jpg",
        "78_35-2_이현민.jpg",
      ],
    },
    film: videoE,
  },
  F: {
    team: "TEAM F",
    name: "SOIL",
    image: teamFimage,
    groupPhoto: teamFgroupPhoto,
    shortIntro: [
      {
        short1: `"연약하고도 단호한 도자기"`,
        short2: "",
      },
    ],
    longIntro: `도자기는 흙으로 만들어져서 본질적으로 약하며 충격에 취약하다.<br/>하지만 여러 단계의 제작 공정을 거치며 점점 강해진다. 고온에서 소성되어 단단해지고, 내마모성이 뛰어나진다. 도자기의 단단함은 그 매력적인 특성 중 하나이다.<br/><br/>이러한 도자기의 특성은 연약함과 단호함을 모두 가진 인간과 비슷하다고 할 수 있다.<br/>우리는 온갖 어려움을 시달리는 과정에서 때로는 강해 보이지만 어느 순간에는 무너지기도 한다.<br/><br/><br/>`,

    desingers: [
      {
        photo: teamFdesinger1,
        name: "원소영",
        ename: "Yuan Hsiao Yin",
      },
      {
        photo: teamFdesinger2,
        name: "유가동",
        ename: "Liu Jiatong",
      },
      {
        photo: teamFdesinger3,
        name: "유철찬",
        ename: "Liu Zhe Can",
      },
      {
        photo: teamFdesinger4,
        name: "이사기",
        ename: "Li Si Qi ",
      },
      {
        photo: teamFdesinger5,
        name: "이우기",
        ename: "Li Yu Qi",
      },
      {
        photo: teamFdesinger6,
        name: "장한빙",
        ename: "Zhang Han Bing",
      },
    ],
    stage1: {
      name: "Frailty(연약함)",
      intro: "충격과 고난에 의해 쉽게 깨지고 무너지다",
      images: [
        "42_28-1_이사기.jpg",
        "43_26-1_유철찬.jpg",
        "44_24-1_유가동.jpg",
        "45_31-1_이우기.jpg",
        "46_23-1_원소영.jpg",
        "47_38-1_장한빙.jpg",
      ],
    },
    stage2: {
      name: "Adamant(단호함)",
      intro: "어려움을 이겨내어 강하고 단단하다",
      images: [
        "48_38-2_장한빙.jpg",
        "49_23-2_원소영.jpg",
        "50_26-2_유철찬.jpg",
        "51_28-2_이사기.jpg",
        "52_31-2_이우기.jpg",
        "53_24-2_유가동.jpg",
      ],
    },
    film: videoF,
  },
  G: {
    team: "TEAM G",
    name: "籠中鳥",
    image: teamGimage,
    groupPhoto: teamGgroupPhoto,
    shortIntro: [
      {
        short1: `“새장 속의 새”`,
        short2: "",
      },
    ],
    longIntro: `예로부터 '새장 속의 새'라는 말은 속박된 사람을 비유하며 강렬한 자유감에 대한 열망을 표현해왔다.<br/><br/>푸른 하늘을 날아야 하는 새들은 좁은 새장 속에 갇힌 순간 더는 자유롭게 날지 못하고 노랫소리도 더이상 아름답지 않다.<br/>새장 속의 시간은 더없이 무겁고, 매 순간마다 괴롭다.<br/>그러나 자유에 대한 열망을 버리지 않고 늘 그 금속의 질곡을 헤쳐 나가려 했다.<br/><br/>새가 우리에게 주는 이미지는 자유롭고 경쾌한 모습이다. 우리의 주제에 있어 어떤 영혼의 상징으로 볼 수 있다. 일종의 자유와 외부의 속박을 초월한 정신을 대표한다.<br/>새장은 화려하고 속박적인 모습이다. 어떤 상태나 조건에 갇혀 자유롭게 발전하거나 성장할 수 없게 하고, 해탈에 대한 갈망과 자아에 대한 생각을 불러일으킨다.<br/><br/><br/>`,

    desingers: [
      {
        photo: teamGdesinger1,
        name: "강사우",
        ename: "Jiang Siyu",
      },
      {
        photo: teamGdesinger2,
        name: "왕혜영",
        ename: "Wang Hui Ying",
      },
      {
        photo: teamGdesinger3,
        name: "유서안",
        ename: "Liao Jui An",
      },
      {
        photo: teamGdesinger4,
        name: "하정문",
        ename: "Xia Jing Wen",
      },
      {
        photo: teamGdesinger5,
        name: "허귀연",
        ename: "Xu Gui Yan",
      },
    ],
    stage1: {
      name: "鳥",
      intro: "자유롭고 경쾌한 모습",
      images: [
        "54_44-1_허귀연.jpg",
        "55_25-1_유서안.jpg",
        "56_2-1_강사우.jpg",
        "57_20-1_왕혜영.jpg",
        "58_41-1_하정문.jpg",
      ],
    },
    stage2: {
      name: "籠",
      intro: "화려하고 속박적인 모습",
      images: [
        "59_20-2_왕혜영.jpg",
        "60_44-2_허귀연.jpg",
        "61_25-2_유서안.jpg",
        "62_2-2_강사우.jpg",
        "63_41-2_하정문.jpg",
        "64_41-3_하정문.jpg",
      ],
    },
    film: videoG,
  },
};

const importedImages = import.meta.glob("../assets/아카이브 사진/*.jpg", {
  eager: true,
});
const imagePaths = Object.keys(importedImages);

const imageData = [];

imagePaths.forEach((path) => {
  const fileName = path.match(/\/([^/]+)$/)[1]; // 파일명 추출

  // 팀별 이미지 분류
  Object.keys(teams).forEach((teamKey) => {
    const team = teams[teamKey];
    const name = fileName
      .match(/[^_]+(?=\.\w+$)/)[0]
      .split("_")
      .pop(); // 이름 추출
    const url = `/designer/${name}`;
    if (
      team.stage1 &&
      team.stage1.images &&
      team.stage1.images.includes(fileName)
    ) {
      imageData.push({
        img: importedImages[path].default,
        team: teamKey,
        stage: "stage1",
        name: name,
        url: url, // URL 생성
      });
    }
    if (
      team.stage2 &&
      team.stage2.images &&
      team.stage2.images.includes(fileName)
    ) {
      imageData.push({
        img: importedImages[path].default,
        team: teamKey,
        stage: "stage2",
        name: name,
        url: url, // URL 생성
      });
    }
  });
});

function TeamIntroPage() {
  const { teamId } = useParams();
  const team = teams[teamId];

  // stage 스크롤 기능
  const stage1Ref = useRef(null);
  const stage2Ref = useRef(null);

  const scrollToStage = (stageRef) => {
    if (stageRef.current) {
      const headerHeight = 100; // 헤더 높이를 픽셀 단위로 지정
      const elementPosition = stageRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!team) {
    return <div>팀을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex flex-col justify-between flex-1 ">
      <ImageLoader
        fetcher={() => team.image}
        className="w-full h-full pt-[80px] md:pt-[50px] sm:pt-[50px] m:pt-[50px]"
      >
        <Skeleton className="w-full aspect-[3/1] rounded" />
      </ImageLoader>
      {/* <img src={team.image} alt="팀이미지" className="w-full h-full pt-[80px] md:pt-[50px] sm:pt-[50px] m:pt-[50px]" /> */}
      <main className="px-[360px] xl:px-[250px] lg:px-[200px] md:px-[100px] sm:px-[20px] m:px-[20px] mt-[50px] mb-[450px] xl:mb-[400px] lg:mb-[350px] md:mb-[300px] sm:mb-[250px] m:mb-[200px]">
        <article className="flex flex-col justify-center items-center">
          <p className="font-['ft-activica-strong'] text-[32px] xl:text-[30px] lg:text-[26px] md:text-[22px] sm:text-[18px] m:text-[14px]">
            {team.team}
          </p>
          <p className="font-['ft-activica-strong'] text-[150px] xl:text-[138px] lg:text-[120px] md:text-[100px] sm:text-[62px] m:text-[60px] leading-none mb-[42px]">
            {team.name}
          </p>

          <div>
            {team.shortIntro.map((intro, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center items-center"
              >
                <p className="text-center font-pretendard-regular text-[32px] xl:text-[30px] lg:text-[26px] md:text-[22px] sm:text-[18px] m:text-[14px]">
                  {intro.short1}
                  <br />
                  {intro.short2}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="mt-[97px] md:mt-[60px] sm:mt-[40px] m:mt-[30px]">
          <p
            className="text-[24px] md:text-[18px] sm:text-[14px] m:text-[10px] w-full font-pretendard-regular "
            dangerouslySetInnerHTML={{ __html: team.longIntro }}
          />
          <p
            id="stage1"
            className="font-pretendard-semibold text-[24px] md:text-[18px] sm:text-[14px] m:text-[10px] cursor-pointer "
            onClick={() => scrollToStage(stage1Ref)}
          >
            <span className="hover:underline">Stage1. {team.stage1.name} </span>:{" "}
            <span className="font-pretendard-regular text-[24px] md:text-[18px] sm:text-[14px] m:text-[10px">
              {team.stage1.intro}
            </span>
          </p>
          <p
            id="stage2"
            className="font-pretendard-semibold text-[24px] md:text-[18px] sm:text-[14px] m:text-[10px] cursor-pointer"
            onClick={() => scrollToStage(stage2Ref)}
          >
            <span className="hover:underline">Stage2. {team.stage2.name} </span>:{" "}
            <span className="font-pretendard-regular text-[24px] md:text-[18px] sm:text-[14px] m:text-[10px]">
              {team.stage2.intro}
            </span>
          </p>
        </article>
        <div className="mt-[150px] md:mt-[100px] sm:mt-[70px] m:mt-[50px]">
          <p className="font-['ft-activica-strong'] text-[30px] mb-[39px]">
            DESINGERS
          </p>
          <ImageLoader
            fetcher={() => team.groupPhoto}
            className="mb-[69px] xl:mb-[68px] lg:mb-[60px] md:mb-[50px] sm:mb-[40px] m:mb-[34px]"
          >
            <Skeleton className="w-full aspect-[3/2] rounded" />
          </ImageLoader>
          <div className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 m:grid-cols-2 gap-y-[92px] md:gap-y-[60px] sm:gap-y-[30px] m:gap-y-[20px] gap-x-[23px]">
            {team.desingers.map((desinger, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center items-start"
              >
                <ImageLoader
                  fetcher={() => desinger.photo}
                  className="mb-[29px] md:mb-[20px] sm:mb-[15px] m:mb-[10px]"
                >
                  <Skeleton className="w-full aspect-[3/4] rounded" />
                </ImageLoader>
                <p className="font-pretendard-semibold text-[18px] md:text-[15px] sm:text-[13px] m:text-[11px]">
                  {desinger.name}
                </p>
                <p className="font-pretendard-regular text-[18px] md:text-[15px] sm:text-[13px] m:text-[11px]">
                  {desinger.ename}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-[150px] md:mt-[100px] sm:mt-[70px] m:mt-[50px]">
          <p className="font-['ft-activica-strong'] text-[30px] mb-[80px] xl:mb-[70px] lg:mb-[65px] md:mb-[55px] sm:mb-[45px] m:mb-[35px]">
            ARCHIVE
          </p>
          <p
            ref={stage1Ref}
            className="font-pretendard-semibold text-[15px] xl:text-[15px] lg:text-[13px] md:text-[11px] sm:text-[9px] m:text-[9px] mb-[50px] xl:mb-[45px] lg:mb-[40px] md:mb-[35px] sm:mb-[30px] m:mb-[25px]"
          >
            Stage 1. {team.stage1.name}
          </p>
          <div className="mb-[50px] xl:mb-[45px] lg:mb-[40px] md:mb-[40px] sm:mb-[35px] m:mb-[35px]">
            <div className="w-full">
              <img />
            </div>
            <div className="grid grid-cols-3 gap-x-[23px] gap-y-[50px]">
              {imageData
                .filter(
                  (data) => data.team === teamId && data.stage === "stage1"
                )
                .map((data, idx) => (
                  <Link to={data.url} key={idx}>
                    <img
                      src={data.img}
                      alt={data.name}
                      className="object-cover w-full aspect-[3/4]"
                    />
                  </Link>
                ))}
            </div>
          </div>
          <p
            ref={stage2Ref}
            className="font-pretendard-semibold text-[15px] xl:text-[15px] lg:text-[13px] md:text-[11px] sm:text-[9px] m:text-[9px] mb-[50px] xl:mb-[45px] lg:mb-[40px] md:mb-[35px] sm:mb-[30px] m:mb-[25px]"
          >
            Stage 2. {team.stage2.name}
          </p>
          <div className="mb-[50px]">
            <div className="w-full">
              <img />
            </div>
            <div className="grid grid-cols-3 gap-x-[23px] gap-y-[50px]">
              {imageData
                .filter(
                  (data) => data.team === teamId && data.stage === "stage2"
                )
                .map((data, idx) => (
                  <Link to={data.url} key={idx}>
                    <img
                      src={data.img}
                      alt={data.name}
                      className="object-cover w-full aspect-[3/4]"
                    />
                  </Link>
                ))}
            </div>
          </div>
          <p className="font-['ft-activica-strong'] text-[30px] mb-[50px] xl:mb-[50px] lg:mb-[45px] md:mb-[40px] sm:mb-[35px] m:mb-[30px]">
            THEME FILM
          </p>
          <video width="full" controls>
            <source src={team.film} type="video/mp4" />
          </video>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default TeamIntroPage;
