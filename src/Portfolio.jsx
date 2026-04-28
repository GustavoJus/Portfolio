import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Code2,
  Coffee,
  FileCode,
  Database,
  Globe,
  Server,
  Video,
  Scissors,
  Mic,
  Image,
  Languages,
} from "lucide-react";
import myPhoto from "./assets/myphoto.jpeg";

const devSkills = [
  { name: "HTML", icon: <Globe size={22} /> },
  { name: "Java", icon: <Coffee size={22} /> },
  { name: "JavaScript", icon: <FileCode size={22} /> },
  { name: "Node.js", icon: <Server size={22} /> },
  { name: "React", icon: <Code2 size={22} /> },
  { name: "MySQL", icon: <Database size={22} /> },
];

const creativeSkills = [
  { name: "Sony Vegas", icon: <Video size={22} /> },
  { name: "CapCut", icon: <Scissors size={22} /> },
  { name: "NVIDIA Broadcast", icon: <Mic size={22} /> },
  { name: "Photoshop", icon: <Image size={22} /> },
];

const languageSkills = [
  { name: "English", icon: <Languages size={18} /> },
  { name: "Spanish", icon: <Languages size={18} /> },
];

export default function Portfolio({
  darkMode,
  setDarkMode,
  activePage,
  setActivePage,
}) {
  const navigate = useNavigate();

  const handleNav = (item) => {
    setActivePage(item);
    if (item === "Home") navigate("/");
    else navigate(`/${item.toLowerCase()}`);
  };

  const skillCard = (skill, small = false) => (
    <motion.div
      key={skill.name}
      whileHover={{ scale: 1.05 }}
      className={`flex items-center gap-2 rounded-xl border transition-all duration-300 cursor-default ${
        small ? "px-4 py-2 text-base" : "px-5 py-3 text-lg"
      } ${
        darkMode
          ? "bg-slate-800 border-slate-700 text-slate-300 hover:border-blue-500 hover:text-white"
          : "bg-white border-slate-200 text-slate-700 hover:border-blue-400 hover:text-slate-900"
      }`}
    >
      <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
        {skill.icon}
      </span>
      <span className="font-medium">{skill.name}</span>
    </motion.div>
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-slate-900 text-slate-100"
          : "bg-slate-50 text-slate-800"
      }`}
      style={{ fontFamily: "Bitter, serif" }}
    >
      {/* Navigation */}
      <nav
        className={`flex justify-between items-center px-6 py-5 border-b shadow-sm transition-colors duration-500 ${
          darkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-slate-200"
        }`}
      >
        <div className="flex-1 flex justify-center gap-4">
          {["Home", "About", "Resume", "Projects"].map((item) => (
            <button
              key={item}
              onClick={() => handleNav(item)}
              className={`px-6 py-2.5 text-base rounded-xl border transition-all duration-300 hover:scale-105 ${
                activePage === item
                  ? "bg-blue-600 text-white border-blue-600"
                  : darkMode
                  ? "border-slate-600 text-slate-300 hover:bg-slate-100 hover:text-slate-900"
                  : "border-slate-300 text-slate-700 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-6 py-2.5 text-base rounded-xl border transition-all duration-300 hover:scale-105 ${
            darkMode
              ? "border-slate-600 text-slate-300 hover:bg-slate-100 hover:text-slate-900"
              : "border-slate-300 text-slate-700 hover:bg-slate-800 hover:text-white"
          }`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-10 py-20 gap-8">
        <motion.img
          src={myPhoto}
          alt="Profile"
          className={`w-52 h-52 rounded-full shadow-lg border-4 object-cover ${
            darkMode ? "border-slate-600" : "border-slate-200"
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <div className="max-w-2xl">
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/gustavo-juscamayta"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-7 py-3.5 text-lg rounded-xl font-medium border transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-500"
                  : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
              }`}
            >
              LinkedIn
            </a>

            {/* View Resume */}
            <a
              href="https://gustavojus.github.io/Portfolio/Gustavo_Juscamayta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-7 py-3.5 text-lg rounded-xl font-medium border transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-500"
                  : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
              }`}
            >
              View Resume
            </a>

            {/* Email */}
            <a
              href="mailto:gmgjramirez@gmail.com"
              className={`px-7 py-3.5 text-lg rounded-xl font-medium border transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-500"
                  : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
              }`}
            >
              Email Me
            </a>
          </div>

          <h2
            className={`text-5xl font-bold mb-5 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Hello, I'm Gustavo Juscamayta
          </h2>

          <p
            className={`text-xl leading-relaxed ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Welcome to my digital portfolio. I am a UCF student passionate
            about technology and innovation. This website showcases my projects,
            skills, experience, and creative work.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div
        className={`w-16 h-1 rounded-full mx-auto mb-16 ${
          darkMode ? "bg-slate-700" : "bg-slate-300"
        }`}
      />

      {/* Tech Stack */}
      <section className="px-10 pb-20 text-center max-w-4xl mx-auto">
        <h3
          className={`text-4xl font-semibold mb-2 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Tech Stack
        </h3>

        <p
          className={`text-lg mb-10 ${
            darkMode ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Tools and technologies I work with
        </p>

        <div className="mb-8 text-left">
          <p
            className={`text-sm font-semibold uppercase tracking-widest mb-4 ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Development
          </p>
          <div className="flex flex-wrap gap-3">
            {devSkills.map((skill) => skillCard(skill))}
          </div>
        </div>

        <div className="mb-8 text-left">
          <p
            className={`text-sm font-semibold uppercase tracking-widest mb-4 ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Creative & Media
          </p>
          <div className="flex flex-wrap gap-3">
            {creativeSkills.map((skill) => skillCard(skill))}
          </div>
        </div>

        <div className="text-left">
          <p
            className={`text-sm font-semibold uppercase tracking-widest mb-4 ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Languages
          </p>
          <div className="flex flex-wrap gap-3">
            {languageSkills.map((skill) => skillCard(skill, true))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`text-center p-6 mt-10 transition-colors duration-500 ${
          darkMode
            ? "bg-slate-800 text-slate-400"
            : "bg-slate-900 text-slate-400"
        }`}
      >
        <p className="text-lg">
          © 2026 Gustavo Juscamayta. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
