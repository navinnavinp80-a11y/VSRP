// src/components/RubberVideoSection.jsx

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./RubberVideoSection.css";
import rubberVideo from "../assets/videos/Rubber_2.mp4";

const RubberVideoSection = () => {
  return (
    <section className="rubber-video-section">
      {/* Background Video */}
      <video
        className="rubber-video-bg"
        src={rubberVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Subtle dark cinematic overlay */}
      <div className="rubber-video-overlay" />

      {/* Main Content (Vertically and Horizontally Centered) */}
      <div className="rubber-video-content">
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          Whatever You Need in
          <br />
          Rubber, We Can <span>Shape It.</span>
        </motion.h2>

        {/* Pill CTA Button */}
        <motion.a
          href="#solutions"
          className="product-category-btn"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <span>SEE PRODUCT CATEGORIES</span>
          <span className="product-category-arrow">
            <ArrowRight size={20} strokeWidth={2} />
          </span>
        </motion.a>
      </div>

      {/* Floating WhatsApp Glass Button */}
      {/* <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"
            fill="#25D366"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 2.158.683 4.156 1.848 5.795L2.5 21.5l3.856-1.325A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.954 7.954 0 01-4.223-1.207l-.303-.18-2.285.785.797-2.227-.197-.313A7.956 7.956 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"
            fill="#25D366"
          />
        </svg>
      </a> */}
    </section>
  );
};

export default RubberVideoSection;