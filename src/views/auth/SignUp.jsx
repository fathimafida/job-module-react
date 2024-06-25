import { Input } from "@nextui-org/input";
import { Button, Checkbox } from "@nextui-org/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col  font-serif  p-3">
      <FaArrowLeft
        onClick={() => navigate("/")}
        className="text-white text-xl mb-2"
      />
      <h1 className="text-3xl text-white  font-bold">Create Your Account</h1>
      <form className="w-full p-3 flex flex-col gap-2 mb-3">
        <label className="text-white text-lg  ">
          Name
          <span className="text-red-500">*</span>
        </label>
        <Input
          size="lg"
          placeholder="Enter your name"
          isRequired
          inputStyle={{
            color: "white",
          }}
          variant="bordered"
        />
        <label className="text-white text-lg ">
          Email
          <span className="text-red-500">*</span>
        </label>
        <Input
          size="lg"
          placeholder="Enter your email"
          isRequired
          inputStyle={{
            color: "white",
          }}
          variant="bordered"
        />
        <label className="text-white text-lg mb-2">
          Password
          <span className="text-red-500">*</span>
        </label>
        <Input
          size="lg"
          placeholder="Enter your password"
          isRequired
          inputStyle={{
            color: "white",
          }}
          variant="bordered"
        />
      </form>
      <div className="flex gap-4 mb-6">
        <Checkbox>Student</Checkbox>
        <Checkbox defaultSelected>Alumini</Checkbox>
      </div>

      <Checkbox className="mb-2" defaultSelected>
        I agree to the Terms of Service and Privacy Policy
      </Checkbox>
      <Button color="primary" type="submit">
        Sign Up
      </Button>
    </div>
  );
};

export default SignUp;
