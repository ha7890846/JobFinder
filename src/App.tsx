import { createTheme, MantineProvider } from "@mantine/core";
import HomePage from "./Pages/HomePage";

// core styles are required for all packages
import "@mantine/core/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderCompo from "./Header/HeaderCompo";
import "@mantine/carousel/styles.css";
import Footer from "./Footer/Footer";
import FindJobsPages from "./Pages/FindJobsPages";
import FindTalentPages from "./Pages/FindTalentPages";
import TalentProfilePage from "./Pages/TalentProfilePage";

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';

function App() {
  const theme = createTheme({
    
    fontFamily: "poppins, sans-serif",
  });
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
        <HeaderCompo />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-jobs" element={<FindJobsPages />} />
          <Route path="/find-talent" element={<FindTalentPages />} />
          <Route path="/talent-profile" element={<TalentProfilePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MantineProvider>
  );
}
export default App;