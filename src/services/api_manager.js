import axios from "axios";

export const getApiData = async (companies = "", models = "", years = "") => {
  let data;

  // companies = 1;
  // models = 3;
  // years = 3;
  console.log(
    "https://ishanjain.pythonanywhere.com/listings?companies=" +
      companies +
      "&model=" +
      models +
      "&year=" +
      years
  );
  console.log("hello");
  await axios
    .get(
      "https://ishanjain.pythonanywhere.com/listings?companies=" +
        companies +
        "&model=" +
        models +
        "&year=" +
        years
    )
    .then((response) => {
      data = response.data;
    });
  return data;
};

export const postApiData = async (post_data) => {
  await axios
    .post("https://ishanjain.pythonanywhere.com/listings/add", post_data)
    .then((response) => {
      console.log(response.data);
    });
};
