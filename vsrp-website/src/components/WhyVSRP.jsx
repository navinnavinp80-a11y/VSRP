// src/components/WhyVSRP.jsx

import { motion } from "framer-motion";
import { Lightbulb, UsersRound, BadgeCheck } from "lucide-react";
import WhatsappButton from "./WhatsappButton";
import "./WhyVSRP.css";

const cards = [
  {
    icon: Lightbulb,
    title: "We Engineer Solutions.",
    description: "Custom products designed around your exact requirements.",
  },
  {
    icon: UsersRound,
    title: "We Know Rubber.",
    description: "Material expertise backed by 20+ years of industry experience.",
  },
  {
    icon: BadgeCheck,
    title: "We Deliver Confidence.",
    description: "Quality, traceability and reliability at every stage.",
  },
];

const WhyVSRP = () => {
  return (
    <section className="why-vsrp">
      <div className="why-container">
        {/* HEADER */}
        <div className="why-header">
          <motion.div
            className="why-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>
              More Than A
              <br />
              <span>Rubber Company.</span>
            </h2>
          </motion.div>

          <motion.div
            className="why-intro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p>
              We're engineers, problem-solvers and manufacturing partners, helping
              businesses turn unique requirements into reliable, high-performance
              rubber solutions.
            </p>
          </motion.div>
        </div>

        {/* CARDS */}
        <div className="why-cards">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                className="why-card"
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >
                {/* ICON */}
                <div className="why-icon">
                  <Icon size={36} strokeWidth={2.5} color="#000000" stroke="#000000" />
                </div>

                {/* DIVIDER */}
                <div
                  className={`why-divider ${
                    index === 0 ? "why-divider-active" : ""
                  }`}
                >
                  {index === 0 && <span />}
                </div>

                {/* CONTENT */}
                <div className="why-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* WHATSAPP */}
      <WhatsappButton />
    </section>
  );
};

export default WhyVSRP;