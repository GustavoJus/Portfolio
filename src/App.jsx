const resume = `${import.meta.env.BASE_URL}Gustavo_Juscamayta_Resume.pdf`;
import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activePage, setActivePage] = useState("Home");

  const sharedProps = { darkMode, setDarkMode, activePage, setActivePage };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio {...sharedProps} />} />
        <Route path="/about" element={<About {...sharedProps} />} />
        <Route path="/resume" element={<Resume {...sharedProps} />} />
        <Route path="/projects" element={<Projects {...sharedProps} />} />
      </Routes>
    </HashRouter>
  );
}
