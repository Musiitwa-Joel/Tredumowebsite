import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import ModulesPage from "./pages/ModulesPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
// import AboutPage from './pages/AboutPage';
// import BlogPage from './pages/BlogPage';
import PricingPage from "./pages/PricingPage";
// import CareersPage from "./pages/CareersPage";
// import ContactPage from "./pages/ContactPage";
// import PrivacyPage from "./pages/PrivacyPage";
// import TermsPage from "./pages/TermsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Router>
      <div
        className={`min-h-screen ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage theme={theme} />} />
          <Route path="/features" element={<FeaturesPage theme={theme} />} />
          <Route path="/modules" element={<ModulesPage theme={theme} />} />
          <Route
            path="/case-studies"
            element={<CaseStudiesPage theme={theme} />}
          />
          {/* <Route path="/about" element={<AboutPage theme={theme} />} />
          <Route path="/blog" element={<BlogPage theme={theme} />} /> */}
          <Route path="/pricing" element={<PricingPage theme={theme} />} />
          {/* <Route path="/careers" element={<CareersPage theme={theme} />} />
          <Route path="/contact" element={<ContactPage theme={theme} />} />
          <Route path="/privacy" element={<PrivacyPage theme={theme} />} />
          <Route path="/terms" element={<TermsPage theme={theme} />} /> */}
          <Route path="*" element={<NotFoundPage theme={theme} />} />
        </Routes>
        <Footer theme={theme} />
      </div>
    </Router>
  );
}

export default App;
