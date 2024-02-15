import * as React from "react";

import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
// import DialogTitle from "@mui/material/DialogTitle";
import { TextField, ThemeProvider } from "@mui/material";
// import ReportIcon from "@mui/icons-material/Report";
import { IconButton, Typography } from "@mui/material";
import { Tooltip } from "@mui/material";
import color from "../styles/colors";
import { Box } from "@mui/material";
import CustomButton from "../utils/CustomButton";

import { globalState } from "../App";
import { Slide } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ReportDialogue() {
  const [open, setOpen] = React.useState(false);
  const { mode } = React.useContext(globalState);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const newstyle = {
    backgroundColor:
      mode === "light" ? color.light.secondarybtn : color.dark.primarybtn,
    borderRadius: "5px",
    marginBottom: "20px",
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    console.log(formdata);

    setOpen(false);
  };

  return (
    <div>
      <Tooltip title={"REPORT DATA"}>
        <IconButton onClick={handleClickOpen}>
          <FlagIcon
            sx={{
              height: "35px",
              width: "35px",
              color:
                mode === "light"
                  ? color.light.primarybtn
                  : color.dark.primarybtntext,
              cursor: "pointer",
            }}
          />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // borderRadius: "10px",
        }}
      >
        <DialogContent
          sx={{
            backgroundColor:
              mode === "light"
                ? color.light.background
                : color.dark.secondarybackground,

            height: { lg: "80vh", md: "88vh", sm: "88vh", xs: "100vh" },
            width: { lg: "30vw", md: "85vw", sm: "80vw", xs: "90vw" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            borderRadius: "10px",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              left: "5px",
              top: "5px",
              fontSize: "25px",
              color: mode === "light" ? "black" : "white",
              cursor: "pointer",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
              height: { lg: "70vh", md: "80vh", sm: "83vh", xs: "70vh" },
              borderRadius: "40px",
              backgroundColor: "transparent",
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 85%, 81% 81%, 97% 100%, 50% 80%, 0 80%)",
              padding: "40px",
              // border: "1px solid black",
              boxShadow: "-moz-initial",
            }}
          >
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "25px",
                color: mode === "light" ? "black" : "white",
              }}
            >
              Any issues with the data? Help us update it.
            </Typography>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "black",
                marginBottom: "20px",
              }}
            />
            <TextField
              label="Proposed correction"
              multiline
              maxRows={2}
              variant="standard"
              fullWidth
              sx={newstyle}
            />
            <TextField
              label="Comments"
              multiline
              maxRows={2}
              variant="standard"
              fullWidth
              sx={newstyle}
            />

            <CustomButton
              type="submit"
              buttonText={"SUBMIT"}
              backgroundColor={
                mode === "light"
                  ? color.light.primarybtn
                  : color.dark.primarybtn
              }
              color={
                mode === "light"
                  ? color.light.primarybtntext
                  : color.dark.primarybtntext
              }
            />
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
