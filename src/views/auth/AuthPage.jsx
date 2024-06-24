import { Input } from "@nextui-org/input";
 import logo from "../../assets/stuverse.png";
import { Button } from "@nextui-org/button";
import { FaEye } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";




import { useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginWithEmailAndPassword } from "../../redux/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(4,"Password must be at least 3 characters").required(),
  })
  .required();

const AuthPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authState =useSelector((state) => state.auth)

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async(data) => {
     try {
     await  dispatch(loginWithEmailAndPassword(data)).unwrap();
       toast.success("Login Successful");
       navigate("/jobHome")
     } catch (error) {
       toast.error(error.toString());
       
      
     }
  }
  
  useEffect(() => {
    console.log("errors",errors);
  }
  , [errors])

  return (
    <div className="flex flex-col items-center h-screen font-serif">
      <img src={logo} alt="logo" className="h-40"></img>
      <h1 className="text-3xl  font-bold  text-white mb-20">
        Welcome to StuVerse!
      </h1>

      <form
        className="w-full p-4 flex flex-col gap-2 "
        id="login-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-white mb-2">
          Email
          <span className="text-red-500">*</span>
        </label>

        <Input
          color="primary"
          size="lg"
          isRequired
          type="email"
          variant="bordered"
          placeholder="Enter your email"
          labelPlaceholder="Enter your email"
          className="mb-4 w-[100%]  text-white "
          
          {...register("email")}
          isInvalid={errors.email ? true : false}
          errorMessage= {errors.email?.message}
        />
        <label className="text-white mb-2 block ">
          Password
          <span className="text-red-500">*</span>
        </label>

        <Input
          isRequired
          size="lg"
          color="primary"
          type="password"
          variant="bordered"
          placeholder="Enter your password"
          endContent={<FaEye className="text-white text-xl " />}
          className=" mb-2  text-sm text-white border-blue-300"
       
          {...register("password")}
          isInvalid={errors.password ? true : false}
          errorMessage= {errors.password?.message}
        />
      </form>

      <div className="flex justify-end text-blue-300 mb-5 w-full mr-4 cursor-pointer" >
        <p>Forgot Password?</p>
      </div>

      <Button isLoading={authState.loading} type="submit" form="login-form"
        className="bg-blue-500 text-white rounded-xl text-xl font-bold w-full mb-2"
        // onClick={() => navigate("/jobHome")}

      >
        Login
      </Button >
      <div className="flex gap-2 justify-center">
        <p className="text-white text-sm ">{"Don't Have an account?"}</p>
        <p className=" text-blue-300  text-md ">Sign Up</p>
      </div>
    </div>
  );
};

export default AuthPage;
