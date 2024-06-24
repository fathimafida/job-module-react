import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, ScrollShadow } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaImage } from "react-icons/fa";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const EditJobPost = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  // const [isOpen3, setIsOpen3] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  // const handleToggle3 = () => {
  //   setIsOpen3(!isOpen3);
  // };

    const schema = yup
      .object({
        title: yup.string().required(),
        place: yup.string().required(),
        companyName: yup.string().required(),
        description: yup.string().required(),
        jobType: yup.string().required(),
        jobLocationType: yup.string().required(),
        image: yup.string().required(),
        url: yup.string().required(),
        skills: yup.string().required(),
      })
      .required();

   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm({
     resolver: yupResolver(schema),
   });

  const onSubmit =(data) => {
    console.log(data)
  }
 
  useEffect(() => {
    console.log(errors);
  },[errors])


  return (
    <div className="flex-grow min-h-full bg-slate-900 flex flex-col font-serif p-3 mb-3">
      <ScrollShadow size={100} className="w-full h-full ">
        <div className="flex gap-2  items-center">
          <FaArrowLeft color="white" onClick={() => navigate("/detailPage")} />
          <p className="text-xl font-bold  text-white p-3 ">Edit Post</p>
        </div>
        <div className="flex flex-col  justify-center items-center  ">
          <p className=" text-xl font-bold  text-white p-3 border rounded-full h-32 w-32 "></p>
          <div className="flex  items-center  ">
            <FaImage className="text-white text-sm h-5 w-5 " />
            <p className="text-sm  text-white p-3 ">Pick Image</p>
          </div>
        </div>
        {/*  */}
        <form id="edit-job" onSubmit={handleSubmit(onSubmit)}>
          <label className="text-white text-xl font-bold mb-2 block ">
            Job Title
          </label>

          <Input
            max={50}
            color="primary"
            type="title"
            variant="bordered"
            placeholder="Job Title"
            size="lg"
            className=" mb-2  text-sm text-white border-blue-300"
            inputStyle={{ color: "white" }}
            {...register("title")}
            isInvalid={errors.title ? true : false}
            errorMessage={errors.title?.message}
          />
          <div className="flex justify-end text-white">0/50</div>
          {/*  */}

          <label className="text-white text-xl font-bold mb-2 block ">
            Job Company Name
          </label>

          <Input
            max={50}
            color="primary"
            type="company name"
            variant="bordered"
            placeholder="Job Company Name"
            size="lg"
            className=" mb-2  text-sm text-white border-blue-300"
            inputStyle={{ color: "white" }}
            {...register("companyName")}
            isInvalid={errors.companyName ? true : false}
            errorMessage={errors.companyName?.message}
          />
          <div className="flex justify-end text-white">0/50</div>

          {/*  */}
          <label className="text-white text-xl font-bold mb-2 block ">
            Job Place
          </label>

          <Input
            max={50}
            color="primary"
            type="place"
            variant="bordered"
            placeholder="Job Place"
            size="lg"
            className=" mb-2  text-sm text-white border-blue-300"
            inputStyle={{ color: "white" }}
            {...register("place")}
            isInvalid={errors.place ? true : false}
            errorMessage={errors.place?.message}
          />
       
          {/*  */}
          <label className="text-white text-xl font-bold mb-2 block ">
            Choose Job Type
          </label>

          <Input
            max={50}
            color="primary"
            type="job type"
            variant="bordered"
            size="lg"
            className=" mb-2  text-sm text-white border-blue-300"
            inputStyle={{ color: "white" }}
            {...register("jobType")}
            isInvalid={errors.jobType ? true : false}
            errorMessage={errors.jobType?.message}
            endContent={
              <Dropdown
                className="bg-slate-800 text-white"
                isOpen={isOpen}
                onToggle={handleToggle}
              >
                <DropdownTrigger>
                  <Button
                    size="sm"
                    className="bg-slate-800 border-none text-white text-lg"
                    onClick={handleToggle}
                  >
                    {isOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
                  </Button>
                </DropdownTrigger>

                <DropdownMenu aria-label="Dropdown menu with shortcut">
                  <DropdownItem key="fullTime">Full Time</DropdownItem>
                  <DropdownItem key="partTime">Part Time</DropdownItem>
                  <DropdownItem key="contract">Contract</DropdownItem>

                  <DropdownItem key="internship">Internship</DropdownItem>
                  <DropdownItem key="temporary">Temporary</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            }
          />
          <div className="flex justify-end text-white">0/50</div>

          <label className="text-white text-xl font-bold mb-2 block ">
            choose Job Location Type
          </label>

          <Input
            max={50}
            color="primary"
            type="job location type"
            variant="bordered"
            size="lg"
            className=" mb-2  text-sm text-white border-blue-300"
            inputStyle={{ color: "white" }}
            {...register("jobLocationType")}
            isInvalid={errors.jobLocationType ? true : false}
            errorMessage={errors.jobLocationType?.message}
            endContent={
              <Dropdown
                className="bg-slate-800 text-white"
                isOpen={isOpen2}
                onToggle={handleToggle2}
              >
                <DropdownTrigger>
                  <Button
                    size="sm"
                    className="bg-slate-800 border-none text-white text-lg"
                    onClick={handleToggle2}
                  >
                    {isOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
                  </Button>
                </DropdownTrigger>

                <DropdownMenu aria-label="Dropdown menu with shortcut">
                  <DropdownItem key="fullTime">Full Time</DropdownItem>
                  <DropdownItem key="partTime">Part Time</DropdownItem>
                  <DropdownItem key="contract">Contract</DropdownItem>

                  <DropdownItem key="internship">Internship</DropdownItem>
                  <DropdownItem key="temporary">Temporary</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            }
          />
         

          <label className="text-white text-xl font-bold mb-2 block ">
            Select Your Skills
          </label>
          <Input
            max={50}
            color="primary"
            type="skills"
            variant="bordered"
            size="lg"
            className=" mb-2  text-sm text-white border-blue-300"
            inputStyle={{ color: "white" }}
            {...register("skills")}
            isInvalid={errors.skills ? true : false}
            errorMessage={errors.skills?.message}
            // endContent={

            // <CheckboxGroup isDisabled label="Select Skills">
            //   <Checkbox value="C">Buenos Aires</Checkbox>
            //   <Checkbox value="Java">Sydney</Checkbox>
            //   <Checkbox value="Python">San Francisco</Checkbox>
            //   <Checkbox value="HTML">London</Checkbox>
            //   <Checkbox value="CSS">Tokyo</Checkbox>
            // </CheckboxGroup>

            // }
          />
        

          <label className="text-white text-xl font-bold mb-2 block ">
            Job Description
          </label>
          <Input
            max={50}
            color="primary"
            type="job description"
            placeholder="Job Description"
            variant="bordered"
            size="lg"
            className=" mb-2  text-sm text-white border-blue-300"
            inputStyle={{ color: "white" }}
            {...register("description")}
            isInvalid={errors.description ? true : false}
            errorMessage={errors.description?.message}
          />
          <div className="flex justify-end text-white">0/1000</div>

          <label className="text-white text-xl font-bold mb-2 block ">
            Job Apply Url
          </label>
          <Input
            max={50}
            color="primary"
            type="job apply url"
            placeholder="Url"
            variant="bordered"
            size="lg"
            className=" mb-4  text-sm text-white border-blue-300"
            inputStyle={{ color: "white" }}
            {...register("url")}
            isInvalid={errors.url ? true : false}
            errorMessage={errors.url?.message}
          />
        </form>
        <Button
          form="edit-job"
          type="submit"
          className="w-full bg-blue-950 text-white font-bold text-xl"
        >
          Edit Post
        </Button>
      </ScrollShadow>
    </div>
  );
}

export default EditJobPost