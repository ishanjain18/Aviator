import React from "react";
import Card from "react-bootstrap/Card";

const cardStyle = {
  padding: "10px",
  width: "full",
  margin: "10px 50px",
};

class Listing extends React.Component {
  render() {
    return (
      <>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>
              {this.props.make_name + " " + this.props.car_name}
            </Card.Title>
            <Card.Subtitle>{this.props.purchase_year}</Card.Subtitle>

            <Card.Text>
              <text>
                &#36;
                {" " +
                  this.props.min_price +
                  " - " +
                  this.props.max_price +
                  " K"}
              </text>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            {"Contact: "}
            <b>{this.props.seller_name}</b>
            {" at " + this.props.seller_email}
          </Card.Footer>
        </Card>
      </>
    );
  }
}

export default Listing;
