import React from "react";
import { useNavigate } from "react-router-dom";
import resume from "./assets/Gustavo_Juscamayta_Resume.pdf";

export default function Resume({ darkMode, setDarkMode, activePage, setActivePage }) {
  const navigate = useNavigate();

  const handleNav = (item) => {
    setActivePage(item);
    navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-800"}`}>

      <nav className="flex justify-between px-6 py-5 border-b">
        {["Home", "About", "Resume", "Projects"].map(item => (
          <button key={item} onClick={() => handleNav(item)}>
            {item}
          </button>
        ))}
      </nav>

      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">Resume</h1>

        <a href={resume} download className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl">
          Download
        </a>
      </section>
    </div>
  );
}
