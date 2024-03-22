import {
  EditTwoTone,
  FileTextTwoTone,
  HeartTwoTone,
  PullRequestOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
const { Content, Sider } = Layout;

const DashLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        style={{ backgroundColor: "white" }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
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
              label: <Link to="">Edit Biodata</Link>,
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
