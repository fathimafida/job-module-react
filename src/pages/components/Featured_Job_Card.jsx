
import { FaShoppingBag } from 'react-icons/fa';
import { MdBusinessCenter } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

// import logo from "../assets/stuverse.png";


const Featured_Job_Card = () => {
  return (
    <div className="flex  flex-col  border  rounded-2xl p-3 mb-3   ">
      <div className="flex gap-2 items-center mb-2 ">
         {/* <img src={logo} alt='logo' className='w-10 h-10 rounded-full'/> */}
        <div className="flex flex-col ">
          <p className="text-xl   text-white ">MERN Full Stack developer</p>
          <p className="text-sm  text-slate-500 ">White Mastery</p>
        </div>
      </div>
      <div className="flex gap-2 mb-2">
        <div className="flex gap-2 items-center border rounded-xl p-1">
          <FaShoppingBag className="text-white text-sm " />
          <p className="text-sm    text-white">Temporary</p>
        </div>
        <div className="flex gap-2 items-center border rounded-xl px-2">
          <MdBusinessCenter className="text-white text-sm " />
          <p className="text-sm    text-white">On-site</p>
        </div>
      </div>

      <div className="flex gap-2 items-center  p-1">
        <FaLocationDot className="text-white text-sm " />
        <p className="text-sm    text-white">Chennai,Tamil Nadu,India</p>
      </div>
    </div>
  );
}

export default Featured_Job_Card