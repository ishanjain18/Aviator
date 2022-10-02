import React from "react";
import NavItem from "./navitem";

class SideBar extends React.Component {
  render() {
    return (
      <div
        class="d-flex flex-column px-3 pt-4 flex-shrink-0 text-white bg-dark"
        style={{ width: 280 }}
      >
        <ul class="nav nav-pills flex-column mb-auto">
          <NavItem
            icon={<i class="pe-3 bi bi-house" width="16" height="16"></i>}
            isActive={true}
            title="Home"
          />
          <NavItem
            icon={<i class="pe-3 bi bi-card-list" width="16" height="16"></i>}
            isActive={false}
            title="Jobs"
          />
          <NavItem
            icon={
              <i class="pe-3 bi bi-patch-question" width="16" height="16"></i>
            }
            isActive={false}
            title="FAQs"
          />
        </ul>
        <hr />
      </div>
    );
  }
}
export default SideBar;
