import { Input } from "@nextui-org/input";
import logo from "../assets/stuverse.png";
import { Button } from "@nextui-org/button";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate()
  
  return (
    <div className="flex flex-col items-center h-screen font-serif">
      <img src={logo} alt="logo" className="h-40"></img>
      <h1 className="text-3xl  font-bold  text-white mb-20">
        Welcome to StuVerse!
      </h1>

      <form className="w-full p-4">
        <label className="text-white mb-2">
          Email
          <span className="text-red-500">*</span>
        </label>

        <Input
          color="primary"
          type="email"
          variant="bordered"
          placeholder="Enter your email"
          labelPlaceholder="Enter your email"
          className="mb-4 w-[100%]  text-white "
          inputStyle={{ color: "white" }}
        />
        <label className="text-white mb-2 block ">
          Password
          <span className="text-red-500">*</span>
        </label>

        <Input
          color="primary"
          type="password"
          variant="bordered"
          placeholder="Enter your password"
          endContent={<FaEye className="text-white text-xl " />}
          className=" mb-2  text-sm text-white border-blue-300"
          inputStyle={{ color: "white" }}
        />

        <div className="flex justify-end text-blue-300 mb-5">
          <p>Forgot Password?</p>
        </div>

        <Button className="bg-blue-500 text-white rounded-xl text-xl font-bold w-full mb-2"
          onClick={() => navigate("/jobHome")}>
          Login
        </Button>
        <div className="flex gap-2 justify-center">
          <p className="text-white text-sm ">{"Don't Have an account?"}</p>
          <p className=" text-blue-300  text-md ">Sign Up</p>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
