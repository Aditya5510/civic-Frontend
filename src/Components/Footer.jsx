//Not yet completed, so nothing to do  here also not in use but we are building this

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
// import GlobalStyles from "@mui/material";
import { globalState } from "../App";
import { useContext } from "react";
import color from "../styles/colors";
import { light } from "@mui/material/styles/createPalette";

export default function Footer() {
  const { mode } = useContext(globalState);
  return (
    <Box
      component="footer"
      sx={{
        paddingTop: "6rem",
        backgroundColor: mode?.dark
          ? color.dark.background
          : color.light.secondarybackground,
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ fontFamily: "Montserrat" }}
            >
              About Us
            </Typography>

            <Typography variant="body2" color="text.secondary">
              A pioneering mobile app democratizing civic data access,
              empowering citizens to connect with elected reps and municipal
              officials for swift resolution of civic issues like road repairs
              and sanitation problems. Transforming public engagement for better
              communities.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ fontFamily: "Montserrat" }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "0.5rem" }}
            >
              Contribute Data: Will be directed to the Contribute Data page
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontFamily: "Montserrat" }}
            >
              Navigate
            </Typography>
            <Link
              to="/Contactus"
              variant="body2"
              style={{
                cursor: "pointer",
                color: "#7f7d7d",
                marginBottom: "0.5rem",
              }}
            >
              About
            </Link>
            <Link
              to="/Contactus"
              variant="body2"
              style={{
                cursor: "pointer",
                color: "#7f7d7d",
                marginBottom: "0.5rem",
              }}
            >
              Partners
            </Link>
            <Link
              to="/Contactus"
              variant="body2"
              style={{
                cursor: "pointer",
                color: "#7f7d7d",
              }}
            >
              Contact Us
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
