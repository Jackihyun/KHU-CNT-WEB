import { Link } from 'react-router-dom';

function Invite() {

  return (
    <Link to={'/invite'}>
      <button className="flex justify-center items-center w-full max-w-[600px] max-h-[110px] rounded-md border-[3px] border-[#CD6629] cursor-pointer bg-white hover:bg-[#CD6629] hover:text-white text-[#CD6629] px-[5vw] pt-[1vw] pb-[1.5vw] " >
        <p className="w-full h-full flex justify-center items-center text-6xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl m:text-2xl font-['ft-activica-strong']">INVITATION</p>
      </button >
    </Link>
  );
}

export default Invite;
