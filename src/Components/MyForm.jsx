// alter the maps size and position here

import * as React from "react";
import { useNavigate } from "react-router";

import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import MyLocation from "@mui/icons-material/MyLocation";
import useMediaQuery from "@mui/material/useMediaQuery";
// import { globalState } from "../App";
import {
  MapContainer,
  TileLayer,
  useMapEvent,
  Marker,
  Tooltip,
} from "react-leaflet";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import color from "../styles/colors";
import { useContext } from "react";
import { globalState } from "../App";
import CustomButton from "../utils/CustomButton";
import { Link } from "react-router-dom";

function LocationPickerMarker({
  latitude,
  longitude,
  onLocationChange,
  onAttachMap,
}) {
  const map = useMapEvent("click", (ev) => {
    const { lat, lng } = ev.latlng;
    if (onLocationChange) onLocationChange(lat, lng);
  });

  if (map && onAttachMap) onAttachMap(map);

  return (
    <Marker position={[+latitude, +longitude]}>
      <Tooltip direction="top">
        Latitude: {latitude}
        <br />
        Longitude: {longitude}
      </Tooltip>
    </Marker>
  );
}

const theme = createTheme({
  palette: {
    primary: { main: "#0c0c0c" },
    secondary: { main: "#000000" },
  },
});
function MyForm() {
  const navigate = useNavigate();

  const [latitude, setLatitude] = React.useState(null);
  const [longitude, setLongitude] = React.useState(null);

  const mapRef = React.useRef(null);

  const isMobileView = useMediaQuery(theme.breakpoints.up("md"));

  const handleUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setLatitude(lat);
        setLongitude(lng);

        if (mapRef.current) {
          mapRef.current.flyTo({ lat, lng }, mapRef.current.getZoom());
        }
      });
    }
  };

  const handleLocationChange = (lat, lng) => {
    setLatitude(lat);
    setLongitude(lng);
  };

  const handleAttachMap = (map) => {
    mapRef.current = map;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(latitude, longitude);
    if (!latitude || !longitude) return;
    navigate(`/WardDetails?lat=${latitude}&lon=${longitude}`);
  };

  const handleRecenter = () => {
    if (mapRef.current && latitude && longitude) {
      mapRef.current.flyTo(
        { lat: latitude, lng: longitude },
        mapRef.current.getZoom()
      );
    }
  };

  const { mode } = useContext(globalState);

  return (
    <ThemeProvider theme={theme}>
      <Stack direction={"column"} sx={{ margin: "auto" }}>
        <Stack
          direction={!isMobileView ? "column" : "row"}
          component="main"
          maxWidth="xs"
          sx={{ margin: "-10px", gap: !isMobileView ? "0" : "0rem" }}
        >
          <CssBaseline />
          <Box sx={{ width: "1400px", maxWidth: "93vw" }}>
            <MapContainer
              center={{ lat: 13.0039, lng: 77.592 }}
              zoom={15}
              scrollWheelZoom={true}
              style={{
                height: "100vh",
                maxHeight: "70vh",
                width: "100%",
                border:
                  mode === "light" ? "1px solid black" : "1px solid white",
                borderRadius: "15px",
                marginTop: "0.9rem",
                position: "relative",
              }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <LocationPickerMarker
                latitude={latitude}
                longitude={longitude}
                onLocationChange={handleLocationChange}
                onAttachMap={handleAttachMap}
              />
            </MapContainer>

            <Stack
              direction={"row"}
              sx={{
                mb: "10px",
                width: { sm: "100%", md: "100%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                startIcon={<CenterFocusStrongIcon />}
                fullWidth
                type="button"
                onClick={handleRecenter}
                variant="outlined"
                sx={{
                  mt: 2,
                  width: "435px",
                  backgroundColor:
                    mode === "dark"
                      ? color.dark.primarybtn
                      : color.light.primarybtn,
                  color:
                    mode === "dark"
                      ? color.dark.primarybtntext
                      : color.light.primarybtntext,
                }}
              >
                Recenter
              </Button>

              <Button
                startIcon={<MyLocation />}
                type="button"
                onClick={handleUserLocation}
                variant="outlined"
                sx={{
                  mt: 2,
                  width: "435px",
                  backgroundColor:
                    mode === "dark"
                      ? color.dark.primarybtntext
                      : color.light.secondarybtn,
                  color: mode === "dark" ? color.dark.primarybtn : "black",
                }}
              >
                current
              </Button>
            </Stack>
          </Box>

          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="Address"
                      fullWidth
                      label="Full address"
                      autoFocus
                      multiline
                      variant="filled"
                      rows={2}
                      draggable
                      helperText="Please enter a valid Address otherwise leave it blank"
                      sx={{
                        backgroundColor:
                          mode === "light"
                            ? color.light.navbackground
                            : color.dark.primarybtn,
                        borderRadius: "5px",
                      }}
                    />
                  </Grid>
                </Grid>
                {/* <Link to="/WardDetails" style={{ textDecoration: "none" }}> */}
                <Box onClick={handleSubmit}>
                  <CustomButton
                    type="submit"
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
                    buttonText="CONFIRM"
                    form={true}
                  />
                </Box>
                {/* </Link> */}
              </Box>
            </Box>
          </Container>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default MyForm;
