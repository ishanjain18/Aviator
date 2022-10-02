import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { postApplications } from "../services/api_manager";

const cardStyle = {
  padding: "10px",
  width: "full",
  margin: "10px 50px",
};

const TypeMap = {
  IP: "Internship",
  FT: "Full-Time",
  PT: "Part-Time",
  CO: "Contract",
};

const JobListing = (props) => {
  const {
    job_id,
    company,
    created_at,
    location,
    title,
    type,
    min_salary,
    max_salary,
    last_updated,
  } = props;
  const d1 = new Date(created_at);
  const d2 = new Date(last_updated);
  const date_created = d1.toLocaleDateString(d1);
  const date_updated = d2.toLocaleDateString(d2);

  function handleClick(job_id) {
    const post_data = { job: job_id, status: "AS" };
    postApplications(post_data).then((res) => {
      console.log(res);
      alert("Application Created Successfully");
    });
  }

  return (
    <>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title>{company}</Card.Title>
          <Card.Title>{title + " | " + location}</Card.Title>
          <h6>{`Salary Range - ${min_salary} to ${max_salary} INR`}</h6>
          <Card.Subtitle>{"Job ID: " + job_id}</Card.Subtitle>

          <Card.Text>
            {TypeMap[type] +
              " (Posted on: " +
              date_created +
              " Updated on: " +
              date_updated +
              ")"}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button onClick={() => handleClick(job_id)}>Apply Now</Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default JobListing;
