import '../styles/JobSeekerHome.css'; 
import { useNavigate } from "react-router-dom";
const JobSeekerHome = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/job-card");
  };

  return (
    <div className="homepage-container">
      <div className="content-box">
        <h1>Welcome to the Job Seeker Dashboard</h1>
        <p>Find jobs, manage your profile, and connect with recruiters easily.</p>

        <div className="features">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Latest job listings</li>
            <li>Easy profile management</li>
            <li>Instant job alerts</li>
            <li>Direct recruiter contact</li>
          </ul>
        </div>

        <div className="cta">
          <p>Start your job search now!</p>
          <button className="cta-button"onClick={handleGetStarted}>Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerHome;