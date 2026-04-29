import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Globe, Wrench, Video, Gamepad2, Cpu, Trophy, HeadsetIcon, Server } from "lucide-react";

const resume = `${import.meta.env.BASE_URL}Gustavo_Juscamayta_Resume.pdf`;

const valueBoxes = [
  {
    icon: <Globe size={28} />,
    title: "Bilingual Communication",
    description:
      "Being fully fluent in both English and Spanish allows me to collaborate effectively in diverse, global tech environments. I can bridge communication gaps between teams, clients, and stakeholders — turning language into an asset rather than a barrier.",
  },
  {
    icon: <Wrench size={28} />,
    title: "Technical Troubleshooting",
    description:
      "From Java and MySQL to full-stack development, I approach every technical challenge methodically — breaking down complex systems, identifying root causes, and rebuilding solutions that are efficient, scalable, and clean.",
  },
  {
    icon: <Video size={28} />,
    title: "Multimedia Expertise",
    description:
      "My hands-on experience with Sony Vegas, CapCut, and Photoshop gives me a unique edge in front-end development and UI/UX design. I don't just build applications that work — I build applications that look and feel professional.",
  },
  {
    icon: <HeadsetIcon size={28} />,
    title: "Customer Service",
    description:
      "With experience at McDonald's, Walmart, and Lowe's, I've built strong communication, problem-solving, and people skills. Working in fast-paced environments taught me how to stay composed under pressure and always put the customer first.",
  },
];

function SportsCard({ darkMode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-7 rounded-2xl shadow-md border text-left transition-colors duration-500 flex flex-col gap-4 ${
        darkMode ? "bg-slate-800 border-slate-600" : "bg-white border-slate-400"
      }`}
    >
      <div className={darkMode ? "text-blue-400" : "text-blue-600"}>
        <Trophy size={28} />
      </div>
      <h4 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
        Sports
      </h4>
      <p className={`text-lg leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
        I play{" "}
        <span
          className="relative cursor-pointer inline-block"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span className={`font-semibold underline decoration-dotted ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
            football
          </span>
          {hovered && (
            <span
              className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap shadow-lg z-10 ${
                darkMode ? "bg-slate-700 text-white" : "bg-slate-800 text-white"
              }`}
            >
              ⚽ Soccer in the US, fútbol in Peru!
            </span>
          )}
        </span>
        {" "}and volleyball regularly and I'm always open to picking up new sports.
      </p>
    </motion.div>
  );
}

const otherInterests = [
  {
    icon: <Gamepad2 size={28} />,
    title: "Gaming",
    description: "I'm an avid gamer with a love for immersive and competitive titles.",
  },
  {
    icon: <Cpu size={28} />,
    title: "Building PCs & Tech",
    description: "I love building custom PCs and exploring new technology.",
  },
  {
    icon: <Server size={28} />,
    title: "Game Servers & Systems",
    description: "I'm passionate about Linux, macOS, and server setups.",
  },
];

export default function About({ darkMode, setDarkMode, activePage, setActivePage }) {
  const navigate = useNavigate();

  const handleNav = (item) => {
    setActivePage(item);
    if (item === "Home") navigate("/");
    else navigate(`/${item.toLowerCase()}`);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-800"
      }`}
      style={{ fontFamily: "Bitter, serif" }}
    >
      <nav
        className={`flex justify-between items-center px-6 py-5 border-b shadow-sm ${
          darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
        }`}
      >
        <div className="flex-1 flex justify-center gap-4">
          {["Home", "About", "Resume", "Projects"].map((item) => (
            <button
              key={item}
              onClick={() => handleNav(item)}
              className={`px-6 py-2.5 rounded-xl border ${
                activePage === item
                  ? "bg-blue-600 text-white border-blue-600"
                  : darkMode
                  ? "border-slate-600 text-slate-300"
                  : "border-slate-300 text-slate-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-6 py-2.5 rounded-xl border"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      <section className="text-center px-10 py-20">
        <motion.h1
          className={`text-5xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
        >
          Bilingual Developer & Creative Thinker
        </motion.h1>

        <div
          className={`w-16 h-1 mx-auto mt-4 ${
            darkMode ? "bg-blue-500" : "bg-blue-600"
          }`}
        />

        <div className="flex justify-center gap-4 mt-8">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:scale-105 transition"
          >
            View Resume
          </a>
        </div>
      </section>
    </div>
  );
}
