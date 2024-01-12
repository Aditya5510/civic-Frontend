import * as React from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { useContext } from "react";
import color from "../styles/colors";
import { globalState } from "../App";
import styled from "@emotion/styled";
// import CustomButton from "../utils/CustomButton";
import SectionCard from "../Components/SectionCard";
import Footer from "../Components/Footer";
import { Grid } from "@mui/material";

const Caro = ({ position, data }) => {
  return (
    <>
      <Typography
        variant="h4"
        font-size="0.5rem"
        align="left"
        sx={{ borderTop: 1 }}
      >
        {" "}
        {position}
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{ padding: "0rem", mt: "3px" }}
        alignSelf={"center"}
      >
        <Grid item xs={12} sm={6} md={5}>
          <SectionCard
            title="Stakeholders"
            content="We are always open to new partnerships and collaborations. Please reach out to us here!"
            link="https://www.google.com"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SectionCard
            title="Knowledge Partners"
            content="We are always open to new partnerships and collaborations. Please reach out to us here!"
            link="https://www.google.com"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SectionCard
            title="Guide"
            content="We are always open to new partnerships and collaborations. Please reach out to us here!"
            link="https://www.google.com"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default function Partners() {
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
    gap: theme.spacing(5),
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
                Our Partners
              </p>
              <p
                style={{
                  fontSize: "0.7em",
                  opacity: ".7",
                  letterSpacing: "0.5px",
                }}
              >
                Our valued Companions!
              </p>
              <p
                style={{
                  fontSize: "0.7em",
                  opacity: ".7",
                  fontWeight: "normal",

                  marginTop: "3rem",
                }}
              >
                We are always open to new partnerships and collaborations.
                Please reach out to us{" "}
                <span
                  style={{
                    fontSize: "1em",
                    opacity: ".8",
                    fontWeight: "bold",
                    marginTop: "0.5rem",
                  }}
                >
                  <a
                    href="mailto: swaroopaditya545@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    here!
                  </a>
                </span>
              </p>
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            height: "80vh",
            overflowY: "scroll",
            width: "100vw",

            // border: 2,
            marginTop: { lg: "100px", md: "100px", sm: "30px", xs: "30px" },
          }}
        >
          <Caro position={"Stakeholders"} />
          <Caro position={"Knowledge Partners"} />
          <Caro position={"Guide"} />
        </Box>
      </CustomBox>
      <Footer />
    </Box>
  );
}
