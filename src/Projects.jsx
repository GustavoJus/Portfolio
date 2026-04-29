import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

import studentSwap1 from "./assets/student1.png";
import studentSwap2 from "./assets/student2.png";
import studentSwap3 from "./assets/student3.png";
import pokemon1 from "./assets/pokemon1.png";
import pokemon2 from "./assets/pokemon2.png";
import pokemon3 from "./assets/pokemon3.png";
import twoTier1 from "./assets/twotier1.png";
import twoTier2 from "./assets/twotier2.png";
import twoTier3 from "./assets/twotier3.png";

const projects = [
  {
    title: "UCF Knight Swap",
    description:
      "Knight Swap is a full-stack student marketplace platform built collaboratively for the UCF community. Students can browse, buy, sell, and trade items across categories like Tech, Textbooks, Furniture, Clothes, and more. The platform features a clean storefront with category filters, item listings with photos and prices, a sign-up and login system restricted to UCF-verified accounts, and a mission to help students save money and reduce waste on campus.",
    tech: ["React", "Node.js", "MySQL", "CSS"],
    github: "https://github.com/Koicob/CIS-4004-Group-46",
    screenshots: [studentSwap1, studentSwap2, studentSwap3],
    group: true,
  },
  {
    title: "Pokemon Finder",
    description:
      "A web application that uses the public PokeAPI to let users search for any Pokemon by name or ID. Once found, the app displays the Pokemon's sprite, a built-in audio player to preview its cry sound, and four move selector dropdowns to browse its available moves. Users can also add Pokemon to a team roster displayed at the bottom of the screen. Built with asynchronous JavaScript and API fetch calls.",
    tech: ["JavaScript", "HTML", "CSS", "PokeAPI"],
    github: "https://github.com/GustavoJus/Asynchronous",
    screenshots: [pokemon1, pokemon2, pokemon3],
    group: false,
  },
  {
    title: "Two-Tier Client-Server App",
    description:
      "A Java-based two-tier client-server application that connects a GUI front-end to a MySQL database via JDBC. The client application allows users with different permission levels to connect to the database, execute SQL commands, and view results in real time. A separate specialized monitoring GUI was developed for accountant-level users to track query and update counts per client. The project demonstrates database connectivity, user authentication, and role-based access control.",
    tech: ["Java", "MySQL", "JDBC", "Swing GUI"],
    github: "https://github.com/GustavoJus/Two-Tier-Client-Server-App",
    screenshots: [twoTier1, twoTier2, twoTier3],
    group: false,
  },
];

// Preload all images
const allImages = [
  studentSwap1, studentSwap2, studentSwap3,
  pokemon1, pokemon2, pokemon3,
  twoTier1, twoTier2, twoTier3,
];
allImages.forEach((src) => {
  const img = new window.Image();
  img.src = src;
});

