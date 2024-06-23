import { Input } from "@nextui-org/input";


import { IoIosAdd } from "react-icons/io";

import stuverseLogo from "../../assets/stuverse.png";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Featured_Job_Card from "./components/Featured_Job_Card";

const JobHome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-grow min-h-full bg-slate-900 flex-col  font-serif p-3">
      <div className="flex  justify-between items-center">
        <div className="flex-1"></div>
        <img src={stuverseLogo} alt="logo" className="h-16 " />
        <div className="flex-1"></div>
        <IoIosAdd
          className="text-white text-3xl "
          onClick={() => navigate("/addJobPage")}
        />
      </div>

      <p className="text-3xl font-bold  text-white p-3 mb-4">
        Find Your Dream Job With Us
      </p>

      <Input
        color="primary"
        size="lg"
        type="text"
        placeholder="Search"
        variant="bordered"
        startContent={<MdSearch />}
        className="w-[100%] mb-5  text-white rounded-xl"
        labelStyle={{ color: "white" }}
      />
      <div className="flex flex-col gap-2 justify-start mb-3 ">
        <p className="text-xl   text-white">Featured Jobs</p>
      </div>
      <Featured_Job_Card />
      <Featured_Job_Card />
      <Featured_Job_Card />
      <Featured_Job_Card />
      <Featured_Job_Card />
    </div>
  );
};

export default JobHome;