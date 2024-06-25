import { FaArrowCircleRight, FaArrowLeft, FaShoppingBag } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobDetails } from "../../redux/slices/jobHomeSlice";
import { toast } from "sonner";
import Skills from "./components/Skills";
import Markdown from "react-markdown";

const JobDetailPage = () => {
  const [isDeleteOpen, onDeleteOpenChange] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const accessToken = useSelector((state) => state.auth.user.token.access);
  const jobState = useSelector((state) => state.jobHome);
  useEffect(() => {
    console.log(id);
    const fetchJobDetail = async () => {
      try {
        await dispatch(
          getJobDetails({
            id: id,
            token: accessToken,
          })
        ).unwrap();
      } catch (error) {
        toast.error("Unable to get Job Details");
      }
    };
    fetchJobDetail();
  }, [dispatch, accessToken, id]);

  if (jobState.status === "failure") {
    toast.error("Unable to get Job Details");
    return <p className="text-white">Error</p>;
  }
  if (jobState.status === "loading") {
    return <p className="text-white">Loading</p>;
  }
  if (jobState.selectedJob === null) {
    return <p className="text-white">No job found</p>;
  }
  return (
    <div className="flex-grow min-h-full bg-slate-900 flex flex-col font-serif p-3 mb-4">
      <div className="flex   items-center">
        <FaArrowLeft color="white" onClick={() => navigate("/jobHome")} />
        <div className="flex-1"></div>
        <p className="text-xl font-bold  text-white p-3  ">Job Details</p>
        <div className="flex flex-1 gap-2 justify-end">
          <MdEdit
            color="white"
            size={20}
            onClick={() => navigate("/editJobPost")}
          />
          <MdDelete
            color="white"
            size={20}
            onClick={() => onDeleteOpenChange(true)}
          />
        </div>
        <Modal isOpen={isDeleteOpen} onOpenChange={onDeleteOpenChange}>
          <ModalContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  <p className="text-xl">Delete Post</p>
                </ModalHeader>
                <ModalBody>
                  <p className="text-md">
                    Are you sure you want to delete this post?
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>

      <div className="flex gap-3  mb-2 ">
        <img
          src={jobState.selectedJob?.image}
          alt="logo"
          className="h-24 w-24 border-none rounded-md "
        />
        <div className="flex flex-col mb-3 ">
          <p className="text-xl   text-white ">{jobState.selectedJob?.title}</p>
          <p className="text-sm  text-slate-500 mb-2 ">
            {jobState.selectedJob?.companyName} - {jobState.selectedJob?.place}
          </p>
          <div className="flex gap-2  border rounded-lg bg-slate-800 p-2  w-fit">
            <FaShoppingBag className="text-white text-sm " />
            <p className="text-sm    text-white">
              {jobState.selectedJob?.jobType} -{" "}
              {jobState.selectedJob?.jobLocationType}
            </p>
          </div>
        </div>
      </div>
      <hr className="border-slate-500 mb-3" />
      <h1 className="text-md font-bold  text-white mb-2 ">Skills Required:</h1>
      <div className="flex flex-wrap gap-2 mb-3">
        {jobState.selectedJob.skills.map((skill) => {
          return <Skills key={skill.id} skills={skill} />;
        })}
      </div>

      {/* <h1 className="text-xl font-bold  text-white mb-1 ">Job Description:</h1> */}
      <p className="text-lg  text-white mb-2 ">{jobState.selectedJob?.title}</p>
      <p className="text-md  text-white ">About the job:</p>
      <p className="text-sm  text-slate-300e mb-3 ">
        <Markdown>{jobState.selectedJob?.description}</Markdown>
      </p>
      <Button className="bg-blue-950">
        <FaArrowCircleRight className="text-white text-lg font-serif font-bold" />{" "}
        Apply Now
      </Button>
    </div>
  );
};

// const dummySkills =[
//   "HTML",
//   "CSS",
//   "Javascript",
//   "React",
//   "Node",
//   "MongoDB"]

export default JobDetailPage;
