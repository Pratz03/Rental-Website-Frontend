import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItemText,
} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import { iconMap } from "../../helpers/iconMap";
import theme from "../../theme";
import "../../styles/header.css";
import { useMediaQuery } from "@mui/material";

function MenuBarComponent() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        boxShadow: "0px 2px 5px #e9e9e9",
        padding: "10px 20px",
        top: 0,
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ width: "80px" }} />
          {!isMobile && (
            <>
              <Button
                variant="text"
                endIcon={iconMap["arrow_down"]}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  textTransform: "none",
                  color: theme.palette.text.primary,
                  fontSize: 16,
                  ml: 4,
                }}
              >
                Mumbai
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
              <Typography sx={{ ml: 2, fontSize: 16 }}>All Products</Typography>
            </>
          )}
        </div>

        {isMobile ? (
          <IconButton edge="end" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        ) : (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="text"
              startIcon={iconMap["cart"]}
              sx={{
                textTransform: "none",
                color: theme.palette.text.primary,
                fontSize: 16,
              }}
            >
              Cart
            </Button>
            <Button variant="contained" sx={{ ml: 2, mr: 2 }}>
              Login
            </Button>
            <Button variant="contained">Sign Up</Button>
          </div>
        )}
      </Toolbar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ width: 250 }}>
          <ListItem disablePadding>
            <ListItemText primary="Mumbai" />
          </ListItem>
          <ListItem>
            <ListItemText primary="All Products" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Cart" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Sign Up" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default MenuBarComponent;
