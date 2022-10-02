import axios from "axios";

export const getJobs = async (job_id = "") => {
  let data;
  await axios
    .get(`https://ishanjain2.pythonanywhere.com/jobs/${job_id}`)
    .then((response) => {
      data = response.data;
    });
  return data;
};

export const postJobs = async (post_data) => {
  await axios
    .post("https://ishanjain2.pythonanywhere.com/jobs/", post_data)
    .then((response) => {
      console.log(response.data);
    });
};

export const getApplications = async (application_id = "") => {
  let data;
  await axios
    .get(`https://ishanjain2.pythonanywhere.com/applications/${application_id}`)
    .then((response) => {
      data = response.data;
    });
  return data;
};

export const deleteApplication = async (application_id) => {
  await axios
    .delete(
      `https://ishanjain2.pythonanywhere.com/applications/${application_id}`
    )
    .then((response) => {
      console.log(response.data);
      return response;
    });
};

export const postApplications = async (post_data) => {
  await axios
    .post("https://ishanjain2.pythonanywhere.com/applications/", post_data)
    .then((response) => {
      console.log(response.data);
    });
};
