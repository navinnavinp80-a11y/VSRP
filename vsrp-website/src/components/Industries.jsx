// src/components/Industries.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    Building2,
    Tractor,
    Truck,
} from "lucide-react";
import miningImage from "../assets/images/mining.jpg";
import WhatsappButton from "./WhatsappButton";
import "./Industries.css";

const ExcavatorIcon = () => (
    <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M2 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <path d="M10 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <path d="M4 17h6" />
        <path d="M14 17h4a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-3l-2-4H9L7 11H4" />
        <path d="M15 8l4-4 3 3" />
    </svg>
);

const industries = [
    {
        id: "civil",
        name: "Civil",
        displayName: "Civil",
        prevName: "Transport & Infrastructure",
        nextName: "Mining",
        icon: Building2,
        image: miningImage,
    },
    {
        id: "mining",
        name: "Mining",
        displayName: "Mining",
        prevName: "Agriculture & Irrigation",
        nextName: "Defence",
        icon: ExcavatorIcon,
        image: miningImage,
    },
    {
        id: "agriculture",
        name: "Agriculture",
        displayName: "Agriculture & Irrigation",
        prevName: "Mining",
        nextName: "Building",
        icon: Tractor,
        image: miningImage,
    },
    {
        id: "building",
        name: "Building",
        displayName: "Building",
        prevName: "Agriculture & Irrigation",
        nextName: "Transport & Infrastructure",
        icon: Building2,
        image: miningImage,
    },
    {
        id: "transport",
        name: "Transport & Infrastructure",
        displayName: "Transport & Infrastructure",
        prevName: "Building",
        nextName: "Civil",
        icon: Truck,
        image: miningImage,
    },
];

const Industries = () => {
    const [activeIndustry, setActiveIndustry] = useState("mining");

    const activeIndex = industries.findIndex(
        (industry) => industry.id === activeIndustry
    );
    const active = industries[activeIndex] || industries[1];
    const ActiveIcon = active.icon;

    return (
        <section className="industries-section" id="industries">
            <div className="industries-container">
                {/* SECTION HEADER */}
                <div className="industries-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Rubber Solutions Built For <span className="highlight-orange">Industry.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        From infrastructure and mining to agriculture and transport, we help
                        businesses solve complex challenges with engineered rubber solutions.
                    </motion.p>
                </div>

                {/* MAIN TWO-COLUMN GRID */}
                <div className="industries-grid">
                    {/* LEFT PANEL */}
                    <div className="industries-panel">
                        <div className="industries-label">OUR INDUSTRIES</div>

                        {/* CENTER INDUSTRY DISPLAY */}
                        <div className="industry-display">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndustry}
                                    className="industry-display-content"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <p className="industry-sub-name">{active.prevName}</p>
                                    <h3 className="industry-main-name">{active.displayName}</h3>
                                    <p className="industry-sub-name">{active.nextName}</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* BOTTOM NAVIGATION */}
                        <div className="industry-navigation">
                            <div className="industry-line">
                                <span
                                    className="industry-line-indicator"
                                    style={{
                                        left: `${(activeIndex / industries.length) * 100}%`,
                                        width: `${100 / industries.length}%`,
                                    }}
                                />
                            </div>

                            <div className="industry-tabs">
                                {industries.map((industry) => (
                                    <button
                                        key={industry.id}
                                        className={
                                            activeIndustry === industry.id ? "active" : ""
                                        }
                                        onClick={() => setActiveIndustry(industry.id)}
                                    >
                                        {industry.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE PANEL */}
                    <div className="industry-image-panel">
                        <div className="industry-image-layer">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={active.id}
                                    src={active.image}
                                    alt={active.displayName}
                                    className="industry-image"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </AnimatePresence>
                        </div>

                        {/* TOP-LEFT WHITE ICON CIRCLE */}
                        <div className="industry-icon">
                            <ActiveIcon />
                        </div>

                        {/* BOTTOM-RIGHT CTA BUTTON */}
                        <a href="#capabilities" className="industry-cta">
                            <span>SEE OUR CAPABILITIES</span>
                            <span className="industry-cta-arrow">
                                <ArrowRight size={19} strokeWidth={2} />
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* FLOATING WHATSAPP BUTTON */}
            <WhatsappButton />
        </section>
    );
};

export default Industries;