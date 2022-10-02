import React from "react";
import { getApiData } from "../services/api_manager";
import Listing from "./listing";
import TopBar from "./topbar";
import SideBar from "./sidebar";
import "../static/style.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
    };
  }

  componentDidMount() {
    getApiData().then((response) => {
      this.setState({
        listings: response,
      });
    });
  }

  onSubmit = async (fields) => {
    // fields contains state lifted up from filter.js, state contains all values required for a POST request
    await getApiData(
      fields.make_name,
      fields.car_name,
      fields.purchase_year
    ).then((response) => {
      this.setState({
        listings: response,
      });
    });
  };

  render() {
    const { listings } = this.state;

    return (
      <>
        <TopBar header={"Aviator"} button={false} />
        <div className="row1">
          <SideBar />
          {/* <div className="column1">
            <Filter onSubmit={(fields) => this.onSubmit(fields)} />
          </div> */}
          <div className="column2">
            {listings.reverse().map((listing) => (
              <Listing
                key={listing.id}
                car_name={listing.car_name}
                make_name={listing.make_name}
                max_price={listing.max_price}
                min_price={listing.min_price}
                purchase_year={listing.purchase_year}
                seller_email={listing.seller_email}
                seller_name={listing.seller_name}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
