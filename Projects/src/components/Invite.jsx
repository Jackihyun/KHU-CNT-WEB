import { useNavigate } from 'react-router-dom';

function Invite() {

  const navigate = useNavigate();

  const navigateToInvite = () => {
    navigate('/Archive#targetDiv');
  };

  return (
    <button onClick={navigateToInvite} className="flex relative overflow-visible justify-center items-center w-[150px] h-[150px] xl:w-[115px] xl:h-[116px] lg:w-[88px] lg:h-[88px] md:w-[67px] md:h-[67px] sm:w-[51px] sm:h-[51px] m:w-[39px] m:h-[39px] rounded-full bg-[#F1CECE] border-none cursor-pointer outline-none" >
      <p className="text-[36px] xl:text-[28px] lg:text-[19px] md:text-[15px] sm:text-[12px] m:text-[9.2px]  text-[#100E56] absolute transform rotate-[13.66deg] font-['ft-activica-strong']">INVITATION</p>
    </button >
  );
}

export default Invite;

