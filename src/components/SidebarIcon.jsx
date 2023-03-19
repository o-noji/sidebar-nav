import Image from "next/image";
import React from "react";
import Icon from "../images/onoji.png";

function SidebarIcon() {
  return (
    <div className="SidebarIcon">
      <Image src={Icon} alt="icon" />
    </div>
  );
}

export default SidebarIcon;
