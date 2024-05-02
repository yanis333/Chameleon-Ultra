import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// Import new icons
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import WifiIcon from "@mui/icons-material/Wifi";
import SaveIcon from '@mui/icons-material/Save';
import DashboardIcon from "@mui/icons-material/Dashboard";

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          paddingTop: "20px",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {[
          "Home",
          "Slot Manager",
          "Saved Cards",
          "Read Card",
          "Write Crad",
          "Settings",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 && <HomeIcon />}
              {index === 1 && <DashboardIcon />}
              {index === 2 && <SaveIcon />}
              {index === 3 && <WifiIcon />}
              {index === 4 && <CreditCardIcon />}
              {index === 5 && <SettingsIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
export default Sidebar;
