import React from "react";

const NavItem = (props) => {
  const { icon, isActive, title, onClick } = props;
  return (
    <li>
      <span
        onClick={onClick}
        role="button"
        className={`text-white mt-2 nav-link ${isActive ? "active" : ""}`}
        aria-current="page"
      >
        {icon}
        {title}
      </span>
    </li>
  );
};

export default NavItem;
