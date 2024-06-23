import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/auth/AuthPage";
import JobHome from "./pages/home/JobHome";

import AddJobPostPage from "./pages/addJobPost/AddJobPostPage";
import JobDetailPage from "./pages/detailPage/JobDetailPage";
import EditJobPost from "./pages/editJobPost/EditJobPost";

function App() {
  return (
    <>
      <div className="bg-slate-900 min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/jobHome" element={<JobHome />} />
          <Route path="/addJobPage" element={<AddJobPostPage />} />
          <Route path="/detailPage" element={<JobDetailPage />} />
          <Route path="/editJobPost" element={<EditJobPost />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
