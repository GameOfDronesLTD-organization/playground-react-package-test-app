import { Col, Layout, Menu, Row, Typography } from "antd";
import _ from "lodash";
import { FC, ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  CarOutlined,
  UserOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

export const FranchiserLayout: FC<{ children: ReactNode }> = (props) => {
  type MenuItem = Required<MenuProps>["items"][number];
  const navigate = useNavigate();

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items = [
    getItem("", "", <div>Game of Drones</div>),
    getItem("Главная", "", <AppstoreOutlined />),
    getItem("Машины", "cars", <CarOutlined />),
    getItem("Персонал", "employees", <UserOutlined />),
    getItem("История активации", "history", <HistoryOutlined />),
  ];

  return (
    <Layout className="w-full h-full" style={{ background: "white" }}>
      <Row className="w-full h-full">
        <Col className="h-full" span={4}>
          <Menu
            onSelect={(item) => {
              if (item.key === "") {
                navigate("/");
              } else if (item.key === "cars") {
                navigate("/franchiser/drone");
              } else if (item.key === "history") {
                navigate("/franchiser/reports");
              } else if (item.key === "employees") {
                navigate("/franchiser/employees");
              }
            }}
            className="h-full w-full pt-4"
            mode="vertical"
            items={items}
          />
        </Col>
        <Col className="px-10 py-14" span={20}>
          {props.children}
        </Col>
      </Row>
    </Layout>
  );
};
