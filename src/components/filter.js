import React from "react";
import { make_data, model_data } from "../static/car_data";
import { Form, FloatingLabel, Button } from "react-bootstrap";

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      make_name: "",
      car_name: "",
      purchase_year: "",
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
    // revert back to default
    this.setState({
      // Make Name doesn't need to be reset
      car_name: "",
      purchase_year: "",
    });
  };

  render() {
    return (
      <div>
        <h2 style={{ paddingBottom: "10px" }}>Filter</h2>

        <form onSubmit={this.handleSubmit}>
          {/* Company select list */}
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
          <br></br>

          {/* Select Car Brand */}
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
                  <option value={model_data[car][1]}>{car}</option>
                ))}
            </Form.Select>
          </FloatingLabel>
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
                  <option value={year}>{year}</option>
                ))}
            </Form.Select>
          </FloatingLabel>
          <br></br>

          <Button variant="secondary" onClick={(e) => this.handleSubmit(e)}>
            Apply
          </Button>
        </form>
      </div>
    );
  }
}

export default Filter;
