import React from "react";
import { getJobs } from "../services/api_manager";
import "../static/style.css";
import JobListing from "../components/job_listing";
import Layout from "./layout_page";

const JobsPage = () => {
  const [listings, setListings] = React.useState([]);

  React.useEffect(() => {
    getJobs().then((response) => {
      console.log(response);
      setListings(response.jobs);
    });
  }, []);

  return (
    <Layout header="Job Openings">
      {listings.reverse().map((listing) => (
        <JobListing
          job_id={listing.job_id}
          company={listing.company}
          created_at={listing.created_at}
          description={listing.description}
          location={listing.location}
          title={listing.title}
          type={listing.type}
          min_salary={listing.min_salary}
          max_salary={listing.max_salary}
          last_updated={listing}
        />
      ))}
    </Layout>
  );
};

export default JobsPage;
