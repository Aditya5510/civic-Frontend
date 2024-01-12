//contains dowloand section as well as the form section

import * as React from "react";
import { Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Popup from "./Popup";
import Grid from "@mui/material/Grid";
import CustomButton from "../utils/CustomButton";
import { globalState } from "../App";
import { useContext } from "react";
import color from "../styles/colors";
import { Link, useNavigate } from "react-router-dom";
import MyLocationIcon from "@mui/icons-material/MyLocation";

const mode1 = "light";
const theme = createTheme({
  palette: {
    primary: { main: mode1 === "light" ? "#000000" : "#000000" },
  },
  typography: {
    fontFamily: `"Montserrat", Arial, Helvetica, sans-serif`,

    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 800,
  },
});

function FormHero() {
  const navigator = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const city = data.get("City");
    const ward_no = data.get("ward");
    console.log({ city, ward_no });

    navigator(`/WardDetails?city=${city}&ward_no=${ward_no}`);
  };
  const { t } = useTranslation();
  const { mode } = useContext(globalState);
  const newstyle = {
    backgroundColor:
      mode === "light" ? color.light.secondarybtn : color.dark.primarybtn,
    borderRadius: "5px",
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main">
        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          lg={10}
          // component={Paper}

          elevation={0}
          sx={{ mt: { lg: 14, md: 10, sm: 2, xs: 2 } }}
        >
          <Box
            sx={{
              my: 0,
              mx: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2rem 2rem 3rem 2rem",
              border:
                mode === "light"
                  ? "2px solid rgba(30, 30, 30, 0.13)"
                  : "2px solid rgba(150, 150, 150, 0.13)",

              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                gap: "2rem",
              }}
            >
              <Typography
                component="h2"
                variant="h5"
                sx={{
                  fontFamily: "Montserrat",
                  color:
                    mode === "light"
                      ? color.light.primarycolor
                      : color.dark.primarycolor,
                }}
              >
                {t("formheadingHero")}
              </Typography>
            </Box>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                mt: "1%",
                width: 290,
                height: "200px",
              }}
            >
              {" "}
              <TextField
                margin="normal"
                fullWidth
                variant="filled"
                name="City"
                label={t("city")}
                sx={newstyle}
              />
              <Grid item xs={12}>
                <TextField
                  draggable
                  fullWidth
                  variant="filled"
                  lang="en"
                  label={t("wardNo")}
                  name="ward"
                  autoComplete="ward"
                  // helperText={t("wardHelper")}
                  sx={newstyle}
                />
              </Grid>
              {/* <TextField
                margin="normal"
                fullWidth
                variant="filled"
                name="Pincode"
                label={t("pincode")}
                sx={newstyle}
              /> */}
              <CustomButton
                type="submit"
                backgroundColor={
                  mode === "light"
                    ? color.light.primarybtn
                    : color.dark.primarybtn
                }
                color={mode === "light" ? "black" : color.dark.primarybtntext}
                buttonText={t("submit")}
                form={true}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color:
                  mode === "dark"
                    ? color.dark.primarycolor
                    : color.light.primarycolor,
              }}
            >
              or
            </Typography>
            <Link to="/PinpointLocation">
              <Button
                variant="outlined"
                fullWidth
                startIcon={<MyLocationIcon />}
                sx={{
                  mt: 0,
                  width: 300,
                  backgroundColor: mode === "dark" ? "#EFE1D1" : "#FFFFFF",
                  color:
                    mode === "light"
                      ? color.light.primarybtntext
                      : color.dark.primarybtntext,
                }}
              >
                {t("yourLocation")}
              </Button>
            </Link>
          </Box>
        </Grid>

        <CssBaseline />
      </Grid>
    </ThemeProvider>
  );
}

export default FormHero;
