import { FaArrowLeft, FaShoppingBag, } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import whiteMastery from "../../assets/whiteMastery.jpeg";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useState } from "react";


const JobDetailPage = () => {
  const [isDeleteOpen, onDeleteOpenChange] = useState(false);
    const navigate = useNavigate()
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
          <ModalContent
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 "
          >
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
          src={whiteMastery}
          alt="logo"
          className="h-24 w-24 border-none rounded-md "
        />
        <div className="flex flex-col mb-3 ">
          <p className="text-xl   text-white ">MERN Full Stack developer</p>
          <p className="text-sm  text-slate-500 mb-2 ">
            White Mastery - Chennai,Tamil Nadu,India
          </p>
          <div className="flex gap-2  border rounded-lg bg-slate-800 p-2  w-fit">
            <FaShoppingBag className="text-white text-sm " />
            <p className="text-sm    text-white">Temporary - Onsite</p>
          </div>
        </div>
      </div>
      <hr className="border-slate-500 mb-3" />
      <h1 className="text-xl font-bold  text-white mb-2 ">Skills Required</h1>
      <div className="flex flex-wrap gap-2 mb-3">
        {dummySkills.map((skill) => {
          return (
            <div
              key={skill}
              className="flex items-center border rounded-2xl bg-slate-800 p-1  w-fit"
            >
              <p className="text-md text-white ">{skill}</p>
            </div>
          );
        })}
      </div>

      <h1 className="text-xl font-bold  text-white mb-1 ">
        MERN Full Stack Developer
      </h1>
      <p className="text-md  text-white mb-2 ">About the Role</p>
      <p className="text-sm  text-white mb-2 ">
        We are seeking a skilled and experienced Full Stack MERN Developer to
        join our team. As a Full Stack Developer at our company, you will play a
        critical role in the design, development, and maintenance of our web
        applications. You will work closely with product managers, designers,
        and other stakeholders to understand project requirements and provide
        technical insights and solutions. ### Immediate Joiners Preferred. ###
        Responsibilities - Design and develop user interfaces using React.js -
        Complete understanding and working experience in backend concepts like
        Node.js and MongoDB database. - Integrate frontend components with
        backend systems and APIs. - Debug and resolve frontend-related issues. -
        Optimize web application performance. - Stay updated with the latest
        trends and advancements in frontend development. - Contribute to the
        planning and estimation of development tasks. - Communicate effectively
        with team members and project stakeholders. ### Requirements - Bachelor
        degree in Computer Science, Engineering, or a related field. - Minimum
        of 3 years of experience as a Full Stack Developer in MERN. - Strong
        proficiency in HTML, CSS, and JavaScript. - In-depth knowledge of
        React.js and its core principles. - Experience with Redux and other
        state management libraries. - In-depth working experience with Node.js
        and MongoDB. - Familiarity with frontend build tools and package
        managers (e.g., Webpack, npm). - Knowledge of frontend testing
        frameworks and methodologies. ### Additional Information We offer a
        competitive salary and benefits package, including health insurance,
        dental insurance, vision insurance, paid time off, and a 401(k) plan. If
        you are a skilled and experienced Full Stack MERN Developer who is
        passionate about building innovative web applications, we encourage you
        to apply. We are excited to hear from you! To apply, please visit our
        website at [website address].
      </p>
    </div>
  );
}
const dummySkills =[
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Node",
  "MongoDB"]

export default JobDetailPage