import React from 'react'
import logo from "../images/logo.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = ["Experience", "Project", "Hobby", "Contact"];

  return (
    <div>
      <AppBar position="static" color='transparent'>
            <Box
              className="appbar"
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex",
              }}
            >
              <Toolbar>
                <Link href="/">
                  <Box
                    component="img"
                    sx={{ height: 87, justifyContent: "flex-start" }}
                    alt="Logo"
                    src={logo}
                  />
                </Link>
              </Toolbar>

            </Box>
          </AppBar>
    </div>
  )
}
