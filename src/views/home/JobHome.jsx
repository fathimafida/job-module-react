import { Input } from "@nextui-org/input";

import { IoIosAdd } from "react-icons/io";

import stuverseLogo from "../../assets/stuverse.png";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Featured_Job_Card from "./components/Featured_Job_Card";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getHomeData } from "../../redux/slices/jobHomeSlice";
import { CiLogout } from "react-icons/ci";
import { logOut } from "../../redux/slices/authSlice";
// import { logOut } from "../../redux/slices/authSlice";

const JobHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const homeDataState = useSelector((state) => state.jobHome);
  const accessToken = useSelector((state) => state.auth.user.token.access);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    dispatch(
      getHomeData({
        token: accessToken,
        search: searchValue,
      })
    );
  }, [dispatch, accessToken, searchValue]);

  if (homeDataState.status === "failure") {
    return <p className="text-white">Error</p>;
  }
  return (
    <div className="flex-grow min-h-full bg-slate-900 flex-col  font-serif p-3">
      <div className="flex  justify-between items-center">
        <div className="flex-1"></div>
        <img src={stuverseLogo} alt="logo" className="h-16 " />
        <div className="flex-1"></div>
        <CiLogout
          className="text-white text-xl "
          onClick={() => {
            navigate("/");
            dispatch(logOut());
          }}
        />
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
        defaultValue={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        startContent={<MdSearch />}
        className="w-[100%] mb-5  text-white rounded-xl"
        labelStyle={{ color: "white" }}
      />
      <div className="flex flex-col gap-2 justify-start mb-3 ">
        <p className="text-xl   text-white">Featured Jobs</p>
      </div>
      {homeDataState.status === "loading" ? (
        <p className="text-white justify-center items-center">Loading</p>
      ) : (
        homeDataState.jobList.map((post) => (
          <Featured_Job_Card key={post.id} jobPost={post} />
        ))
      )}
    </div>
  );
};

export default JobHome;
