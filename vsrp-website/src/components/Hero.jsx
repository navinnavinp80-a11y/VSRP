// src/components/Hero.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import heroVideo from "../assets/videos/0_Ribbons_Glossy_1920x1080.mp4";
import logoImg from "../assets/images/logo_white.png";
import "./Hero.css";

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="hero">
      {/* Background Video */}
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay for optimal visual contrast */}
      <div className="hero-overlay" />

      {/* 1. Header / Navigation Section */}
      <motion.header
        className="hero-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-nav-container">
          {/* Logo Top-Left */}
          <a href="#" className="hero-logo">
            <img src={logoImg} alt="VSRP Engineered Rubber" />
          </a>

          {/* Center/Right Navigation & Contact Button */}
          <div className="hero-nav-right">
            <nav className={`hero-nav-links ${mobileMenuOpen ? "active" : ""}`}>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                ABOUT
              </a>
              <div className="nav-dropdown-wrapper">
                <a
                  href="#industries"
                  className="nav-link-dropdown"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  INDUSTRIES <ChevronDown size={14} className="dropdown-icon" />
                </a>
              </div>
              <a href="#products" onClick={() => setMobileMenuOpen(false)}>
                PRODUCTS
              </a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
                PROJECTS
              </a>
              <a href="#insights" onClick={() => setMobileMenuOpen(false)}>
                INSIGHTS
              </a>
            </nav>

            <div className="hero-header-actions">
              <a href="#contact" className="contact-cta-btn">
                <span>CONTACT</span>
                <div className="contact-icon-circle">
                  <ArrowRight size={15} color="#FF4D27" />
                </div>
              </a>

              <button
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* 2 & 3. Main Hero Body Content */}
      <div className="hero-content-wrapper">
        {/* Staggered Grid for Main Headline */}
        <div className="hero-headline-grid">
          {/* Top Left Headline */}
          <motion.div
            className="headline-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <h1 className="hero-heading">
              Custom Rubber
              <br />
              Solutions<span className="orange-dot"></span>
            </h1>
          </motion.div>

          {/* Bottom Right / Offset Headline */}
          <motion.div
            className="headline-right"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <h1 className="hero-heading">
              Engineered To
              <br />
              Perform<span className="orange-dot"></span>
            </h1>
          </motion.div>
        </div>

        {/* Bottom Row Section (Two-Column Layout) */}
        <div className="hero-bottom-grid">
          {/* Left Column: Sub-description */}
          <motion.div
            className="hero-description-container"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <p className="hero-description-text">
              For more than 20 years, we’ve helped Australian businesses solve
              problems with engineered rubber solutions. From design and tooling
              to manufacturing and delivery, we make what you need, when you
              need it.
            </p>
          </motion.div>

          {/* Right Column: Hero Action Buttons */}
          <motion.div
            className="hero-actions-container"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Primary Button */}
            <a href="#discuss" className="btn-primary-discuss">
              <span>DISCUSS YOUR PROJECT</span>
              <div className="btn-orange-circle">
                <ArrowRight size={16} color="#FFFFFF" />
              </div>
            </a>

            {/* Secondary Link */}
            <a href="#see-what-we-do" className="btn-secondary-see">
              <span className="underline-text">SEE WHAT WE DO</span>
              <ArrowRight size={16} className="link-arrow" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* 4. Corner Anchors */}
      {/* Bottom-Left Anchor: Scroll Down */}
      <motion.div
        className="scroll-down-anchor"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75 }}
      >
        <div className="scroll-icon-circle">
          <ChevronDown size={16} color="#FFFFFF" />
        </div>
        <span className="scroll-text" style={{ color: "white" }} >SCROLL DOWN</span>
      </motion.div>

      {/* Bottom-Right Anchor: WhatsApp Float */}
      {/* <motion.a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-anchor"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.85 }}
        aria-label="Contact on WhatsApp"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.012 2C6.506 2 2.023 6.478 2.022 11.984C2.022 13.748 2.481 15.468 3.354 16.986L2 22L7.127 20.659C8.618 21.528 10.316 21.985 12.012 21.985C17.52 21.985 22.002 17.507 22.002 12C22.002 6.493 17.52 2 12.012 2ZM17.849 16.195C17.605 16.883 16.429 17.509 15.893 17.565C15.391 17.618 14.749 17.642 12.565 16.756C9.772 15.622 7.975 12.766 7.835 12.581C7.697 12.397 6.708 11.078 6.708 9.718C6.708 8.358 7.419 7.689 7.675 7.416C7.932 7.142 8.233 7.073 8.418 7.073C8.603 7.073 8.789 7.075 8.95 7.082C9.122 7.09 9.353 7.017 9.582 7.565C9.819 8.13 10.39 9.535 10.46 9.678C10.53 9.821 10.578 9.988 10.483 10.175C10.388 10.362 10.34 10.478 10.199 10.645C10.057 10.812 9.901 11.018 9.773 11.146C9.63 11.289 9.481 11.444 9.647 11.729C9.814 12.014 10.388 12.951 11.236 13.707C12.327 14.68 13.248 14.982 13.533 15.124C13.818 15.267 13.985 15.243 14.152 15.053C14.319 14.863 14.865 14.222 15.055 13.937C15.245 13.652 15.435 13.699 15.697 13.794C15.959 13.889 17.359 14.578 17.645 14.721C17.93 14.864 18.12 14.935 18.191 15.054C18.262 15.173 18.262 15.742 18.018 16.43Z"
            fill="#25D366"
          />
        </svg>
      </motion.a> */}
    </section>
  );
};

export default Hero;