
import { Input } from "@nextui-org/input";
import logo from "../assets/stuverse.png"

import { IoIosAdd } from "react-icons/io";

import Featured_Job_Card from "./components/Featured_Job_Card";
import { MdSearch } from "react-icons/md";


const JobHome = () => {
  return (
    <div className="flex flex-col  font-serif p-3">
      <div className="flex  justify-center items-center">
        <img src={logo} alt="logo" className=" h-16 "></img>
        <IoIosAdd className="text-white text-3xl " />
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
        className="w-[100%] mb-3  text-white rounded-xl"
        labelStyle={{ color: "white" }}
      />
      <div className="flex flex-col gap-2 justify-start  ">
        <p className="text-xl   text-white">Featured Jobs</p>
      </div>
      <Featured_Job_Card />
      <Featured_Job_Card />
      <Featured_Job_Card />
      <Featured_Job_Card />
      <Featured_Job_Card />
    </div>
  );
}

export default JobHome