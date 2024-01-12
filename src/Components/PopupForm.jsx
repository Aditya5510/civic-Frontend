//contains the code for form in the popup {Address and ward}

import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import color from "../styles/colors";
import { useContext } from "react";
import { globalState } from "../App";
import CustomButton from "../utils/CustomButton";
import { Link } from "react-router-dom";
const theme = createTheme({
  palette: {
    primary: { main: "#000000" },
    secondary: { main: "#999999" },
  },
  typography: {
    fontFamily: `"Montserrat", Arial, Helvetica, sans-serif`,

    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 800,
  },
});

export default function PopupForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      Address: data.get("Address"),
    });
  };
  const { mode } = useContext(globalState);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="Address"
                  fullWidth
                  label="Full address"
                  autoFocus
                  multiline
                  variant="filled"
                  rows={2}
                  draggable
                  helperText="Please enter a valid Address otherwise leave it blank"
                  sx={{
                    backgroundColor:
                      mode === "light"
                        ? color.light.navbackground
                        : color.dark.primarybtn,
                    borderRadius: "5px",
                  }}
                />
              </Grid>
            </Grid>
            <Link to="/WardDetails" style={{ textDecoration: "none" }}>
              <CustomButton
                backgroundColor={
                  mode === "dark"
                    ? color.dark.primarybtntext
                    : color.light.primarybtn
                }
                color={
                  mode === "dark"
                    ? color.dark.primarybtn
                    : color.light.primarybtntext
                }
                buttonText="CONFIRM"
                form={true}
              />
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
