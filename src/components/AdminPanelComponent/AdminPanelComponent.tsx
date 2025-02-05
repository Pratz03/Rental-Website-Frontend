import {
  AppBar,
  Avatar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { dashboardData } from "../../helpers/metaData";
import logo from "../../assets/logo.png";
import avtar from "../../assets/avtar.png";
import "../../styles/adminPanel.css";

const drawerWidth = 300;

function AdminPanelComponent() {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeComponent, setActiveComponent] = useState("create_product_form");
  const theme = useTheme();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleDrawerItemClick = (componentName: string) => {
    setActiveComponent(componentName);
    handleDrawerToggle();
  };

  const drawer = (
    <Box
      sx={{
        height: "100%", // Ensure full height of drawer
        display: "flex",
        flexDirection: "column",
        padding: "0 20px",
      }}
    >
      {/* Fixed Logo Section */}
      <Box
        sx={{
          textAlign: "left",
          padding: "40px 20px 20px",
          position: "fixed",
          top: 0,
          width: { sm: `calc(${drawerWidth - 21}px)` },
          backgroundColor: theme.palette.background.paper, // Match Drawer BG
          zIndex: 10, // Ensure it stays on top
        }}
      >
        <img src={logo} alt="Logo" style={{ width: "100px", height: "auto" }} />
      </Box>

      {/* List Section */}
      <Box
        className="drawer-box"
        sx={{ flexGrow: 1, overflowY: "auto", paddingTop: "100px" }}
      >
        <List>
          {Object.keys(dashboardData).map((key: string) => (
            <ListItem key={key} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  background:
                    key === activeComponent
                      ? theme.palette.primary.main
                      : theme.palette.background.paper,
                  "& .MuiListItemIcon-root": {
                    color:
                      key === activeComponent
                        ? theme.palette.text.secondary
                        : theme.palette.text.primary,
                  },
                  "& .MuiTypography-root": {
                    color:
                      key === activeComponent
                        ? theme.palette.text.secondary
                        : theme.palette.text.primary,
                  },
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    "& .MuiListItemIcon-root": {
                      color: theme.palette.text.secondary,
                    },
                    "& .MuiTypography-root": {
                      color: theme.palette.text.secondary,
                    },
                  },
                }}
                onClick={() => handleDrawerItemClick(key)}
              >
                <ListItemIcon sx={{ minWidth: 45 }}>
                  {dashboardData[key].icon}
                </ListItemIcon>
                <ListItemText primary={dashboardData[key].text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: { sm: `none` },
          background: "#ffffff",
        }}
      >
        <Toolbar sx={{ pt: { sm: 1.5 }, pl: { sm: 3 } }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <ListItem sx={{ pl: 0, pr: 0 }}>
              <ListItemAvatar>
                <Avatar
                  alt="Avtar"
                  src={avtar}
                  sx={{ width: 60, height: 60, mr: 3 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      variant="h4"
                      noWrap
                      component="div"
                      sx={{ fontWeight: "600" }}
                    >
                      Hello John!
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <Toolbar />
        <div>
          {dashboardData[activeComponent].component}
        </div>
      </Box>
    </Box>
  );
}

export default AdminPanelComponent;
