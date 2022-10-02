import React from "react";
import Card from "react-bootstrap/Card";
import { deleteApplication, getJobs } from "../services/api_manager";
import { Button } from "react-bootstrap";

const cardStyle = {
  padding: "10px",
  width: "full",
  margin: "10px 50px",
};
const StatusMap = {
  PA: "Pending Action",
  AS: "Application Submitted",
  UC: "Under Consideration",
  AR: "Application Rejected",
};

const TypeMap = {
  IP: "Internship",
  FT: "Full-Time",
  PT: "Part-Time",
  CO: "Contract",
};

const AppListing = (props) => {
  const { application_id, applied_on, job_id, status } = props;
  const d = new Date(applied_on);
  const date = d.toLocaleDateString();
  const [JobData, setJobData] = React.useState({});

  function handleClick() {
    deleteApplication(application_id).then((response) => {
      alert("Application has been withdrawn");
      window.location.reload(false);
    });
  }

  React.useEffect(() => {
    getJobs(job_id).then((response) => {
      setJobData(response);
    });
  }, [job_id]);

  console.log(props);
  return (
    <>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title>
            {JobData.title +
              " @ " +
              JobData.company +
              " - (" +
              JobData.min_salary +
              " - " +
              JobData.max_salary +
              ")"}
          </Card.Title>
          <Card.Subtitle>
            {"Application ID: " + application_id + " | " + JobData.location}{" "}
          </Card.Subtitle>
          <Card.Text>
            {TypeMap[JobData.type] + " - Applied on: " + date}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <b>{StatusMap[status]}</b>
            <Button
              variant="danger"
              onClick={() => handleClick(application_id)}
            >
              Withdraw
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default AppListing;
