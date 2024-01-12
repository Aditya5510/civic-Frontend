import * as React from "react";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useContext } from "react";
import color from "../styles/colors";
import { globalState } from "../App";
import styled from "@emotion/styled";
// import { Divider } from "@mui/material";
import CustomButton from "../utils/CustomButton";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme({
  palette: {
    primary: { main: "#282727" },
    // secondary: { main: "#1da7e2" },
  },
  typography: {
    fontFamily: `"Montserrat", Arial, Helvetica, sans-serif`,

    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 800,
  },
});

export default function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    handleClick();
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const { mode } = useContext(globalState);
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: theme.spacing(5),
    gap: theme.spacing(15),
    width: "100vw",
    height: "100vh",

    [theme.breakpoints.down("md")]: {
      display: "flex",
      width: "100vw",
      height: "auto",
      padding: theme.spacing(10),
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100vw",
          height: "auto",
          minHeight: "100vh",
          backgroundColor:
            mode === "light" ? color.light.background : color.dark.background,
          fontFamily: `"Montserrat", Arial, Helvetica, sans-serif`,
        }}
      >
        <CustomBox>
          <Box
            component="main"
            sx={{
              marginTop: { lg: "100px", md: "100px", sm: "40px", xs: "40px" },

              display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
              justifyContent: "center",
              alignItems: "flex-start",
              // border: ".2px solid black",
              borderRadius: "10px",
              backgroundColor:
                mode === "dark"
                  ? `rgba(150, 150, 150, 0.3)`
                  : "rgba(90, 40, 90,0.2)",
            }}
          >
            <Box
              sx={{
                marginTop: { lg: "100px", md: "100px", sm: "0px", xs: "0px" },
                width: { lg: "30vw", md: "30vw", sm: "100%", xs: "100%" },
                padding: "0 3rem",
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  color:
                    mode === "light"
                      ? color.light.secondarycardtext
                      : color.dark.primarybtn,
                  fontWeight: "bold",
                  fontSize: { lg: "30px", md: "30px", sm: "24px", xs: "24px" },
                  display: "flex",
                  flexDirection: "column",
                  gap: ".3rem",
                  fontFamily: `"Montserrat", Arial, Helvetica, sans-serif`,
                }}
              >
                <p
                  style={{
                    fontSize: "1.2em",
                    letterSpacing: "-1px",
                  }}
                >
                  Connect with Us
                </p>
                <p
                  style={{
                    fontSize: "0.7em",
                    opacity: ".7",
                    letterSpacing: "0.5px",
                  }}
                >
                  Your Civic Voice Matters!
                </p>
                <p
                  style={{
                    fontSize: "0.7em",
                    opacity: ".7",
                    fontWeight: "normal",

                    marginTop: "3rem",
                  }}
                >
                  We're here to listen, collaborate, and make a difference in
                  our community. Reach out today!
                </p>
              </Typography>
            </Box>
          </Box>

          <Box sx={{ width: "85vw" }} maxWidth="sm">
            <CssBaseline />
            <Box
              sx={{
                marginTop: { lg: "120px", md: "100px", sm: "30px", xs: "30px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0rem 1.5rem 3rem 1rem",
                border:
                  mode === "light"
                    ? "2px solid rgba(30, 30, 30, 0.13)"
                    : "2px solid rgba(150, 150, 150, 0.13)",

                borderRadius: "10px",
              }}
            >
              <Avatar sx={{ mt: 5, bgcolor: "primary.main" }}>
                <ContactMailIcon />
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  color:
                    mode === "light"
                      ? color.light.secondarycardtext
                      : color.dark.primarybtn,
                  fontFamily: `"Montserrat", Arial, Helvetica, sans-serif`,
                  fontWeight: "bold",
                }}
              >
                Contact Us
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ mt: 6, width: 1400, maxWidth: " 100% " }}
              >
                <Grid container spacing={2.5}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="City"
                      fullWidth
                      id="City"
                      label="City"
                      variant="filled"
                      sx={{
                        backgroundColor:
                          mode === "light"
                            ? color.light.secondarybtntext
                            : color.dark.primarybtn,
                        borderRadius: "5px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="WardNo"
                      id="WardNo"
                      label="WardNo"
                      variant="filled"
                      sx={{
                        backgroundColor:
                          mode === "light"
                            ? color.light.secondarybtntext
                            : color.dark.primarybtn,
                        borderRadius: "5px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="Name"
                      fullWidth
                      id="Name"
                      label="Name"
                      variant="filled"
                      sx={{
                        backgroundColor:
                          mode === "light"
                            ? color.light.secondarybtntext
                            : color.dark.primarybtn,
                        borderRadius: "5px",
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="Message"
                      label="Message"
                      type="text"
                      id="text"
                      variant="filled"
                      multiline
                      maxRows={10}
                      maxWidth={50}
                      sx={{
                        backgroundColor:
                          mode === "light"
                            ? color.light.secondarybtntext
                            : color.dark.primarybtn,
                        borderRadius: "5px",
                      }}
                    />
                  </Grid>
                </Grid>
                <div>
                  <Box
                    sx={{
                      mt: 2,
                      // border: "5px solid black",
                    }}
                  >
                    <CustomButton
                      type="submit"
                      onClick={handleClick}
                      backgroundColor={color.dark.primarybtn}
                      buttonText={"Submit"}
                      fullwidth={true}
                    />
                  </Box>
                  <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="primary"
                      sx={{ width: "100%" }}
                    >
                      Thank you for contacting us!
                    </Alert>
                  </Snackbar>
                </div>
              </Box>
            </Box>
          </Box>
        </CustomBox>
      </Box>
    </ThemeProvider>
  );
}