function ImageCarousel({ screenshots, darkMode }) {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState({});
  const [hovered, setHovered] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const [zoom, setZoom] = useState(1);

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length);
    setZoom(1);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % screenshots.length);
    setZoom(1);
  };

  const openLightbox = () => {
    setLightbox(true);
    setZoom(1);
  };

  const closeLightbox = () => {
    setLightbox(false);
    setZoom(1);
  };

  const zoomIn = (e) => {
    e.stopPropagation();
    setZoom((z) => Math.min(z + 0.5, 3));
  };

  const zoomOut = (e) => {
    e.stopPropagation();
    setZoom((z) => Math.max(z - 0.5, 1));
  };

  const bgColor = darkMode ? "#1e293b" : "#e2e8f0";

  return (
    <>
      <div
        onClick={openLightbox}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          width: "100%",
          height: "220px",
          borderRadius: "12px",
          overflow: "hidden",
          marginBottom: "24px",
          cursor: "pointer",
          backgroundColor: bgColor,
        }}
      >
        {screenshots.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Screenshot ${i + 1}`}
            onLoad={() => setLoaded((prev) => ({ ...prev, [i]: true }))}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              opacity: i === current && loaded[i] ? 1 : 0,
              transition: "opacity 0.3s ease",
              backgroundColor: bgColor,
            }}
          />
        ))}

        {/* Loading spinner */}
        {!loaded[current] && (
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              width: "32px", height: "32px",
              border: "3px solid rgba(255,255,255,0.2)",
              borderTop: "3px solid #3b82f6",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
            }} />
          </div>
        )}

        {/* Hover overlay - only visible on hover */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 10,
          backgroundColor: hovered ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0)",
          transition: "background-color 0.3s ease",
        }}>
          <span style={{
            color: "white",
            fontSize: "13px",
            fontWeight: 600,
            background: "rgba(0,0,0,0.6)",
            padding: "6px 14px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}>
            <ZoomIn size={14} /> Click to expand
          </span>
        </div>

        {/* Prev/Next */}
        <button
          onClick={prev}
          style={{
            position: "absolute", left: "8px", top: "50%",
            transform: "translateY(-50%)", zIndex: 20,
            background: "rgba(0,0,0,0.6)", color: "white",
            border: "none", borderRadius: "50%",
            width: "30px", height: "30px",
            cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center",
          }}
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={next}
          style={{
            position: "absolute", right: "8px", top: "50%",
            transform: "translateY(-50%)", zIndex: 20,
            background: "rgba(0,0,0,0.6)", color: "white",
            border: "none", borderRadius: "50%",
            width: "30px", height: "30px",
            cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center",
          }}
        >
          <ChevronRight size={16} />
        </button>

        {/* Dots */}
        <div style={{
          position: "absolute", bottom: "8px", left: "50%",
          transform: "translateX(-50%)", zIndex: 20,
          display: "flex", gap: "6px",
        }}>
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              style={{
                width: "8px", height: "8px", borderRadius: "50%",
                backgroundColor: i === current ? "white" : "rgba(255,255,255,0.4)",
                border: "none", cursor: "pointer",
                transform: i === current ? "scale(1.3)" : "scale(1)",
                transition: "all 0.2s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Lightbox with zoom */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            style={{
              position: "fixed", inset: 0, zIndex: 50,
              display: "flex", alignItems: "center", justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.92)",
              overflow: zoom > 1 ? "auto" : "hidden",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={zoom === 1 ? closeLightbox : undefined}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              style={{
                position: "fixed", top: "16px", right: "16px",
                background: "rgba(0,0,0,0.5)", border: "none",
                color: "white", cursor: "pointer", zIndex: 60,
                borderRadius: "50%", width: "40px", height: "40px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <X size={22} />
            </button>

            {/* Zoom controls */}
            <div style={{
              position: "fixed", bottom: "24px", left: "50%",
              transform: "translateX(-50%)", zIndex: 60,
              display: "flex", alignItems: "center", gap: "12px",
            }}>
              <button
                onClick={zoomOut}
                disabled={zoom <= 1}
                style={{
                  background: zoom <= 1 ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)",
                  border: "none", color: zoom <= 1 ? "rgba(255,255,255,0.3)" : "white",
                  cursor: zoom <= 1 ? "not-allowed" : "pointer",
                  borderRadius: "50%", width: "40px", height: "40px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <ZoomOut size={20} />
              </button>

              <span style={{ color: "white", fontSize: "14px", fontWeight: 600, minWidth: "40px", textAlign: "center" }}>
                {Math.round(zoom * 100)}%
              </span>

              <button
                onClick={zoomIn}
                disabled={zoom >= 3}
                style={{
                  background: zoom >= 3 ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)",
                  border: "none", color: zoom >= 3 ? "rgba(255,255,255,0.3)" : "white",
                  cursor: zoom >= 3 ? "not-allowed" : "pointer",
                  borderRadius: "50%", width: "40px", height: "40px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <ZoomIn size={20} />
              </button>
            </div>

            {/* Prev/Next in lightbox */}
            <button onClick={prev} style={{
              position: "fixed", left: "16px", top: "50%", transform: "translateY(-50%)",
              background: "none", border: "none", color: "white", cursor: "pointer", zIndex: 60,
            }}>
              <ChevronLeft size={40} />
            </button>

            {/* Image with zoom */}
            <div
              style={{ overflow: "auto", maxWidth: "100vw", maxHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={current}
                src={screenshots[current]}
                alt={`Screenshot ${current + 1}`}
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: "center center",
                  transition: "transform 0.3s ease",
                  maxWidth: "800px",
                  width: "100%",
                  objectFit: "contain",
                  borderRadius: "12px",
                  padding: "0 60px",
                  cursor: zoom < 3 ? "zoom-in" : "zoom-out",
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: zoom }}
                onClick={(e) => { e.stopPropagation(); zoom < 3 ? setZoom(z => Math.min(z + 0.5, 3)) : setZoom(1); }}
              />
            </div>

            <button onClick={next} style={{
              position: "fixed", right: "16px", top: "50%", transform: "translateY(-50%)",
              background: "none", border: "none", color: "white", cursor: "pointer", zIndex: 60,
            }}>
              <ChevronRight size={40} />
            </button>

            {/* Dots in lightbox */}
            <div style={{
              position: "fixed", bottom: "80px", left: "50%",
              transform: "translateX(-50%)", display: "flex", gap: "8px", zIndex: 60,
            }}>
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); setZoom(1); }}
                  style={{
                    width: "12px", height: "12px", borderRadius: "50%",
                    backgroundColor: i === current ? "white" : "rgba(255,255,255,0.4)",
                    border: "none", cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </>
  );
}

export default function Projects({ darkMode, setDarkMode, activePage, setActivePage }) {
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
      <nav className={`flex justify-between items-center px-6 py-5 border-b shadow-sm transition-colors duration-500 ${
        darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }`}>
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

      <section className="flex flex-col items-center justify-center text-center px-10 py-16 gap-4">
        <motion.h1
          className={`text-5xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>
        <p className={`text-xl ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
          A deeper look at what I've built
        </p>
        <div className={`w-16 h-1 rounded-full ${darkMode ? "bg-blue-500" : "bg-blue-600"}`} />
      </section>

      <section className="px-10 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl shadow-md border flex flex-col overflow-hidden transition-colors duration-500 ${
                darkMode ? "bg-slate-800 border-slate-600" : "bg-white border-slate-400"
              }`}
            >
              <div className="p-4 pb-0">
                <ImageCarousel screenshots={project.screenshots} darkMode={darkMode} />
              </div>

              <div className="p-6 flex flex-col flex-1 gap-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                    {project.title}
                  </h3>
                  {project.group && (
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-600 text-white font-medium whitespace-nowrap">
                      Group Project
                    </span>
                  )}
                </div>

                <p className={`text-lg leading-relaxed flex-1 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className={`text-sm px-3 py-1 rounded-full border font-medium ${
                        darkMode
                          ? "bg-slate-700 border-slate-600 text-slate-300"
                          : "bg-slate-100 border-slate-300 text-slate-700"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 inline-block text-center px-5 py-3 rounded-xl text-base font-medium border transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-500"
                      : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                  }`}
                >
                  View Project on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className={`text-center p-6 transition-colors duration-500 ${
        darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-900 text-slate-400"
      }`}>
        <p className="text-lg">© 2026 Gustavo Juscamayta. All rights reserved.</p>
      </footer>
    </div>
  );
}
