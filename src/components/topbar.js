import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../static/logo.svg";

class TopBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand style={{ fontSize: "45px", fontWeight: "300" }} href="/">
          <img
            alt=""
            src={logo}
            width="100"
            height="60"
            className="d-inline-block align-top"
          />{" "}
          {this.props.header}
        </Navbar.Brand>
        {/* <Nav>
            <Nav.Link className="admin-btn" href="/admin">
              
            </Nav.Link>
          </Nav> */}
      </Navbar>
    );
  }
}
export default TopBar;
