import { useState, useEffect } from 'react';

function Dday() {
  const [countdown, setCountdown] = useState('');
  useEffect(() => {
    // 타겟 날짜와 시간 설정
    const targetDate = new Date('2024-05-31T16:00:00'); // 4PM을 24시간 형식으로 설정 (16:00)

    // 매초마다 카운트다운 갱신
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      // 남은 시간이 없다면 카운트다운 중지
      if (difference <= 0) {
        clearInterval(interval);
        setCountdown('D-DAY');
        return;
      }

      // 남은 일, 시간, 분, 초 계산
      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((difference / 1000 / 60) % 60);
      let seconds = Math.floor((difference / 1000) % 60);

      // 두 자리 수 형태로 포맷
      days = days < 10 ? '0' + days : days;
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      // 카운트다운 상태 업데이트
      setCountdown(`${days} ${hours}:${minutes}:${seconds}`);
    }, 1000);

    // 컴포넌트가 언마운트 될 때 인터벌 정리
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center px-[103px] xl:px-[75px] lg:px-[70px] md:px-[50px] sm:px-[33.3px] m:px-[22.2px]'>
      <p className="font-['ft-activica-strong'] text-[44px] xl:text-[32px] lg:text-[30px] md:text-[20px] sm:text-[14px] m:text-[12px] text-[#000]">2024.05.31 4PM / 7PM</p>
      <p className="font-['ft-activica-strong'] text-nowrap text-[210px] xl:text-[180px] lg:text-[120px] md:text-[80px] sm:text-[70px] m:text-[52px]">D-{countdown}</p>
    </div>

  );
}

export default Dday;