import React from "react";
import ActiveLink from "src/components/ActiveLink";
import { SidebarData } from "src/components/SidebarData";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="sideBarList">
        {SidebarData.map((value, key) => {
          return (
            <li key={key} className="row">
              <ActiveLink href={value.link} activeClassName="active">
                <a>
                  <div id="icon">{value.icon}</div>
                  <div id="title">{value.title}</div>
                </a>
              </ActiveLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
