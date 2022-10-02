import React from "react";
import TopBar from "../components/topbar";
import SideBar from "../components/sidebar";
import "../static/style.css";

export default function Layout(props) {
  const { header, children } = props;
  return (
    <>
      <TopBar header={"Aviator"} button={false} />
      <div className="row1">
        <SideBar />
        <div className="column2">
          <h1>{header}</h1>
          <hr></hr>
          {children}
        </div>
      </div>
    </>
  );
}
