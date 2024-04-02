
const data = [
  {
    role: '졸업작품준비위원장',
    members: [
      { krName: '김희연', enName: 'Kim Heeyeon' },
      // 추가 인원
    ]
  },
  {
    role: '졸업작품준비부위원장',
    members: [
      { krName: '김규리', enName: 'Kim Gyuri' },
      // 추가 인원
    ]
  },
  {
    role: '졸업작품준비회 총무',
    members: [
      { krName: '홍채희', enName: 'Hong Chaehee' },
      // 추가 인원
    ]
  },
  {
    role: '졸업작품준비회 회계',
    members: [
      { krName: '조연진', enName: 'Jo Yeonjin' },
      // 추가 인원
    ]
  },
  {
    role: '4학년 학과 대표',
    members: [
      { krName: '사한나', enName: 'Sa Hanna' },
      // 추가 인원
    ]
  },
  {
    role: '졸업작품준비회 마케팅팀',
    members: [
      { krName: '김규리', enName: 'Kim Gyuri' },
      { krName: '김희연', enName: 'Kim Heeyeon' },
      { krName: '민시은', enName: 'Min Sieun' },
      { krName: '박슬빈', enName: 'Park Seulbin' },
      { krName: '송겸승', enName: 'Song Gyeomseung' },
      { krName: '조연진', enName: 'Jo Yeonjin' },

      // 추가 인원
    ]
  },
  {
    role: '졸업작품준비회 편집디자인팀',
    members: [
      { krName: '강민영', enName: 'Kang Minyeong' },
      { krName: '김규리', enName: 'Kim Gyuri' },
      { krName: '김민지', enName: 'Kim Minji' },
      { krName: '김희연', enName: 'Kim Heeyeon' },
      { krName: '이유나', enName: 'Lee-Yu-na' },
      { krName: '이지우', enName: 'Lee Jiwoo' },
      { krName: '홍채희', enName: 'Hong Chaehee' },

      // 추가 인원
    ]
  },
  {
    role: '졸업작품준비회 미디어팀',
    members: [
      { krName: '강민영', enName: 'Kang Minyeong' },
      { krName: '김규리', enName: 'Kim Gyuri' },
      { krName: '김희연', enName: 'Kim Heeyeon' },
      { krName: '박슬빈', enName: 'Park Seulbin' },
      { krName: '사한나', enName: 'Sa Hanna' },
      { krName: '이유나', enName: 'Lee Yu-na' },
      // 추가 인원
    ]
  },

  // ... 나머지 데이터 추가
];

function AboutMenuThanks() {
  return (
    <div className="flex flex-col mt-[167px]">
      <div className="flex flex-col justify-start mb-[150px]">
        <p className="font-pretendard-semibold text-[44px] mb-[51px]">지도교수님</p>
        <div className="flex flex-col gap-[12px]">
          <div className="flex">
            <p className="font-pretendard-regular text-[24px]">감선주 Kam Seon Ju</p>
          </div>
          <div className="flex">
            <p className="font-pretendard-regular text-[24px] mt-[27px]">우진원 Woo Jin Won</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start">
        <p className="font-pretendard-semibold text-[44px] mb-[50px]">졸업작품준비위원회</p>
        {data.map((team) => (
          <div key={team.role} className="flex justify-start">
            <p className="font-pretendard-regular text-[24px] text-nowrap">{team.role}</p>
            <div className="flex flex-wrap">
              {chunk(team.members, 2).map((memberPair, index) => (
                <div key={index} className="flex">
                  {memberPair.map((member) => (
                    <p key={member.krName} className="font-pretendard-regular text-[24px]">{member.krName} {member.enName}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function chunk(array, size) {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
}

export default AboutMenuThanks;