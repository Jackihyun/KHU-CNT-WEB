import { Link } from 'react-router-dom';

function Invite() {

  return (
    <Link to={'/invite'}>
      <button className="flex justify-center items-center w-full max-w-[600px] max-h-[110px] rounded-md border-[3px] md:border-[2px] sm:border-[1.5px] m:border-[1.5px] border-[#CD6629] cursor-pointer bg-white hover:bg-[#CD6629] hover:text-white text-[#CD6629] px-[5vw] py-[1vw] " >
        <p className="w-full h-full flex justify-center items-center text-6xl xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl m:text-xl font-['ft-activica-strong'] mb-[0.7vw]">INVITATION</p>
      </button >
    </Link>
  );
}

export default Invite;
