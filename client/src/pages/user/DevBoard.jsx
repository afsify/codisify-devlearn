import { Layout } from "antd";
import { useState } from "react";
import { Card, Menu } from "antd";
import UserLayout from "../../components/layout/UserLayout";
import {
  FileOutlined,
  DesktopOutlined,
  PieChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const DevBoard = () => {
  const [collapsed, setCollapsed] = useState(false);

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem("Dashboard", "1", <PieChartOutlined />),
    getItem("Projects", "2", <DesktopOutlined />),
    getItem("Files", "3", <FileOutlined />),
  ];

  return (
    <UserLayout>
      <Card
        title={
          <h1 className="text-2xl font-semibold">DevBoard</h1>
        }
        className="w-full mx-auto md:px-5 pt-4 shadow-lg rounded-lg"
      >
        <div className="flex">
          <Sider
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            theme="dark"
            className="rounded-lg bg-dark-purple"
          >
            <div className="flex justify-center p-4">
              {collapsed ? (
                <MenuUnfoldOutlined
                  onClick={() => setCollapsed(false)}
                  style={{
                    fontSize: "20px",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <MenuFoldOutlined
                  onClick={() => setCollapsed(true)}
                  style={{
                    fontSize: "20px",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
            <Menu
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
              style={{
                border: "none",
                color: "#fff",
                fontWeight: "500",
                fontSize: "16px",
              }}
            />
          </Sider>
          <div className="p-6 flex-grow">
            <h2 className="text-xl font-semibold">
              Welcome to DevBoard
            </h2>
          </div>
        </div>
      </Card>
    </UserLayout>
  );
};

export default DevBoard;
