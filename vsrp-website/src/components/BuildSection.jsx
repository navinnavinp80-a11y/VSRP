import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import vMarkMask from "../assets/images/vsrp-v-mark.png";
import rubberVideo from "../assets/videos/rubber_profile_video.mp4";
import WhatsappButton from "./WhatsappButton";
import "./BuildSection.css";

const BuildSection = () => {
  const scrollToNextSection = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
  };

  return (
    <section className="build-section" id="solutions">
      <div className="build-container">
        {/* Header Content */}
        <motion.div
          className="build-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="build-title">
            What Can We Help You <span className="highlight-orange">Build?</span>
          </h2>
          <p className="build-subtitle">
            We work with you to design, engineer and manufacture rubber solutions that meet your exact requirements.
          </p>
        </motion.div>

        {/* Video-Masked V-Logo */}
        <motion.div
          className="build-visual-wrapper"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div
            className="v-logo-mask-container"
            style={{
              WebkitMaskImage: `url(${vMarkMask})`,
              maskImage: `url(${vMarkMask})`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          >
            <video
              className="v-logo-mask-video"
              src={rubberVideo}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="build-scroll-indicator"
          onClick={scrollToNextSection}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          role="button"
          tabIndex={0}
        >
          <div className="scroll-icon-circle">
            <ChevronDown size={14} strokeWidth={2.5} />
          </div>
          <span className="scroll-text">SCROLL DOWN</span>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <WhatsappButton />
    </section>
  );
};

export default BuildSection;