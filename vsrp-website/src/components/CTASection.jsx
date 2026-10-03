import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import workerBg from "../assets/images/4998d346ff1df0259f4a42f14ca10dc7035eca3c.jpg";
import "./CTASection.css";

const CTASection = () => {
    return (
        <section className="cta-section" id="contact">
            {/* Background Image */}
            <div
                className="cta-bg-image"
                style={{ backgroundImage: `url(${workerBg})` }}
            />

            {/* Vignette Overlay to ensure clean contrast on left & right text */}
            <div className="cta-overlay" />

            <div className="cta-container">
                {/* Left Heading Column */}
                <motion.div
                    className="cta-heading-col"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2>
                        VSRP are<br />
                        furthering quality<br />
                        in <span className="cta-highlight">our industries.</span>
                    </h2>
                </motion.div>

                {/* Right Paragraph & Button Column */}
                <motion.div
                    className="cta-content-col"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <p className="cta-description">
                        Across private, commercial and civil projects, our rubber products are
                        custom-engineered to be reliable and cost-effective. We support the
                        specific needs of specialised providers, plugging the gaps in their
                        projects so they can continue to deliver at the highest level.
                    </p>

                    <a href="#contact" className="cta-contact-btn">
                        <span>CONTACT US</span>
                        <span className="cta-arrow-circle">
                            <ArrowRight size={18} strokeWidth={2.5} />
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
