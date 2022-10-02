import React from "react";
import { make_data, model_data } from "../static/car_data";
import { Row, Col, Form, FloatingLabel, Button } from "react-bootstrap";

class Postform extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      make_name: "",
      car_name: "",
      seller_name: "",
      seller_email: "",
      purchase_year: 2021,
      min_price: "",
      max_price: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    console.log(this.state);
    // revert back to default
    this.setState({
      make_name: 1,
      car_name: "",
      seller_name: "",
      seller_email: "",
      purchase_year: 2021,
      min_price: 10.01,
      max_price: 20.01,
    });
  };

  render() {
    return (
      <div>
        <h2 style={{ paddingBottom: "10px" }}>Add a listing</h2>

        <form onSubmit={this.handleSubmit}>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingSelectGrid" label="Select Make">
                <Form.Select
                  name="make_name"
                  onChange={(e) => this.handleChange(e)}
                  aria-label="Floating label select example"
                >
                  {Object.keys(make_data).map((make) => (
                    <option value={make}>{make_data[make]}</option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelectGrid" label="Select Car">
                <Form.Select
                  name="car_name"
                  onChange={(e) => this.handleChange(e)}
                  aria-label="Floating label select example"
                >
                  {Object.keys(model_data)
                    .filter(
                      (value) =>
                        model_data[value][0] === parseInt(this.state.make_name)
                    )
                    .map((car) => (
                      <option key={car} value={model_data[car][1]}>
                        {car}
                      </option>
                    ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>

          <br></br>

          {/* Seller Details */}
          <Row className="g-2">
            {/* Seller Name */}
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Seller Name">
                <Form.Control
                  name="seller_name"
                  type="text"
                  placeholder="seller name"
                  required
                  value={this.state.seller_name}
                  onChange={(e) => this.handleChange(e)}
                />
              </FloatingLabel>
            </Col>
            {/* Seller Email */}
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Email Address"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="seller_email"
                  value={this.state.seller_email}
                  onChange={(e) => this.handleChange(e)}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          {/* Select Year of Purchase */}
          <FloatingLabel controlId="floatingSelectGrid" label="Select Year">
            <Form.Select
              name="purchase_year"
              onChange={(e) => this.handleChange(e)}
              aria-label="Floating label select example"
            >
              {Array(100)
                .fill()
                .map((_, index) => index + 1922)
                .reverse()
                .map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
            </Form.Select>
          </FloatingLabel>
          <br></br>

          {/* Price details */}
          <Row className="g-2">
            {/* Min Price */}
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Min. Price (* 1K USD)"
              >
                <Form.Control
                  type="number"
                  placeholder="Minimum Price"
                  name="min_price"
                  min="0"
                  value={this.state.min_price}
                  step="0.01"
                  onChange={(e) => this.handleChange(e)}
                  required
                />
              </FloatingLabel>
            </Col>
            {/* Max Price */}
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Max. Price (* 1K USD)"
              >
                <Form.Control
                  type="number"
                  placeholder="Maximum Price"
                  name="max_price"
                  min={this.state.min_price}
                  value={this.state.max_price}
                  step="0.01"
                  onChange={(e) => this.handleChange(e)}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Button variant="primary" onClick={(e) => this.handleSubmit(e)}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Postform;
