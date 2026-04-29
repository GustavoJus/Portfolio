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
import resume from "./assets/Gustavo_Juscamayta_Resume.pdf";

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

export default function Portfolio({ darkMode, setDarkMode, activePage, setActivePage }) {
  const navigate = useNavigate();

  const handleNav = (item) => {
    setActivePage(item);
    if (item === "Home") navigate("/");
    else navigate(`/${item.toLowerCase()}`);
  };

  const skillCard = (skill, small = false) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex items-center gap-2 rounded-xl border ${
        small ? "px-4 py-2 text-base" : "px-5 py-3 text-lg"
      } ${
        darkMode
          ? "bg-slate-800 border-slate-700 text-slate-300"
          : "bg-white border-slate-200 text-slate-700"
      }`}
    >
      <span className={darkMode ? "text-blue-400" : "text-blue-600"}>{skill.icon}</span>
      <span className="font-medium">{skill.name}</span>
    </motion.div>
  );

  return (
    <div className={`min-h-screen ${darkMode ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-800"}`}>

      <nav className={`flex justify-between items-center px-6 py-5 border-b ${
        darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }`}>
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

        <button onClick={() => setDarkMode(!darkMode)} className="px-6 py-2.5 rounded-xl border">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      <section className="flex flex-col items-center text-center px-10 py-20 gap-8">
        <motion.img
          src={myPhoto}
          className="w-52 h-52 rounded-full border-4 object-cover"
        />

        <div className="flex gap-4 flex-wrap">
          <a href="https://www.linkedin.com/in/gustavo-juscamayta" className="px-6 py-3 bg-blue-600 text-white rounded-xl">
            LinkedIn
          </a>

          <a href={resume} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded-xl">
            View Resume
          </a>

          <a href="mailto:gmgjramirez@gmail.com" className="px-6 py-3 bg-blue-600 text-white rounded-xl">
            Email Me
          </a>
        </div>

        <h2 className="text-5xl font-bold">Hello, I'm Gustavo Juscamayta</h2>
      </section>
    </div>
  );
}
