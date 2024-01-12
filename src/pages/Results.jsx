import { useState, useEffect } from "react";
import { useLocation } from "react-router";

import { Box, Button, TextField, Typography } from "@mui/material";
// import styled from "styled-components";
// import Ntable from "../Components/Ntable";
// import { Container } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";
import axiosInstance from "../axios";
import BasicCarousel from "../utils/BasicCarousel";

import { useContext } from "react";
import { globalState } from "../App";
import color from "../styles/colors";
import CustomButton from "../utils/CustomButton";
import Header from "../Components/Header";

const Results = () => {
  const { mode } = useContext(globalState);

  // find the query params using react-router hooks
  const { search } = useLocation();

  // TODO: probably use react-query to fetch data later :)
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = new URLSearchParams(search);

    const lat = query.get("lat");
    const lon = query.get("lon");
    setLoading(true);

    axiosInstance.get(`/ward-prop?lat=${lat}&lon=${lon}`).then(
      (res) => {
        setError(null);
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );
  }, [search]);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Header/>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: {
            lg: "row",
          },
          gap: "0rem",
          flexWrap: "wrap",
          width: "100%",

          height: { lg: "100vh", md: "100vh", sm: "100vh", xs: "100vh" },

          backgroundColor:
            mode === "light" ? color.light.background : color.dark.background,
        }}
      >
        <Box
          sx={{
            backgroundColor:
              mode === "light"
                ? color.light.secondarybackground
                : color.dark.secondarybackground,

            width: { lg: "50vw", md: "60vw", sm: "80vw", xs: "80vw" },
            height: { lg: "80vh", md: "60vh", sm: "60vh", xs: "70vh" },
            padding: "6rem 0 0 0",
            padding: {
              lg: "2rem 1rem 1rem 1rem",
              md: "2rem 1rem 1rem 1rem",
              sm: "2rem 1rem 1rem 1rem",
              xs: "2rem 1rem 1rem 1rem",
            },
            marginTop: { lg: "10px", md: "80px", sm: "90px", xs: "80px" },
            borderRadius: {
              lg: "2rem 0rem 0rem 2rem",
              md: "2rem 2rem 2rem 2rem",
              sm: "2rem 2rem 2rem 2rem",
              xs: "2rem 2rem 2rem 2rem",
            },
            border: mode == "light" ? "1px solid black" : "1px solid white",
          }}
        >
          <BasicCarousel />
        </Box>

        <Box
          sx={{
            backgroundColor:
              mode === "light"
                ? color.light.secondarybackground
                : color.dark.secondarybackground,

            width: { lg: "30vw", md: "90vw", sm: "90vw", xs: "100vw" },
            height: { lg: "80vh", md: "20vh", sm: "15vh", xs: "15vh" },
            padding: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: { lg: "6rem", md: "1rem", sm: "1rem", xs: "1rem" },
            borderRadius: {
              lg: "0rem 2rem 2rem 0rem",
              md: "2rem 2rem 0rem 0rem",
              sm: "2rem 2rem 0rem 0rem",
              xs: "2rem 2rem 0rem 0rem",
            },
            border: mode == "light" ? "1px solid black" : "1px solid white",
            marginTop: { lg: "10px", md: "80px", sm: "90px", xs: "80px" },
          }}
        >
          <Box sx={{ minWidth: 270 }}>
            <FormControl fullWidth variant="standard">
              <InputLabel id="demo-simple-select-label" fullWidth>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{
                    color:
                      mode === "light"
                        ? color.light.primarycolor
                        : color.dark.primarycolor,
                  }}
                >
                  {" "}
                  Your Concern?
                </Typography>
              </InputLabel>
              <Select value={age} label="Age" onChange={handleChange}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>ELECTRICITY</MenuItem>
                <MenuItem value={20}>WATER</MenuItem>
                <MenuItem value={30}>SEWAGE</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <CustomButton
            buttonText={"SEARCH"}
            backgroundColor={
              mode === "light"
                ? color.light.primarybtn
                : color.dark.primarybtntext
            }
            heroBtn={true}
            color={
              mode === "light"
                ? color.light.primarybtntext
                : color.dark.primarybtn
            }
          />
        </Box>
      </Box>
    </>
  );
};

export default Results;
