import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activePage, setActivePage] = useState("Home");

  const sharedProps = { darkMode, setDarkMode, activePage, setActivePage };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio {...sharedProps} />} />
        <Route path="/about" element={<About {...sharedProps} />} />
        <Route path="/resume" element={<Resume {...sharedProps} />} />
        <Route path="/projects" element={<Projects {...sharedProps} />} />
      </Routes>
    </BrowserRouter>
  );
}
