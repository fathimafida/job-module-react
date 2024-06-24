
import { FaArrowCircleRight,  FaShoppingBag } from 'react-icons/fa';
import { MdBusinessCenter, } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
// import whiteMasteryLogo from '../../../assets/whiteMastery.jpeg'


const Featured_Job_Card = (getPost) => {
  const navigate = useNavigate()
  return (
    <div
      className="flex  flex-col  border bg-zinc-900/50  rounded-2xl p-3 mb-3   "
      onClick={() => navigate("/detailPage")}
    >
      <div className="flex gap-2 items-center mb-2 ">
        <img
          src={getPost.image}
          alt="logo"
          className="h-10 w-10 rounded-full"
        />
        <div className="flex flex-col ">
          <p className="text-xl   text-white ">{getPost.title}</p>
          <p className="text-sm  text-slate-500 ">{getPost.companyName}</p>
        </div>
      </div>
      <div className="flex gap-2 mb-2">
        <div className="flex gap-2 items-center border rounded-xl p-1">
          <FaShoppingBag className="text-white text-sm " />
          <p className="text-sm    text-white">{getPost.jobType}</p>
        </div>
        <div className="flex gap-2 items-center border rounded-xl px-2">
          <MdBusinessCenter className="text-white text-sm " />
          <p className="text-sm    text-white">{getPost.jobLocationType}</p>
        </div>
      </div>

      <div className="flex gap-2 items-center  p-1">
        <FaLocationDot className="text-white text-sm " />
        <p className="text-sm    text-slate-300">{getPost.place}</p>
      </div>
      <hr className="border-slate-500 mb-3" />
      <div className="flex  justify-between items-center p-1 ">
        <p className="text-sm    text-slate-300">{getPost.createdAt}</p>
        <FaArrowCircleRight className="text-blue-300 text-md" />
      </div>
    </div>
  );
}

export default Featured_Job_Card