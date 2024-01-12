import { useContext, useState, useRef, useMemo, useEffect } from "react";
import { globalState } from "../App";

import { GeocodingControl } from "@maptiler/geocoding-control/leaflet";
import * as maptilersdk from "@maptiler/sdk";

import { Box, Typography } from "@mui/material";

import colors from "../styles/colors";
import {
  MapContainer,
  TileLayer,
  useMapEvent,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import { useTheme } from "@emotion/react";
import CustomButton from "../utils/CustomButton";
import { useTranslation } from "react-i18next";

import { CenterFocusStrong, MyLocation } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function LocationPickerMarker({
  latitude,
  longitude,
  onLocationChange,
  onAttachMap,
  onAddressChange,
}) {
  const map = useMapEvent("click", async (ev) => {
    console.log("map clicked");
    const { lat, lng } = ev.latlng;
    console.log(ev);
    if (onLocationChange) {
      onLocationChange(lat, lng);

      maptilersdk.config.apiKey = "ieYeaDrozDxpYiRS1PXW";
      const res = await maptilersdk.geocoding.reverse([lng, lat]);

      onAddressChange(res.features[0].text);
      console.log(res);
    }
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

const POSITION_CLASSES = {
  bottomleft: "leaflet-bottom leaflet-left",
  bottomright: "leaflet-bottom leaflet-right",
  topleft: "leaflet-top leaflet-left",
  topright: "leaflet-top leaflet-right",
};

function MapIconButton(props) {
  const { style, ...others } = props;

  return (
    <Box
      component={"button"}
      sx={{
        backgroundColor: "white",
        borderRadius: "1000px",
        outline: "none",
        color: "black",
        border: "none",
        width: "50px",
        height: "50px",
        transition: "all 0.2s ease-out",
        cursor: "pointer",
        border: "2px solid rgba(30, 30, 30, 0.6)",

        "&:hover": {
          backgroundColor: "rgb(220, 220, 220)",
        },

        ...style,
      }}
      {...others}
    />
  );
}

function MapControls({ onRecenter, onUserLocation, onAddressChange }) {
  const controlsRef = useRef();
  const map = useMap();

  useEffect(() => {
    const L = window.leaflet;

    if (controlsRef.current) {
      L.DomEvent.disableClickPropagation(controlsRef.current);
    }

    const key = "ieYeaDrozDxpYiRS1PXW";
    console.log(L.control.maptilerGeocoding);

    const geocodingControl = new GeocodingControl({
      apiKey: key,
    });
    geocodingControl.addTo(map);

    return () => geocodingControl.remove();
  }, []);

  const positionClass = POSITION_CLASSES.bottomright;
  return (
    <div className={positionClass}>
      <div
        className="leaflet-control leaflet-bar"
        style={{
          marginBottom: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: "none",
        }}
        ref={controlsRef}
      >
        <MapIconButton onClick={onUserLocation}>
          <MyLocation />
        </MapIconButton>

        <MapIconButton>
          <CenterFocusStrong onClick={onRecenter} />
        </MapIconButton>
      </div>
    </div>
  );
}

export default function PinpointLocation() {
  const { mode } = useContext(globalState);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [address, setAddress] = useState("");

  const theme = useTheme();
  const navigate = useNavigate();

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

  const handleRecenter = () => {
    if (mapRef.current && latitude && longitude) {
      mapRef.current.flyTo(
        { lat: latitude, lng: longitude },
        mapRef.current.getZoom()
      );
    }
  };

  const handleAddressChange = (ad) => {
    const { lat, lon, address_line1, address_line2 } = ad;

    setAddress(address_line1);
    setLatitude(lat);
    setLongitude(lon);

    handleRecenter();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(latitude, longitude);
    if (!latitude || !longitude) return;
    navigate(`/WardDetails?lat=${latitude}&lon=${longitude}`);
  };

  const mapRef = useRef(null);

  const borderString =
    mode === "light"
      ? "2px solid rgba(30, 30, 30, 0.7)"
      : "2px solid rgba(150, 150, 150, 0.7)";
  return (
    <Box
      sx={{
        marginTop: "66px",
        height: "calc(100vh - 66px)",
        backgroundColor: colors[mode].background,
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <div
        style={{
          flex: "1",
        }}
      >
        <MapContainer
          center={{ lat: 13.0039, lng: 77.592 }}
          zoom={15}
          scrollWheelZoom={true}
          style={{
            width: "100%",
            height: "100%",
            border: borderString,
            position: "relative",
            padding: "2.5rem 2rem 2.5rem 2rem",
            border:
              mode === "light"
                ? "2px solid rgba(30, 30, 30, 0.7)"
                : "2px solid rgba(150, 150, 150, 0.7)",

            borderRadius: "10px",
          }}
        >
          <MapControls
            onRecenter={handleRecenter}
            onUserLocation={handleUserLocation}
            onAddressChange={handleAddressChange}
          />

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <LocationPickerMarker
            latitude={latitude}
            longitude={longitude}
            onLocationChange={handleLocationChange}
            onAttachMap={handleAttachMap}
            onAddressChange={(add) => setAddress(add)}
          />
        </MapContainer>
      </div>

      <Box
        sx={{
          padding: theme.spacing(5),
          color: colors[mode].primarycolor,

          maxWidth: {
            md: "400px",
          },
        }}
      >
        <Box
          sx={{
            padding: "1.5rem 1rem 1.5rem 1rem",
            border:
              mode === "light"
                ? "2px solid rgba(30, 30, 30, 0.13)"
                : "2px solid rgba(150, 150, 150, 0.13)",

            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              marginBottom: {
                sx: theme.spacing(1),
                md: theme.spacing(3),
              },
            }}
          >
            Address
          </Typography>
          <Typography>
            {address === "" ? (
              <span style={{ opacity: "0.7" }}>Pick a location!</span>
            ) : (
              address
            )}
          </Typography>

          <CustomButton
            backgroundColor={
              mode === "light"
                ? colors.light.primarybtn
                : colors.dark.primarybtntext
            }
            color={mode === "light" ? "black" : colors.dark.primarybtn}
            buttonText="Confirm Location"
            form={true}
            sx={{
              marginTop: {
                xs: "1rem",
                md: "3rem",
              },
              width: "auto",
            }}
            onClick={handleSubmit}
            disabled={!latitude}
          />
        </Box>
      </Box>
    </Box>
  );
}
