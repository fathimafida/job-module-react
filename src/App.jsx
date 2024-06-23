import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./views/auth/AuthPage";
import JobHome from "./views/home/JobHome";

import AddJobPostPage from "./views/addJobPost/AddJobPostPage";
import JobDetailPage from "./views/JobdetailPage/JobDetailPage";
import EditJobPost from "./views/editJobPost/EditJobPost";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster/>
      <div className="bg-slate-900 min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/jobHome" element={<JobHome />} />
          <Route path="/addJobPage" element={<AddJobPostPage />} />
          <Route path="/detailPage" element={<JobDetailPage />} />
          <Route path="/editJobPost" element={<EditJobPost/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
