//contains navbar and drawer component for the website and also contains the language switcher

import React, { useState } from "react";
import Logo from "../Media/logo.png";
// import LanguageIcon from "@mui/icons-material/Language";
import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  IconButton,
  Tooltip,
  Avatar,
} from "@mui/material";
import ConfirmationDialog from "./Language_dialogue_Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DrawerComp from "./Drawer";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
// import { useTranslation } from "react-i18next";
import { globalState } from "../App";
import color from "../styles/colors";
import { useTranslation } from "react-i18next";
import { Slide } from "@mui/material";
import { useScrollTrigger } from "@mui/material";
import { PropTypes } from "@mui/material";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const theme = createTheme({
  palette: {
    primary: { main: "#000000" },
    secondary: { main: "#1da7e2" },
  },
  typography: {
    fontFamily: `"Montserrat", Arial, Helvetica, sans-serif`,

    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 800,
  },
});

const Header = (props) => {
  const { mode, setMode } = useContext(globalState);
  // console.log(mode);
  const toggler = (mode) => {
    mode === "dark" ? setMode("light") : setMode("dark");
    localStorage.setItem("mode", mode === "dark" ? "light" : "dark");
  };
  //

  const [value, setValue] = useState();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch);
  const style = {
    color: mode === "light" ? "#000000" : "#FFFFFF",
    fontWeight: "regular",
  };
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <HideOnScroll {...props}>
          <AppBar
            sx={{
              backgroundColor:
                mode === "light"
                  ? color.light.navbackground
                  : color.dark.navbackground,
              // boxShadow: "0 1px 15px -3px rgba(20, 20, 20, 0.4)",
              boxShadow: "none",

              backdropFilter: "blur(10px)",
            }}
          >
            <Toolbar>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1 rem",
                }}
              >
                <Avatar
                  src={Logo}
                  sx={{
                    height: "30px",
                    width: "60px",
                    transform: "scale(2.2)",
                    marginLeft: "1.5rem",
                    color: mode === "light" ? "black" : "#EFE1D1",
                    marginTop: "0.2rem",
                  }}
                />
              </Box>
              {isMatch ? (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "auto",
                    }}
                  >
                    {" "}
                    <Tooltip
                      title={
                        mode === "light"
                          ? "Switch to dark mode"
                          : "Switch to light mode"
                      }
                    >
                      <IconButton
                        sx={{ width: "20px", height: "20px" }}
                        onClick={() => toggler(mode)}
                        color="inherit"
                      >
                        {mode === "dark" ? (
                          <Brightness7Icon sx={{ color: "#D869C0" }} />
                        ) : (
                          <Brightness4Icon sx={{ color: "black" }} />
                        )}
                      </IconButton>
                    </Tooltip>
                    <ConfirmationDialog />
                    <DrawerComp />
                  </Box>
                </>
              ) : (
                <>
                  <Tabs
                    sx={{ marginLeft: "auto", fontSize: "1.2rem" }}
                    value={value}
                    onChange={(e, value) => setValue(value)}
                    indicatorColor="secondary"
                  >
                    <Link to="/">
                      <Tab label={t("HomeMenu")} sx={style} value={1} />
                    </Link>
                    <Link to="/About">
                      <Tab label={t("AboutMenu")} sx={style} value={2} />
                    </Link>
                    <Link to="/Partners">
                      <Tab label={t("PartnersMenu")} sx={style} value={3} />
                    </Link>
                    <Link to="/Contactus">
                      <Tab label={t("ContactMenu")} sx={style} value={4} />
                    </Link>
                  </Tabs>
                  <Box
                    sx={{
                      marginLeft: "auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",

                      gap: { lg: "20px", md: "10px", sm: "10px", xs: "10px" },
                    }}
                  >
                    <ConfirmationDialog />
                    <Tooltip
                      title={
                        mode === "light"
                          ? "Switch to dark mode"
                          : "Switch to light mode"
                      }
                    >
                      <IconButton
                        sx={{ width: "20px", height: "20px" }}
                        onClick={() => toggler(mode)}
                        color="inherit"
                      >
                        {mode === "dark" ? (
                          <>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                ml: "auto",
                              }}
                            >
                              <Brightness7Icon
                                sx={{ color: "#D869C0", height: "50px" }}
                              />
                            </Box>
                          </>
                        ) : (
                          <>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                ml: "auto",
                              }}
                            >
                              <Brightness4Icon
                                sx={{ color: "black", height: "50px" }}
                              />
                            </Box>
                          </>
                        )}
                      </IconButton>
                    </Tooltip>
                  </Box>
                </>
              )}
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Header;
