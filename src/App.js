import React from "react";
import Home from "./pages/Home";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Results from "./pages/Results";
import Partners from "./pages/Partners";
import ContactUs from "./pages/ContactUs";
import { createContext } from 'react';
import { useState } from 'react';
import WardDetails from "./pages/WardDetails";
import { createTheme, ThemeProvider } from "@mui/material";
import About from "./pages/About";
import PinpointLocation from "./pages/PinpointLocation";



export const globalState = createContext();

const theme = createTheme({
  palette: {
    primary: { main: "#000000" },
    secondary: { main: "#000000" },
  },

  typography: {
    fontFamily: `"Montserrat", Arial, Helvetica, sans-serif`,

    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 800,
  },
});


function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") ? localStorage.getItem("mode") : "light");

  // console.log(mode)
  return (
    <>
      <ThemeProvider theme={theme}>
        <globalState.Provider value={{ mode: mode, setMode: setMode }}>

          <BrowserRouter>
            <Header />
            {/* {setMode("light")} */}
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="Results" element={<Results />} /> */}
              <Route path="partners" element={<Partners />} />
              <Route path="Contactus" element={<ContactUs />} />
              <Route path="WardDetails" element={<WardDetails />} />
              <Route path="About" element={<About />} />
              <Route path="PinpointLocation" element={<PinpointLocation />} />
            </Routes>

          </BrowserRouter>
        </globalState.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
