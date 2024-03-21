import { Button, Drawer, Menu, Popover, Tooltip, Typography } from "antd";
import * as React from "react";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import "./Navbar.css";
import logo from "/logo.png";
import User from "/user.png";

import { Link, NavLink } from "react-router-dom";
import MenuItem from "antd/es/menu/MenuItem";
import useAuth from "../../Hooks/useAuth";

const pages = [
  { title: "Home", link: "" },
  { title: "Biodatas", link: "bio-datas" },
  { title: "About us", link: "about-us" },
  { title: "Contact us", link: "contact-us" },
];

const settings = [{ title: "Dashboard", link: "dashboard" }];

function Navbar() {
  const { user, logOut } = useAuth();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    const res = await logOut();
  };

  return (
    <nav
      style={{
        position: "static",
        backgroundColor: "#ffe5ec",
      }}
    >
      <div id="container" style={{ maxWidth: "1300px", marginInline: "auto" }}>
        <div id="navbar">
          <div id="menu-icon">
            <MenuOutlined style={{ fontSize: "20px" }} onClick={handleOpen} />
          </div>
          <Typography id="logo" variant="h6" component="a" href="/">
            <img src={logo} alt="logo" style={{ width: 250, height: 100 }} />
          </Typography>

          <div id="navs">
            {pages.map((page) => (
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: 20,
                }}
                key={page.title}
                to={`/${page.link}`}
              >
                {page.title}
              </NavLink>
            ))}
          </div>

          <div id="menu">
            {user ? (
              <Popover
                content={
                  <Menu
                    style={{
                      textAlign: "center",
                      fontSize: 15,
                      fontWeight: 500,
                    }}
                  >
                    {settings.map((setting) => (
                      <Link key={setting} to={`/${setting.link}`}>
                        <MenuItem>{setting.title}</MenuItem>
                      </Link>
                    ))}
                    {user && (
                      <MenuItem>
                        <Link variant="text" onClick={handleLogout}>
                          Logout
                        </Link>
                      </MenuItem>
                    )}
                  </Menu>
                }
              >
                <img src={User} alt="" width={33} />
              </Popover>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Link to="SignIn" style={{ textDecoration: "none" }}>
                  <Button size="large" id="signIn">
                    Sign in
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* responsive navigation */}
      <Drawer
        style={{ width: 250 }}
        placement="left"
        closable={false}
        onClose={handleClose}
        open={open}
      >
        <Menu>
          {pages.map((page) => (
            <NavLink key={page.title} to={`/${page.link}`}>
              <MenuItem style={{ textAlign: "center", fontSize: 18 }}>
                {page.title}
              </MenuItem>
            </NavLink>
          ))}
        </Menu>
      </Drawer>
    </nav>
  );
}
export default Navbar;
