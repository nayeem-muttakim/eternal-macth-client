import {
  EditTwoTone,
  FileTextTwoTone,
  HeartTwoTone,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PullRequestOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const { Content, Sider } = Layout;

const DashLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        style={{
          backgroundColor: "white",
          position: "sticky",
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Menu
          mode="inline"
          style={{
            position: "sticky",
            top: 105,
            zIndex: 2,
            overflow: "hidden",
          }}
          defaultSelectedKeys={"1"}
          items={[
            {
              key: "1",
              icon: <EditTwoTone twoToneColor="#eb2f96" />,
              label: <Link to="edit-biodata">Edit Biodata</Link>,
            },
            {
              key: "2",
              icon: <FileTextTwoTone twoToneColor="#eb2f96" />,
              label: <Link to="view-biodata">View Biodata</Link>,
            },
            {
              key: "3",
              icon: <PullRequestOutlined style={{ color: "#eb2f96" }} />,
              label: <Link to="my-contact-request">My Contact Request</Link>,
            },
            {
              key: "4",
              icon: <HeartTwoTone twoToneColor="#eb2f96" />,
              label: <Link to="fav-biodata">Favourite Biodata</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,

            position: "sticky",
            top: 105,
            zIndex: 2,
            overflow: "hidden",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 50,
              height: 50,
            }}
          />
         
        </Header>
        <Content
          style={{
            margin: "15px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: "65vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default DashLayout;
