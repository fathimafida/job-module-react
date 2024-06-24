
import { FaArrowCircleRight,  FaShoppingBag } from 'react-icons/fa';
import { MdBusinessCenter, } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';



const Featured_Job_Card = (
  
   { jobPost
  }
) => {
  const navigate = useNavigate()
  return (
    <div
      className="flex  flex-col  border bg-zinc-900/50  border-gray-700 rounded-2xl p-3 mb-3   "
      onClick={() => navigate("/detailPage")}
    >
      <div className="flex gap-2 items-center mb-2 ">
        <img
          src={jobPost.image}
          alt="logo"
          className="h-12 w-12 rounded-full mb-3"
        />        <div className="flex flex-col justify-center">
          <p className="text-lg   text-white ">{ jobPost.title}</p>
          <p className="text-sm  text-slate-500 ">{jobPost.companyName}</p>
        </div>
      </div>
      <div className="flex gap-2 mb-2 ">
        <div className="flex gap-2 items-center bg-gray-800 border rounded-2xl py-1 px-2">
          <FaShoppingBag className="text-white text-sm " />
          <p className="text-sm    text-white">{jobPost.jobType}</p>
        </div>
        <div className="flex gap-2 items-center border bg-gray-800 rounded-2xl px-2">
          <MdBusinessCenter className="text-white text-sm " />
          <p className="text-sm    text-white">{jobPost.jobLocationType}</p>
        </div>
      </div>

      <div className="flex gap-2 items-center mb-3  p-1">
        <FaLocationDot className="text-white text-sm " />
        <p className="text-sm    text-slate-300">{jobPost.place}</p>
      </div>
      <hr className="border-slate-500 mb-3" />
      <div className="flex  justify-between items-center p-1 ">
        <p className="text-sm    text-slate-300">{jobPost.createdAt}</p>
        <FaArrowCircleRight className="text-blue-300 text-md" />
      </div>
    </div>
  );
}

Featured_Job_Card.propTypes = {
  jobPost: {
  
 }
}
export default Featured_Job_Card