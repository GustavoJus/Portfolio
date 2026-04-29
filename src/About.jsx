import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Globe, Wrench, Video, Gamepad2, Cpu, Trophy, HeadsetIcon, Server } from "lucide-react";

const resume = `${import.meta.env.BASE_URL}Gustavo_Juscamayta_Resume.pdf`;

const valueBoxes = [
  {
    icon: <Globe size={28} />,
    title: "Bilingual Communication",
    description: "Fluent in English and Spanish for global collaboration."
  },
  {
    icon: <Wrench size={28} />,
    title: "Technical Troubleshooting",
    description: "Strong debugging and systems thinking skills."
  },
  {
    icon: <Video size={28} />,
    title: "Multimedia Expertise",
    description: "Experience with editing and design tools."
  },
  {
    icon: <HeadsetIcon size={28} />,
    title: "Customer Service",
    description: "Experience working in fast-paced environments."
  }
];

export default function About({ darkMode, setDarkMode, activePage, setActivePage }) {
  const navigate = useNavigate();

  const handleNav = (item) => {
    setActivePage(item);
    navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-800"}`}>

      <nav className={`flex justify-between px-6 py-5 border-b ${
        darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }`}>
        {["Home", "About", "Resume", "Projects"].map(item => (
          <button key={item} onClick={() => handleNav(item)}>
            {item}
          </button>
        ))}
      </nav>

      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">Bilingual Developer</h1>

        <a href={resume} target="_blank" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl">
          View Resume
        </a>
      </section>
    </div>
  );
}
