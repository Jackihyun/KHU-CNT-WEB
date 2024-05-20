import { Link } from 'react-router-dom';
import clsx from 'clsx';

const IS_MAC_OR_IOS_OR_PADOS = navigator.platform.toUpperCase().includes('MAC') || navigator.platform.toUpperCase().includes('IPHONE') || navigator.platform.toUpperCase().includes('IPAD');
function Invite() {

  console.log('IS_WEBKIT', IS_MAC_OR_IOS_OR_PADOS)
  return (
    <Link to={'/invite'}>
      <button className="flex justify-center items-center w-full max-w-[600px] max-h-[110px] rounded-md border-[3px] md:border-[2px] sm:border-[1.5px] m:border-[1.5px] border-[#CD6629] cursor-pointer bg-white hover:bg-[#CD6629] hover:text-white text-[#CD6629] px-[5vw] py-[1vw] " >
        <p className={clsx("text-6xl xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl m:text-xl font-['ft-activica-strong'] pb-[6px] xl:pb-[5px] lg:pb-[4px] md:pb-[3px] sm:p-0 m:p-0", {
          '-translate-y-1': IS_MAC_OR_IOS_OR_PADOS
        })}>
          INVITATION
        </p>
      </button >
    </Link>
  );
}

export default Invite;
