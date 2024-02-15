import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import doc from "../Media/doc.png";
import test from "../Media/test.png";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { globalState } from "../App";
import color from "../styles/colors";
import { useTranslation } from "react-i18next";
import SectionCard from "./SectionCard";

const WhatweDo = () => {
  const { mode } = useContext(globalState);

  // mt-0 h-20 rounded flex justify-around items-center gap-3 px-1 pt-2 pd-0 md:h-auto md:flex-col
  // md:py-0 gap-[3rem] w-[90%]
  const CustomContainer = styled(Box)(({ theme }) => ({
    marginTop: "0px",
    height: "400px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    // gap: { lg: "8rem", md: "4rem", sm: "1rem", xs: "1rem" },
    gap: "2rem",
    padding: theme.spacing(2, 20, 2, 20),
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(5, 1, 0, 20),
      width: "90%",
      gap: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      flexDirection: "column-reverse",
      alignItems: "center",
      padding: theme.spacing(5, 0, 0, 5),
      width: "90%",
      gap: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      flexDirection: "column-reverse",
      alignItems: "center",
      padding: theme.spacing(2, 0.3, 0, 2),
      width: "90%",
      gap: "1rem",
    },
  }));
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const { t } = useTranslation();
  return (
    <>
      <Box
        sx={{
          backgroundColor:
            mode === "light"
              ? color.light.background
              : color.dark.backgroundSection,
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: "10px",
            backgroundColor:
              mode === "light"
                ? color.light.background
                : color.dark.backgroundSection,
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "5px",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <h1
              style={{
                fontSize: "2em",
                marginBottom: "0.5rem",
                color:
                  mode === "light"
                    ? color.light.primarycolor
                    : color.dark.primarycolor,
              }}
            >
              What We Do
            </h1>
          </Container>
          <Container
            sx={{
              display: "flex",
              gap: "0.5rem",
              justifyContent: {
                lg: "flex-start",
                md: "center",
                sm: "center",
                xs: "center",
              },
              flexWrap: "wrap",
              alignItems: "center",
              color:
                mode === "light"
                  ? color.light.primarycolor
                  : color.dark.primarycolor,
            }}
          >
            <div data-aos="flip-left">
              <SectionCard text={t("whatwedoHead4")} />
            </div>
            <SectionCard text={t("whatwedoHead3")} />
            <div data-aos="flip-right">
              <SectionCard text={t("whatwedoHead3")} />
            </div>
          </Container>
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            padding: "10px",
            marginTop: "30px",
            backgroundColor:
              mode === "light"
                ? color.light.background
                : color.dark.backgroundSection,
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "5px",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <h1
              style={{
                fontSize: "2em",
                marginBottom: "0.5rem",
                color:
                  mode === "light"
                    ? color.light.primarycolor
                    : color.dark.primarycolor,
              }}
            >
              Our Mission
            </h1>
          </Container>
          <Container
            sx={{
              display: "flex",
              gap: "0.5rem",
              justifyContent: {
                lg: "flex-start",
                md: "center",
                sm: "center",
                xs: "center",
              },
              flexWrap: "wrap",
              alignItems: "center",
              marginBottom: "2rem",
              color:
                mode === "light"
                  ? color.light.primarycolor
                  : color.dark.primarycolor,
            }}
          >
            <div data-aos="flip-left">
              <SectionCard text={t("whatwedoHead4")} />
            </div>
            <SectionCard text={t("whatwedoHead3")} />
            <div data-aos="flip-right">
              <SectionCard text={t("whatwedoHead3")} />
            </div>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default WhatweDo;
