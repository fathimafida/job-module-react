import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./views/auth/AuthPage";
import JobHome from "./views/home/JobHome";

import AddJobPostPage from "./views/addJobPost/AddJobPostPage";
import JobDetailPage from "./views/JobdetailPage/JobDetailPage";
import EditJobPost from "./views/editJobPost/EditJobPost";
import { Toaster } from "sonner";
import SignUp from "./views/auth/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./redux/slices/authSlice";
import ProtectedRoute from "./components/skeleton/ProtectedRoute";
import UnProtectedRoute from "./components/UnProtectedRoute";

function App() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  if (authState.status === "idle") {
    return <p className="text-white">Loading</p>;
  }

  return (
    <>
      <Toaster richColors />
      <div className="bg-slate-900 min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<UnProtectedRoute element={<AuthPage/>} />} />
          <Route path="/jobHome" element={<ProtectedRoute element={<JobHome/>}/>} />
          <Route path="/addJobPage" element={<AddJobPostPage />} />
           <Route path="/job/:id" element={<ProtectedRoute element={<JobDetailPage />} />} />
          <Route path="/editJobPost" element={<EditJobPost />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
