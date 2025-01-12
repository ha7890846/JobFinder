import React from "react";
import "./App.css";
import { createTheme, MantineProvider } from "@mantine/core";
import HomePage from "./Pages/HomePage";

// core styles are required for all packages
import "@mantine/core/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@mantine/carousel/styles.css";
import Footer from "./Footer/Footer";
import HeaderCompo from "./Header/HeaderCompo";
import FindJobsPages from "./Pages/FindJobsPages";
import FindTalentPages from "./Pages/FindTalentPages";

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';

function App() {
  const theme = createTheme({
    colors: {
      "bright-sun": [
        "#fffbeb",
        "#fff3c6",
        "#ffe588",
        "#ffd149",
        "#ffbd20",
        "#f99b07",
        "#dd7302",
        "#b75006",
        "#943c0c",
        "#7a330d",
        "#461902",
      ],
      "mine-shaft": [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
    },
    fontFamily:"poppins, sans-serif"
  });
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
        <HeaderCompo />
        <Routes>
          <Route path="/find-jobs" element={<FindJobsPages />} />
          <Route path="/find-talent" element={<FindTalentPages />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MantineProvider>
  );
}
export default App;
