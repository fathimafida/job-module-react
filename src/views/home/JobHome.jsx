import { Input } from "@nextui-org/input";


import { IoIosAdd } from "react-icons/io";

import stuverseLogo from "../../assets/stuverse.png";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Featured_Job_Card from "./components/Featured_Job_Card";
// import HomeSkeleton from "../../components/skeleton/HomeSkeleton";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getHomeData } from "../../redux/slices/jobHomeSlice";

const JobHome = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch()
  // const homeDataState = useSelector((state) => state.jobHome)
  // const accessToken = useSelector((state) => state.auth.user.token.access)

  // useEffect(() => {
  //   dispatch(getHomeData(accessToken))
  // }, [])


  // if(homeDataState.status === "loading"){
  //   return <p className="text-white">Loading</p>
  // }

  // if(homeDataState.status === "failure"){
  //   return <p className="text-white">Error</p>
  // }
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
   {/* <HomeSkeleton/> */}
         <Featured_Job_Card/>
      {/* {homeDataState.getJobList.map((getPost) => (
        <Featured_Job_Card key={getPost.id} data={getPost} />
      ))} */}
    
    </div>
  );
};

export default JobHome;
