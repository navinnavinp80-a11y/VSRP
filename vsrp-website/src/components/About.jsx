// src/components/About.jsx

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./About.css";

const stats = [
  {
    number: "20",
    plus: "+",
    label: "Years of experience",
  },
  {
    number: "122K",
    plus: "+",
    label: "Ventilation tube joins",
  },
  {
    number: "5M",
    plus: "+",
    label: "Rubber seals supplied",
  },
  {
    number: "450K",
    plus: "+",
    label: "Traffic light seals",
  },
];

const About = () => {
  return (
    <section className="about" id="about">
      {/* Background Geometric Accent in bottom-right corner */}
      <div className="about-bg-accent" aria-hidden="true">
        <svg
          viewBox="0 0 500 400"
          preserveAspectRatio="none"
          className="about-accent-svg"
        >
          {/* Subtle light grey outer stripe */}
          <polygon points="160,400 320,0 375,0 215,400" fill="#E2E7ED" opacity="0.6" />
          {/* Subtle light grey inner polygon */}
          <polygon points="230,400 390,0 440,0 280,400" fill="#E8EDF2" opacity="0.8" />
          {/* Main peach/light-orange stripe */}
          <polygon points="310,400 470,0 520,0 360,400" fill="#F4C3B9" />
          {/* Rightmost edge grey stripe */}
          <polygon points="380,400 540,0 570,0 410,400" fill="#E3E8EE" opacity="0.5" />
        </svg>
      </div>

      <div className="about-container">
        {/* 1. Left Column */}
        <motion.div
          className="about-left-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-main-heading">
            Wherever Precision Is<br />
            Needed, <span className="highlight-orange">VSRP Delivers.</span>
          </h2>

          <div className="about-stats-container">
            <div className="stats-row top-row">
              <div className="stat-card">
                <div className="stat-number">
                  {stats[0].number}
                  <span className="stat-plus">{stats[0].plus}</span>
                </div>
                <p className="stat-label">{stats[0].label}</p>
              </div>

              <div className="stat-card">
                <div className="stat-number">
                  {stats[1].number}
                  <span className="stat-plus">{stats[1].plus}</span>
                </div>
                <p className="stat-label">{stats[1].label}</p>
              </div>
            </div>

            <div className="stats-divider" />

            <div className="stats-row bottom-row">
              <div className="stat-card">
                <div className="stat-number">
                  {stats[2].number}
                  <span className="stat-plus">{stats[2].plus}</span>
                </div>
                <p className="stat-label">{stats[2].label}</p>
              </div>

              <div className="stat-card">
                <div className="stat-number">
                  {stats[3].number}
                  <span className="stat-plus">{stats[3].plus}</span>
                </div>
                <p className="stat-label">{stats[3].label}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Right Column */}
        <motion.div
          className="about-right-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <h3 className="about-subheading">
            We're engineers, manufacturers<br />
            and problem-solvers.
          </h3>

          <p className="about-paragraph">
            Whether you need a custom seal, a specialised extrusion, a bonded
            rubber component or a completely new product, we'll work with you to
            find the right solution.
          </p>

          <p className="about-paragraph">
            We've been doing it for more than two decades, helping businesses
            across Australia keep projects moving.
          </p>

          <div className="about-cta-wrapper">
            <a href="#about" className="about-cta-pill">
              <span className="cta-text">ABOUT VSRP</span>
              <span className="cta-icon-circle">
                <ArrowRight size={18} strokeWidth={2.5} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;