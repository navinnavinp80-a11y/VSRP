import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import processEngineeringImage from "../assets/images/process-engineering.png";
import "./Process.css";

const steps = [
    {
        number: "01",
        title: "Tell Us What You Need",
        description: "Send us a drawing, sample or specification.",
    },
    {
        number: "02",
        title: "We'll Engineer The Solution",
        description: "Materials, tooling and manufacturing approach.",
    },
    {
        number: "03",
        title: "We'll Make It",
        description: "Materials, tooling and manufacturing approach.",
    },
    {
        number: "04",
        title: "We'll Deliver It",
        description: "Materials, tooling and manufacturing approach.",
    },
];

const Process = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="process-section">
            <div className="process-container">

                {/* Header */}
                <motion.div
                    className="process-header"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2>
                        From Concept to Delivery,
                        <br />
                        We Make it <span>Happen</span>
                    </h2>

                    <p>
                        A proven process built around collaboration, precision and a
                        commitment to quality at every step.
                    </p>
                </motion.div>

                {/* Content */}
                <div className="process-content">

                    {/* Timeline */}
                    <div className="process-timeline">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                className={`process-step ${activeStep === index ? "active" : ""
                                    }`}
                                onMouseEnter={() => setActiveStep(index)}
                                initial={{ opacity: 0, x: -25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <div className="step-number-wrapper">
                                    <div className="step-number">
                                        {step.number}
                                    </div>

                                    {index < steps.length - 1 && (
                                        <div className="step-line" />
                                    )}
                                </div>

                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Engineering Illustration */}
                    <motion.div
                        className="process-visual"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={processEngineeringImage}
                            alt="VSRP engineering process"
                        />
                    </motion.div>

                </div>

                {/* Scroll Down */}
                <div className="process-scroll">
                    <div className="process-scroll-circle">
                        <ChevronDown size={18} />
                    </div>
                    <span>SCROLL DOWN</span>
                </div>

            </div>
        </section>
    );
};

export default Process;