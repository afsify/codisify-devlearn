// import { Layout } from "antd";
// import { useState } from "react";
// import { Card, Menu } from "antd";
// import PropTypes from "prop-types";
// import UserLayout from "../layout/UserLayout";
// import { userPath } from "../../routes/routeConfig";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   DesktopOutlined,
//   PieChartOutlined,
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   SettingOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";

// const { Sider } = Layout;

// const DevLayout = ({ children }) => {
//   const [collapsed, setCollapsed] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const items = [
//     {
//       key: "1",
//       icon: <SettingOutlined />,
//       label: "DevBoard",
//       path: userPath.devBoard,
//     },
//     {
//       key: "2",
//       icon: <PieChartOutlined />,
//       label: "Dashboard",
//       path: userPath.dashboard,
//     },
//     {
//       key: "3",
//       icon: <DesktopOutlined />,
//       label: "Projects",
//       path: userPath.projectManage,
//     },
//     {
//       key: "4",
//       icon: <VideoCameraOutlined />,
//       label: "Courses",
//       path: userPath.courseManage,
//     },
//   ];

//   const handleMenuClick = (e) => {
//     const selectedItem = items.find((item) => item.key === e.key);
//     if (selectedItem) {
//       navigate(selectedItem.path);
//     }
//   };

//   return (
//     <UserLayout>
//       <Card className="w-full mx-auto md:px-5 pt-4 shadow-lg rounded-lg">
//         <div className="flex">
//           <Sider
//             collapsed={collapsed}
//             onCollapse={(value) => setCollapsed(value)}
//             theme="dark"
//             className="rounded-lg bg-dark-purple"
//           >
//             <div className="flex justify-center p-4">
//               {collapsed ? (
//                 <MenuUnfoldOutlined
//                   onClick={() => setCollapsed(false)}
//                   style={{
//                     fontSize: "20px",
//                     color: "#fff",
//                     cursor: "pointer",
//                   }}
//                 />
//               ) : (
//                 <MenuFoldOutlined
//                   onClick={() => setCollapsed(true)}
//                   style={{
//                     fontSize: "20px",
//                     color: "#fff",
//                     cursor: "pointer",
//                   }}
//                 />
//               )}
//             </div>
//             <Menu
//               selectedKeys={[location.pathname]}
//               onClick={handleMenuClick}
//               mode="inline"
//               className="bg-dark-purple"
//               items={items.map(({ key, icon, label }) => ({
//                 key,
//                 icon,
//                 label,
//               }))}
//               style={{
//                 border: "none",
//                 color: "#fff",
//                 fontWeight: "500",
//                 fontSize: "16px",
//               }}
//             />
//           </Sider>
//           <div className="p-6 flex-grow">{children}</div>
//         </div>
//       </Card>
//     </UserLayout>
//   );
// };

// DevLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default DevLayout;

import { Button } from "antd";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import UserLayout from "../layout/UserLayout";
import { userPath } from "../../routes/routeConfig";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LeftOutlined,
  SettingOutlined,
  DesktopOutlined,
  PieChartOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

function DevLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const devMenu = [
    {
      id: "1",
      title: "DevBoard",
      icon: <SettingOutlined />,
      path: userPath.devBoard,
    },
    {
      id: "2",
      title: "Dashboard",
      icon: <PieChartOutlined />,
      path: userPath.dashboard,
    },
    {
      id: "3",
      title: "Projects",
      icon: <DesktopOutlined />,
      path: userPath.projectManage,
    },
    {
      id: "4",
      title: "Courses",
      icon: <VideoCameraOutlined />,
      path: userPath.courseManage,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <UserLayout>
      <div className="flex">
        <aside className="h-96 flex">
          <div
            className={` ${
              open ? "w-48" : "w-20 "
            } bg-dark-purple p-5 pt-6 relative shadow-black shadow-md duration-300 rounded-xl`}
          >
            <ul className="mt-3">
              {devMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <li
                    key={menu.id}
                    className={`${
                      !open && "flex justify-center mt-4"
                    } flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4
                    ${menu.gap ? "mt-9" : "mt-2"} ${
                      isActive && " bg-light-white font-semibold"
                    } `}
                    onClick={() => navigate(menu.path)}
                  >
                    {menu.icon}
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      {menu.title}
                    </span>
                  </li>
                );
              })}
            </ul>
            <Button
              type="primary"
              size="large"
              className={` ${
                open ? "w-[150px]" : "w-12 "
              } flex absolute bottom-5 border border-white bg-dark-purple`}
              onClick={() => setOpen(!open)}
            >
              <LeftOutlined
                style={{ fontSize: "28px" }}
                className={`transition-transform duration-300 ease-in-out
            ${!open && "rotate-180"}`}
              />
            </Button>
          </div>
        </aside>
        <main className="w-full px-2 overflow-y-auto h-screen mb-20 md:mb-0">
          {children}
        </main>
      </div>
    </UserLayout>
  );
}

DevLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DevLayout;
