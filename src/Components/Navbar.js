
import React, { useState } from "react";
import Logo from "../Assets/logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ApartmentIcon from '@mui/icons-material/Apartment';
import RoofingIcon from '@mui/icons-material/Roofing';
import CallIcon from '@mui/icons-material/Call';
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpenMenu(false);
  };

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      id: "home",
    },
    {
      text: "About Us",
      icon: <InfoIcon />,
      id: "about",
    },
    {
      text: "Services",
      icon: <DesignServicesIcon />,
      id: "services",
    },
    {
      text: "Projects",
      icon: <ApartmentIcon />,
      id: "projects",
    },
    {
      text: "Packages",
      icon: <RoofingIcon />,
      id: "packages",
    },
    {
      text: "Contact Us",
      icon: <CallIcon />,
      id: "contact",
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <a
            key={item.text}
            href={`#${item.id}`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.text}
          </a>
        ))}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
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
                <ListItemButton onClick={() => scrollToSection(item.id)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
