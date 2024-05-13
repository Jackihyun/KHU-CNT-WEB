import { useNavigate } from 'react-router-dom';

function Invite() {

  const navigate = useNavigate();

  const navigateToInvite = () => {
    navigate('/Archive#targetDiv');
  };

  return (
    <button onClick={navigateToInvite} className="flex justify-center items-center w-[600px] h-[110px] rounded-md border-[3px] border-[#CD6629] cursor-pointer bg-white hover:bg-[#CD6629] hover:text-white text-[#CD6629] " >
      <p className="w-full h-full flex justify-center items-center text-[60px] font-['ft-activica-strong']">INVITATION</p>
    </button >
  );
}

export default Invite;
