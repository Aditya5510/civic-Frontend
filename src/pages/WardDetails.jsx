import { Box, Skeleton, Typography, useTheme } from "@mui/material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import { useContext, useEffect, useState } from "react";
import { globalState } from "../App";
import color from "../styles/colors";
import { useSearchParams } from "react-router-dom";

import axios from "../axios";
import ReportDialogue from "../Components/ReportDialogue";

function Link(props) {
  const { mode } = useContext(globalState);

  return (
    <a
      style={{
        color:
          mode == "light"
            ? color.light.secondarycardtext
            : color.dark.secondarycardtext,

        textUnderlineOffset: "5px",
        lineHeight: "1.8em",
      }}
      {...props}
    />
  );
}

function CouncellorCard({ name, phone, address, party }) {
  const { mode } = useContext(globalState);

  const borderString =
    mode === "light"
      ? "2px solid rgba(30, 30, 30, 0.13)"
      : "2px solid rgba(150, 150, 150, 0.13)";

  return (
    <Box
      sx={{
        border: borderString,
        borderRadius: "5px",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        position: "relative",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "1.2rem",
            sm: "1.5rem",
          },
          fontWeight: "bold",
          marginTop: "1.5em",
        }}
      >
        {name}
      </Typography>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <PlaceIcon />
        <Link href={`https://maps.google.com/?q=${address}`}>{address}</Link>
      </p>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <CallIcon />
        <Link href={`tel:${phone}`}>{phone}</Link>
      </p>

      <Box
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            border: borderString,
            borderRadius: "3px",
            fontWeight: "bold",
            marginRight: "10px",
            padding: {
              xs: "4px 8px",
              sm: "8px 16px",
            },
            fontSize: {
              xs: "0.7em",
              sm: "1em",
            },
          }}
        >
          {party}
        </Box>
        {/* <button>Report</button> */}

        <ReportDialogue />
      </Box>
    </Box>
  );
}

export default function WardDetails() {
  const theme = useTheme();
  const { mode } = useContext(globalState);

  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    // two sets either {ward_no, city} or {lat, lon}

    setLoading(true);

    if (searchParams.has("ward_no") && searchParams.has("city")) {
      const ward_no = searchParams.get("ward_no");
      const city = searchParams.get("city");

      const res = await axios.get(`/api/fetchWard`, {
        params: { ward_no, city },
      });

      setData(res.data[0]);
    } else {
      const lat = searchParams.get("lat");
      const lon = searchParams.get("lon");

      const res = await axios.get("/api/fetchWardWithLocation", {
        params: { lat, lon },
      });

      setData(res.data[0]);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor:
            mode === "light" ? color.light.background : color.dark.background,
          color:
            mode === "light"
              ? color.light.primarycolor
              : color.dark.primarycolor,
        }}
      >
        <Box
          component={"section"}
          sx={{
            marginTop: theme.spacing(8),
            padding: theme.spacing(6),
            boxShadow: `0 7px 15px -10px ${
              mode === "dark"
                ? "rgba(200, 200, 200, 0.8)"
                : "rgba(30, 30, 30, 0.8)"
            }`,
          }}
        >
          <h1 style={{ fontSize: "3em", display: "flex", gap: "10px" }}>
            <Skeleton
              sx={{
                backgroundColor:
                  mode === "dark" ? "rgba(200, 130, 140, 0.3)" : "",
              }}
              variant="rounded"
              width={"100%"}
              height={100}
            />
          </h1>
        </Box>

        <Box
          sx={{
            padding: theme.spacing(9),
            display: "flex",
            gap: theme.spacing(2),
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontSize: "2em", marginBottom: "2rem" }}>Councellors</h1>

          <Skeleton
            sx={{
              backgroundColor:
                mode === "dark" ? "rgba(200, 130, 140, 0.3)" : "",
            }}
            variant="rounded"
            height={260}
          />
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor:
          mode === "light" ? color.light.background : color.dark.background,
        color:
          mode === "light" ? color.light.primarycolor : color.dark.primarycolor,
      }}
    >
      <Box
        component={"section"}
        sx={{
          marginTop: theme.spacing(8),
          padding: {
            xs: theme.spacing(6, 2),
            md: theme.spacing(6, 4),
            lg: theme.spacing(6),
          },
          boxShadow: `0 7px 15px -10px ${
            mode === "dark"
              ? "rgba(200, 200, 200, 0.8)"
              : "rgba(30, 30, 30, 0.8)"
          }`,
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: {
              xs: "2em",
              md: "2.5em",
              lg: "3em",
            },
            display: "flex",
            gap: "10px",
            fontWeight: "bold",
            alignItems: "center",
          }}
        >
          {data?.ward_name}
          <span style={{ opacity: "0.7", fontSize: "0.7em" }}>
            # {data?.ward_no}
          </span>
        </Typography>
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <LocationCityIcon /> {data?.city}
        </h2>
      </Box>

      <Box
        sx={{
          padding: {
            xs: theme.spacing(7, 2),
            md: theme.spacing(7, 5),
          },
          display: "flex",
          gap: theme.spacing(2),
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "2em", marginBottom: "2rem" }}>Councellors</h1>

        <CouncellorCard
          name={data?.name}
          address={data?.address}
          phone={data?.phone}
          party={data?.party}
        />
      </Box>
    </Box>
  );
}
