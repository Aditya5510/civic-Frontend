// //hero section for the home page
import { Box, Button, styled, Typography } from "@mui/material";
// import Link from "next/link";
import { Container } from "@mui/system";
import React from "react";
import { globalState } from "../App";
import CustomButton from "../utils/CustomButton";
import AppleIcon from "@mui/icons-material/Apple";
// import AndroidIcon from '@mui/icons-material/Android';
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FormHero from "./FormHero";
import { useContext } from "react";
import color from "../styles/colors";
import AndroidIcon from "@mui/icons-material/Android";

const Hero = () => {
  const { mode, setMode } = useContext(globalState);

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(7),

    backdropFilter: "blur( 3px )",
    webkitFbackdropFilter: " blur( 3px )",
    borderRadius: "10px",

    padding: "5px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      alignItems: "center",
      textAlign: "center",

      backdropFilter: "blur( 3px )",
      webkitFbackdropFilter: " blur( 3px )",
      borderRadius: "10px",
    },
  }));

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "56px",
    fontWeight: "500",
    fontFamily: "Montserrat",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      margin: theme.spacing(2, 0, 2, 0),
      fontFamily: "Montserrat",
    },
  }));
  const { t } = useTranslation();

  return (
    <Box
      className="Hero-Container"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor:
          mode === "light" ? color.light.background : color.dark.background,
      }}
    >
      <Container>
        <CustomBox>
          <Box
            sx={{
              flex: "1.5",
              mt: { lg: "3rem", md: "3.2rem", sm: "0px", xs: "0px" },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "16px",
                fontFamily: "Montserrat",
                color:
                  mode === "light"
                    ? color.light.primarycolor
                    : color.dark.primarycolor,
                fontWeight: "500",
                mt: 5,
                mb: 4,
              }}
            >
              {t("welcome")}
            </Typography>
            <Title
              variant="h1"
              sx={{
                color:
                  mode === "light"
                    ? color.light.primarycolor
                    : color.dark.primarycolor,
              }}
            >
              {t("title")}
            </Title>

            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                fontFamily: "inherit",
                color:
                  mode === "light"
                    ? color.light.primarycolor
                    : color.dark.primarycolor,
                my: 4,
              }}
            >
              {t("subtitle")}
            </Typography>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <CustomButton
                backgroundColor={
                  mode === "dark"
                    ? color.dark.primarybtn
                    : color.light.primarybtn
                }
                color={
                  mode === "dark"
                    ? color.dark.primarybtntext
                    : color.light.primarybtntext
                }
                buttonText={t("android")}
                heroBtn={true}
                startIcon={<AndroidIcon></AndroidIcon>}
              />
              <CustomButton
                backgroundColor={
                  mode === "dark"
                    ? color.dark.primarybtntext
                    : color.light.primarybtntext
                }
                color={
                  mode === "dark"
                    ? color.dark.primarybtn
                    : color.light.primarybtn
                }
                buttonText={t("ios")}
                heroBtn={true}
                startIcon={<AppleIcon></AppleIcon>}
              />
            </Box>
          </Box>

          <Box
            sx={{
              flex: "1.25",
              display: "flex",
              justifyContent: "center",
              backdropFilter: "blur( 3px )",
              webkitFbackdropFilter: " blur( 3px )",
              borderRadius: "10px",
              order: { xs: -1, md: 0 },
              maxWidth: { lg: "500px", md: "500px", sm: "500px", xs: "350px" },
              mt: { lg: "0.2rem", md: "20px", sm: "0px", xs: "0px" },
            }}
            data-aos="fade-up"
          >
            <FormHero />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
