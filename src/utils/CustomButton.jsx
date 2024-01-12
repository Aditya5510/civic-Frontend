import { Button, useTheme } from "@mui/material";
import React from "react";

const CustomButton = (props) => {
  const {
    backgroundColor,
    color,
    buttonText,
    heroBtn,
    guideBtn,
    getStartedBtn,
    form,
    startIcon,
    endIcon,
    fullwidth,
    dbtn,
    sx,
    ...btnProps
  } = props;

  const theme = useTheme();

  const styles = {
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: form ? "4 px" : "7px",
    display: "block",
    border: "2px solid transparent",
    width: (form && "100%") || (dbtn && "90%") || (fullwidth && "100%"),
    marginTop: form && theme.spacing(1),
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("md")]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (heroBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
    ...sx,
  };

  return (
    <Button sx={styles} {...btnProps}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {startIcon ? startIcon : null}
        {buttonText}
        {endIcon ? endIcon : null}
      </div>
    </Button>
  );
};

export default CustomButton;
