import React from "react";
import { getApplications } from "../services/api_manager";
import TopBar from "./topbar";
import SideBar from "./sidebar";
import "../static/style.css";
import AppListing from "./app_listing";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
    };
  }

  componentDidMount() {
    getApplications().then((response) => {
      this.setState({
        listings: response.applications,
      });
    });
  }

  render() {
    const { listings } = this.state;

    return (
      <>
        <TopBar header={"Aviator"} button={false} />
        <div className="row1">
          <SideBar />
          <div className="column2">
            <h1>Applications</h1>
            <hr></hr>
            {console.log(listings)}
            {listings.reverse().map((listing) => (
              <AppListing
                application_id={listing.application_id}
                applied_on={listing.applied_on}
                job_id={listing.job}
                status={listing.status}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
