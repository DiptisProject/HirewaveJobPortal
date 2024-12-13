// frontend/src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import AdminPage from "./components/AdminPage";
import PostJobForm from "./components/PostJobForm";
import ViewApplicants from "./components/ViewApplicants";
import PostQuery from "./components/PostQuery";
import JobCard from "./components/JobCard";
import RecruiterPage from "./components/RecruiterPage";
import JobSeekerPage from "./components/JobSeekerPage";
import ViewJobPost from "./components/ViewJobPost";
import JobSeekerContactUs from "./components/JobSeekerContactUs";
import RecruiterProfile from "./components/RecruiterProfile";
import JobSeekerProfile from "./components/JobSeekerProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/post-job" element={<PostJobForm />} />
        <Route path="/view-applicants" element={<ViewApplicants />} />
        <Route path="/post-query" element={<PostQuery />} />
        <Route path="/job-card" element={<JobCard />} />
        <Route path="/recruiter" element={<RecruiterPage />} />
        <Route path="/jobseeker" element={<JobSeekerPage />} />
        <Route path="/view-job-post" element={<ViewJobPost />} />
        <Route path="/recruiter-profile" element={<RecruiterProfile />} />
        <Route path="/Job-Seeker-Profile" element={<JobSeekerProfile />} />

        <Route path="/job-seeker-contact-us" element={<JobSeekerContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
