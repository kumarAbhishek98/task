import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import JobsPosted from "../pages/JobsPosted";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import ResetPassword from "../pages/ResetPassword";
import PostJob from "../pages/PostJob";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/login/jobsPosted" element={<JobsPosted />} />
      <Route path="/login/postJob" element={<PostJob />} />
    </Routes>
  );
};

export default AllRoutes;
