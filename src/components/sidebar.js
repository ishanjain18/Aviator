import React from "react";
import NavItem from "./navitem";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [activeItem, setActiveItem] = React.useState("");
  let navigate = useNavigate();

  function handleClick(e) {
    let to = e.target.innerText.toLowerCase();
    navigate(`/${to}`, { replace: true });
  }

  React.useEffect(() => {
    setActiveItem(window.location.pathname);
  }, []);

  return (
    <div
      className="d-flex flex-column px-3 pt-4 flex-shrink-0 text-white bg-dark"
      style={{
        width: 280,
        height: "calc(100vh - 93.5px)",
        position: "sticky",
        top: 93.5,
      }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <NavItem
          navlink="/"
          icon={<i className="pe-3 bi bi-house" width="16" height="16"></i>}
          isActive={activeItem === "/home"}
          onClick={handleClick}
          title="Home"
        />
        <NavItem
          navlink="/jobs"
          icon={<i className="pe-3 bi bi-card-list" width="16" height="16"></i>}
          isActive={activeItem === "/jobs"}
          onClick={handleClick}
          title="Jobs"
        />
        <NavItem
          navlink="/faqs"
          icon={
            <i className="pe-3 bi bi-patch-question" width="16" height="16"></i>
          }
          isActive={activeItem === "/faqs"}
          onClick={handleClick}
          title="FAQs"
        />
      </ul>
      <hr />
    </div>
  );
};

export default SideBar;
