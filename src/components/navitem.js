import React from "react";

const NavItem = (props) => {
  const { icon, isActive, title } = props;
  return (
    <li>
      <a
        href="/"
        className={`text-white nav-link ${isActive ? "active" : ""}`}
        aria-current="page"
      >
        {icon}
        {title}
      </a>
    </li>
  );
};

export default NavItem;
