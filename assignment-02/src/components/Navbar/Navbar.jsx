import logo_nasa from "../../../public/NASA_logo.svg.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PanoramaHorizontalSelectIcon from "@mui/icons-material/PanoramaHorizontalSelect";
import Filter2Icon from "@mui/icons-material/Filter2";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, link: "/" },
    {
      text: "APOD",
      icon: <InfoIcon />,
      link: "/APOD",
    },
    {
      text: "EAI",
      icon: <PanoramaHorizontalSelectIcon />,
      link: "/EAI",
    },
    {
      text: "MRP",
      icon: <Filter2Icon />,
      link: "/MAP",
    },
  ];
  const isLoggedIn = sessionStorage.getItem("user");
  function handleClicked(link) {
    console.log("Machn methana waradi naa" + isLoggedIn);
    if (isLoggedIn) {
      navigate(link);
    } else {
      navigate("/Login");
    }
  }

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={logo_nasa} className="logo" alt="" />
      </div>
      <h2 className="navbar-h2">NASA API</h2>
      <div className="navbar-links-container">
        {menuOptions.map((options) => (
          <div className="links-h3">
            <h3 key={options.text} onClick={() => handleClicked(options.link)}>
              {options.text}
            </h3>
          </div>
        ))}

        {!isLoggedIn && (
          <>
            <button
              className="primary-button"
              onClick={() => {
                navigate("/SignIn");
              }}
            >
              Sign up
            </button>
            <button
              className="primary-button"
              onClick={() => {
                navigate("/Login");
              }}
            >
              Sign-in
            </button>
          </>
        )}
        {isLoggedIn && (
          <Link to="/UserProfile">
            <FaUserCircle className="userprofileIcon" />
          </Link>
        )}
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      </div>
      <Drawer
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        anchor="left"
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => handleClicked(item.link)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
}

export default Navbar;
