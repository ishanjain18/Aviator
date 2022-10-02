import React from "react";
import { getApiData, postApiData } from "../services/api_manager";
import Filter from "./filter";
import TopBar from "./topbar";
import Listing from "./listing";
import Postform from "./post_form";

class Admin extends React.Component {
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
      console.log(response);
    });
  }

  onSubmit = async (fields) => {
    // fields contains state lifted up from form.js, state contains all values required for a POST request
    await postApiData(fields);
    console.log(fields);

    getApiData().then((response) => {
      this.setState({
        listings: response,
      });
      console.log(response);
    });
  };

  onFilterSubmit = async (fields) => {
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
      <div>
        <TopBar header={"Trade Cars (Admin)"} button={false} />
        <div className="row1">
          <div className="column1">
            <Postform onSubmit={(fields) => this.onSubmit(fields)} />
            <br></br>
            <Filter onSubmit={(fields) => this.onFilterSubmit(fields)} />
          </div>
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
      </div>
    );
  }
}
export default Admin;
