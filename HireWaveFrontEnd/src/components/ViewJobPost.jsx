import React, { useEffect, useState } from "react";
import {  Card, Container, Row, Col } from "react-bootstrap";

import NavigationBar from "./NavigationBar";
import "../styles/JobCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const JobCard = () => {
  const [jobs, setJobs] = useState([]);
  
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("postedJobs")) || [];
    setJobs(storedJobs);
  }, []);

  return (
    <>
      <NavigationBar />
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
                   
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default JobCard;
