
import { Input } from '@nextui-org/input';
import { FaImage } from 'react-icons/fa';
import { Button } from '@nextui-org/button';
import { ScrollShadow } from '@nextui-org/react';

const AddJobPoastPage = () => {
  return (
    <div className="flex-grow min-h-full bg-slate-900 flex flex-col font-serif p-3 mb-3">
      <ScrollShadow size={100}
        
        className="w-full h-full ">
        <div>
          <p className="text-xl font-bold  text-white p-3 ">Add Job</p>
        </div>
        <div className="flex flex-col  justify-center items-center  ">
          <p className=" text-xl font-bold  text-white p-3 border rounded-full h-32 w-32 "></p>
          <div className="flex  items-center  ">
            <FaImage className="text-white text-sm h-5 w-5 " />
            <p className="text-sm  text-white p-3 ">Pick Image</p>
          </div>
        </div>
        {/*  */}
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
        />
        <div className="flex justify-end text-white">0/50</div>
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
        />
        <div className="flex justify-end text-white">0/50</div>

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
        />
        <div className="flex justify-end text-white">0/50</div>

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
        />

        <Button color="primary" className="w-full text-white font-bold text-xl">
          Apply Now
        </Button>
      </ScrollShadow>
    </div>
  );
}

export default AddJobPoastPage;
      
      
      
      
      
 

     