import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Globe, Wrench, Video, Gamepad2, Cpu, Trophy, HeadsetIcon, Server } from "lucide-react";

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
        {" "}and volleyball regularly and I'm always open to picking up new sports. Staying active keeps me sharp and competitive — both on the field and in front of a screen.
      </p>
    </motion.div>
  );
}

const otherInterests = [
  {
    icon: <Gamepad2 size={28} />,
    title: "Gaming",
    description:
      "I'm an avid gamer with a love for immersive and competitive titles. My current favorites are Counter-Strike, Cyberpunk 2077, Rocket League, and the Resident Evil franchise.",
  },
  {
    icon: <Cpu size={28} />,
    title: "Building PCs & Tech",
    description:
      "I love building custom PCs from scratch and keeping up with every new piece of hardware and software that drops each year. Exploring emerging technology is both a hobby and a mindset.",
  },
  {
    icon: <Server size={28} />,
    title: "Game Servers & Systems",
    description:
      "I'm passionate about setting up and managing game servers, and I'm actively learning about macOS, Linux, and virtual machines. Understanding different operating environments is something I genuinely enjoy exploring.",
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

      {/* Navigation */}
      <nav
        className={`flex justify-between items-center px-6 py-5 border-b shadow-sm transition-colors duration-500 ${
          darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
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

      {/* Hero Headline */}
      <section className="flex flex-col items-center justify-center text-center px-10 py-20 gap-6">
        <motion.h1
          className={`text-5xl font-bold leading-tight max-w-3xl ${darkMode ? "text-white" : "text-slate-900"}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Bilingual Developer & Creative Thinker
        </motion.h1>
        <div className={`w-16 h-1 rounded-full ${darkMode ? "bg-blue-500" : "bg-blue-600"}`} />
      </section>

      {/* My Story */}
      <section className="px-10 pb-20 max-w-3xl mx-auto">
        <h2 className={`text-3xl font-semibold mb-8 text-center ${darkMode ? "text-white" : "text-slate-900"}`}>
          My Story
        </h2>
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className={`text-xl leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Born and raised in Lima, Peru, my curiosity for technology started early and eventually brought me to the
            University of Central Florida, where I am pursuing my Bachelor's in Information Technology. Growing up
            in a multicultural environment shaped my perspective and gave me the drive to keep learning across
            every discipline I touch.
          </p>
          <p className={`text-xl leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            I chose IT for the satisfaction of building something functional from scratch. Whether it's a Java
            application, a database-driven system, or a full-stack web platform, I enjoy the logic behind it all.
            My background in video editing and design with Sony Vegas and Photoshop adds a creative layer to
            my technical work — allowing me to build applications that are not just powerful, but polished and
            professional.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className={`w-16 h-1 rounded-full mx-auto mb-16 ${darkMode ? "bg-slate-700" : "bg-slate-300"}`} />

      {/* Value Grid */}
      <section className="px-10 pb-20 max-w-7xl mx-auto text-center">
        <h2 className={`text-3xl font-semibold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
          What I Bring to the Table
        </h2>
        <p className={`text-lg mb-10 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
          The skills and perspectives that set me apart
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueBoxes.map((box, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`p-7 rounded-2xl shadow-md border text-left transition-colors duration-500 flex flex-col gap-4 ${
                darkMode ? "bg-slate-800 border-slate-600" : "bg-white border-slate-400"
              }`}
            >
              <div className={darkMode ? "text-blue-400" : "text-blue-600"}>{box.icon}</div>
              <h4 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{box.title}</h4>
              <p className={`text-lg leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{box.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className={`w-16 h-1 rounded-full mx-auto mb-16 ${darkMode ? "bg-slate-700" : "bg-slate-300"}`} />

      {/* Personal Interests */}
      <section className="px-10 pb-24 max-w-7xl mx-auto text-center">
        <h2 className={`text-3xl font-semibold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
          Outside the Code
        </h2>
        <p className={`text-lg mb-10 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
          A few things I'm passionate about beyond the screen
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SportsCard darkMode={darkMode} />
          {otherInterests.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`p-7 rounded-2xl shadow-md border text-left transition-colors duration-500 flex flex-col gap-4 ${
                darkMode ? "bg-slate-800 border-slate-600" : "bg-white border-slate-400"
              }`}
            >
              <div className={darkMode ? "text-blue-400" : "text-blue-600"}>{item.icon}</div>
              <h4 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{item.title}</h4>
              <p className={`text-lg leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={`text-center p-6 mt-10 transition-colors duration-500 ${
        darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-900 text-slate-400"
      }`}>
        <p className="text-lg">© 2026 Gustavo Juscamayta. All rights reserved.</p>
      </footer>

    </div>
  );
}
