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

const SectionCard = ({ text }) => {
  const { mode } = useContext(globalState);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#ededed74",
          padding: "30px",
          width: "350px",
          height: "300px",
          borderRadius: "10px",
          border: "0.5px solid #b1aeae4b",
          overflowY: "scroll",
          boxShadow: "0px 0px 5px 0px #168c951a",
          opacity: "0.6",
        }}
      >
        <Typography
          sx={{
            fontFamily: "montserrat",
            fontSize: "17px",
            flexWrap: "wrap",
          }}
        >
          {text}
        </Typography>
      </Box>
    </>
  );
};

export default SectionCard;
