import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NaviBar from "./NaviBar";
import "../styles/JobCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const JobCard = () => {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    jobTitle: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null,
    school: "",
    degree: "",
    discipline: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("postedJobs")) || [];
    setJobs(storedJobs);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      resume: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingApplications =
      JSON.parse(localStorage.getItem("jobApplications")) || [];
    existingApplications.push(formData);
    localStorage.setItem(
      "jobApplications",
      JSON.stringify(existingApplications)
    );

    toast.success("Application submitted successfully!", {
      position: "top-center",
    });

    setTimeout(() => {
      navigate("/view-applicants", { state: formData });
    }, 3000);
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  return (
    <>
      <NaviBar />
      <Container className="my-5">
        <h3 className="text-center mb-4">Posted Jobs</h3>
        {jobs.length === 0 ? (
          <p className="text-center">No jobs posted yet.</p>
        ) : (
          <Row>
            {jobs.map((job, index) => (
              <Col lg={4} md={6} sm={12} key={index} className="mb-4">
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title className="mt">{job.jobTitle}</Card.Title>
                    <Card.Text>
                      <strong>Company:</strong> {job.companyName}
                    </Card.Text>
                    <Card.Text>
                      <strong>Location:</strong> {job.jobLocation}
                    </Card.Text>
                    <Card.Text>
                      <strong>Description:</strong> {job.jobDescription}
                    </Card.Text>
                    <Card.Text>
                      <strong>Package:</strong> {job.jobPackage} LPA
                    </Card.Text>
                    <Card.Text>
                      <strong>Type:</strong> {job.jobType}
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => handleApplyClick(job)}
                    >
                      Apply
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Apply for {selectedJob?.jobTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit} className="bg-light p-4 rounded">
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="lastName" className="mt-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="phone" className="mt-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="degree" className="mt-3">
                <Form.Label>Degree</Form.Label>
                <Form.Control
                  as="select"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="phd">PhD</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="discipline" className="mt-3">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  as="select"
                  name="discipline"
                  value={formData.discipline}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="computer_science">Computer Science</option>
                  <option value="information_technology">
                    Information Technology
                  </option>
                  <option value="data_science">Data Science</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="startDate" className="mt-3">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="endDate" className="mt-3">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="resume" className="mt-3">
                <Form.Label>Resume</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleFileChange}
                  required
                />
              </Form.Group>
              <div className="d-flex justify-content-end mt-4">
                <Button variant="secondary" onClick={handleCloseModal} className="me-2">
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Submit Application
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default JobCard;
