import { useRouter } from "next/router";
import React from "react";
import { SidebarData } from "src/components/SidebarData";

const usePath = () => {
  const router = useRouter();
  console.log(router);
  console.log(nowId);
  useEffect(() => {
    const nowId = router.pathname == value.link ? "active" : "";
    return () => {
      nowId = "";
    };
  }, [router.pathname]);
};

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="sideBarList">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname == value.link ? "active" : ""}
              className="row"
              onClick={() => {
                // URL
                window.location.pathname = value.link;
              }}
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
