//Contains the code for the Drawer component

import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import { Avatar } from "@mui/material";
import logo from "../Media/logo.png";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { globalState } from "../App";
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const styles = { border: "1px solid #b1e5c94f", marginTop: "20px" };
  const { mode, setMode } = useContext(globalState);
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            width: 200,
            background: "#eff2f3",
            color: "white",
            paddingTop: "2rem",
            paddingLeft: "1rem",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: "1rem",
            marginLeft: "1.6rem",
            width: "100%",
          }}
        >
          <Avatar
            src={logo}
            sx={{
              height: "30px",
              width: "60px",
              transform: "scale(2.2)",
              marginLeft: "1.5rem",
              color: mode === "light" ? "black" : "#EFE1D1",
              marginTop: "0.2rem",
              borderBottom: 1,
              mb: "10px",
            }}
          />
        </Box>
        <List
          sx={{
            borderTop: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
            gap: "1rem",
          }}
        >
          {/* {pages.map((page, index) => (
            <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))} */}{" "}
          {/* <Link
            to="/"
            onClick={() => setOpenDrawer(false)}
          > */}{" "}
          <Link to={"/"} onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              {" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",

                  // ml: 2,
                }}
              >
                <HomeIcon />
                Home
              </Box>
            </ListItemIcon>
          </Link>
          {/* </ListItemButton> */}
          {/* <div style={styles}></div> */}
          {/* // */}
          <Link to="/About" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    // ml: 2,
                  }}
                >
                  <InfoIcon />
                  About
                </Box>
              </ListItemText>
            </ListItemIcon>
          </Link>
          {/* <div style={styles}></div> */}
          {/* // */}
          <Link to="/Partners" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    // ml: 2,
                  }}
                >
                  <HandshakeIcon />
                  Partners
                </Box>
              </ListItemText>
            </ListItemIcon>
          </Link>
          {/* <div style={styles}></div> */}
          {/* // */}
          <Link to="/Contactus" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    // ml: 2,
                  }}
                >
                  <ContactSupportIcon />
                  Contactus
                </Box>
              </ListItemText>
            </ListItemIcon>
          </Link>
          {/* // */}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ color: mode === "light" ? "black" : "#EFE1D1" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
