import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const RESUME_PATH = "/Gustavo_Juscamayta_Resume.pdf";

export default function Resume({ darkMode, setDarkMode, activePage, setActivePage }) {
  const navigate = useNavigate();

  const handleNav = (item) => {
    setActivePage(item);
    if (item === "Home") navigate("/");
    else navigate(`/${item.toLowerCase()}`);
  };

  const card = (children) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-8 rounded-2xl shadow-md border transition-colors duration-500 ${
        darkMode ? "bg-slate-800 border-slate-600" : "bg-white border-slate-400"
      }`}
    >
      {children}
    </motion.div>
  );

  const sectionTitle = (title) => (
    <h2 className={`text-2xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
      {title}
    </h2>
  );

  const label = (text) => (
    <span className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{text}</span>
  );

  const bullet = (text, i) => (
    <li key={i} className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
      {text}
    </li>
  );

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

      {/* Header */}
      <section className="flex flex-col items-center justify-center text-center px-10 py-16 gap-4">
        <motion.h1
          className={`text-5xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Gustavo Juscamayta
        </motion.h1>
        <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
          Winter Park, FL &nbsp;|&nbsp; (407) 436-2420 &nbsp;|&nbsp; GMGJRamirez@gmail.com
        </p>
        <div className="flex gap-4 mt-2">
          <a
            href={RESUME_PATH}
            download
            className={`px-6 py-3 rounded-xl font-medium border transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-500"
                : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
            }`}
          >
            Download Resume (PDF)
          </a>
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded-xl font-medium border transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "border-slate-600 text-slate-300 hover:bg-slate-100 hover:text-slate-900"
                : "border-slate-300 text-slate-700 hover:bg-slate-800 hover:text-white"
            }`}
          >
            Open PDF
          </a>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-24 flex flex-col gap-6">

        {/* Professional Objective */}
        {card(
          <>
            {sectionTitle("Professional Objective")}
            <p className={`text-lg leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              Motivated and detail-oriented junior pursuing a Bachelor's in IT at the University of Central Florida.
              Seeking an IT Internship to apply technical knowledge, problem-solving skills, and customer service
              experience in a professional IT environment.
            </p>
          </>
        )}

        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {card(
            <>
              {sectionTitle("Education")}
              <div className="flex flex-col gap-6">
                <div>
                  <p className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>University of Central Florida</p>
                  <p className="text-lg font-medium text-blue-500">B.S. in Information Technology</p>
                  <p className={`text-base ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Expected 2026</p>
                </div>
                <div>
                  <p className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>AWS Academy Graduate</p>
                  <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Cloud Foundations · Architecting · Security</p>
                  <p className={`text-base ${darkMode ? "text-slate-400" : "text-slate-500"}`}>2025</p>
                </div>
                <div>
                  <p className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>Valencia College</p>
                  <p className="text-lg font-medium text-blue-500">Associate of Arts</p>
                  <p className={`text-base ${darkMode ? "text-slate-400" : "text-slate-500"}`}>2022</p>
                </div>
              </div>
            </>
          )}

          {card(
            <>
              {sectionTitle("Work Experience")}
              <div className="flex flex-col gap-6">
                <div>
                  <p className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>Lowe's</p>
                  <p className="text-base text-blue-500 font-medium">Customer Service Associate</p>
                  <p className={`text-sm mb-2 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>Feb 2026 – Present | Fern Park, FL</p>
                  <ul className="list-disc list-inside flex flex-col gap-1">
                    {["Assist customers with product selection, order pickup, and issue resolution.",
                      "Troubleshoot POS systems, handheld scanners, and order management systems.",
                      "Collaborate with team members to resolve inventory discrepancies efficiently."].map(bullet)}
                  </ul>
                </div>
                <div>
                  <p className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>Walmart Inc</p>
                  <p className="text-base text-blue-500 font-medium">Customer Service Associate</p>
                  <p className={`text-sm mb-2 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>May 2022 – June 2025 | Orlando, FL</p>
                  <ul className="list-disc list-inside flex flex-col gap-1">
                    {["Provided technical support for point-of-sale systems and digital transactions.",
                      "Troubleshot hardware and software issues for self-checkout systems."].map(bullet)}
                  </ul>
                </div>
                <div>
                  <p className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>McDonald's Corporation</p>
                  <p className="text-base text-blue-500 font-medium">Crew Member</p>
                  <p className={`text-sm mb-2 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>Oct 2020 – Apr 2022 | Orlando, FL</p>
                  <ul className="list-disc list-inside flex flex-col gap-1">
                    {["Assisted with troubleshooting POS systems and network connectivity issues.",
                      "Trained new employees on system usage and operations."].map(bullet)}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Technical Skills */}
        {card(
          <>
            {sectionTitle("Technical Skills")}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{label("IT Support & Troubleshooting: ")}Diagnosing and resolving hardware, software, and network issues.</p>
                <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{label("Operating Systems: ")}Windows 10/11</p>
                <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{label("Networking: ")}TCP/IP, DNS, DHCP, Subnetting</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{label("Productivity & Systems: ")}Microsoft 365, Active Directory</p>
                <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{label("Languages: ")}Bilingual — English & Spanish</p>
                <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{label("Interpersonal: ")}Strong communicator, team collaborator, and customer-focused professional.</p>
              </div>
            </div>
          </>
        )}

        {/* Projects */}
        {card(
          <>
            {sectionTitle("Projects")}
            <div className="flex flex-col gap-5">
              {[
                { title: "Barbershop Appointment Website", desc: "Designed and developed a fully functional website for a barbershop offering online appointment scheduling services. Features a clean UI for browsing services, selecting time slots, and booking appointments." },
                { title: "Google TPU — Research Presentation", desc: "Conducted an in-depth research presentation on Google's Tensor Processing Unit (TPU). Covered its development timeline, technical architecture, social and professional impact, and ethical, legal, and environmental considerations." },
                { title: "UCF Student Swap", desc: "A collaborative student marketplace platform built with a team for UCF students to buy, sell, and trade items within their campus community." },
                { title: "Pokemon Finder", desc: "A web app using the PokeAPI to search for Pokemon, browse their moves, and preview their sounds with a built-in play button." },
                { title: "Two-Tier Client-Server App", desc: "A Java GUI application connected to a MySQL server via JDBC, allowing clients with varying permissions to execute SQL commands and monitor databases." },
              ].map((p, i) => (
                <div key={i}>
                  <p className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{p.title}</p>
                  <p className={`text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{p.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className={`text-center p-6 transition-colors duration-500 ${
        darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-900 text-slate-400"
      }`}>
        <p className="text-lg">© 2026 Gustavo Juscamayta. All rights reserved.</p>
      </footer>
    </div>
  );
}
