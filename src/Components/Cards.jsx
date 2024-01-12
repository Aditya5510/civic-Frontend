import React from "react";
import { Avatar, Typography } from "@mui/material";
import { useContext } from "react";
import { globalState } from "../App";
import { Box } from "@mui/material";
import color from "../styles/colors";
import admin from "../Media/admin.png";
import ReportDialogue from "./ReportDialogue";
import DescriptionIcon from "@mui/icons-material/Description";

const img = admin;

const Cards = (props) => {
  const { mode } = useContext(globalState);
  return (
    <>
      <Box
        sx={{
          backgroundColor: mode == "dark" ? "#483C45" : "transparent",
          padding: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          border: "0.5px solid black",
          gap: "10px",
          width: "350px",
        }}
      >
        <Box
          component={Avatar}
          src={img}
          sx={{
            width: "120px",
            height: "120px",
            backgroundColor: "#EFE1D1",
            padding: "10px",
          }}
        />

        <Box>
          <Typography
            sx={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
          >
            <p
              style={{
                color: mode == "dark" ? "#888785" : "#412F1A",
                opacity: "0.8",
              }}
            >
              sdfsdfsfhello
            </p>
            <p
              style={{
                color: mode == "dark" ? "#888785" : "#412F1A",
                opacity: "0.8",
              }}
            >
              {" "}
              sdfsdfsdfhello
            </p>
            <p
              style={{
                color: mode == "dark" ? "#EFE1D1" : "#000000",
                opacity: "0.6",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <DescriptionIcon />
              sdfsdfsdfsdfsdhello
            </p>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Cards;
