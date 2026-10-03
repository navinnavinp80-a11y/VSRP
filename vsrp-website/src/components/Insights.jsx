import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import image_1 from "../assets/images/077c4f36bfecf2aa4a7e434f3267e20dbf34a28f.jpg"
import image_2 from "../assets/images/2920fe5a07950d8923c44d3668cbd728892d021a.jpg"
import image_3 from "../assets/images/b97a64fb991d0804f6478222f9596943f29afa77.jpg"
import "./Insights.css";

const insights = [
    {
        id: 1,
        image: image_3,
        title: "Understanding Rubber Compounds: Choosing The Right Material...",
    },
    {
        id: 2,
        image: image_1,
        title: "Understanding Rubber Compounds: Choosing The Right Material...",
    },
    {
        id: 3,
        image: image_2,
        title: "Understanding Rubber Compounds: Choosing The Right Material...",
    },
];

const Insights = () => {
    return (
        <section className="insights-section">
            <div className="insights-container">

                <div className="insights-header">

                    <div className="insights-heading-content">
                        <motion.h2
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Industry <span>Insights</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Practical advice, material expertise and engineering
                            <br />
                            knowledge to help you make informed decisions
                        </motion.p>
                    </div>

                    <motion.a
                        href="#insights"
                        className="insights-all-button"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span>VIEW ALL INSIGHTS</span>

                        <span className="insights-all-arrow">
                            <ArrowRight size={19} />
                        </span>
                    </motion.a>

                </div>

                <div className="insights-grid">

                    {insights.map((insight, index) => (
                        <motion.article
                            className="insight-card"
                            key={insight.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                        >

                            <div className="insight-image-wrapper">
                                <img
                                    src={insight.image}
                                    alt={insight.title}
                                    className="insight-image"
                                />
                            </div>

                            <div className="insight-content">

                                <h3>{insight.title}</h3>

                                <a
                                    href="#insight-detail"
                                    className="insight-detail"
                                >
                                    <span>VIEW DETAIL</span>
                                    <ArrowRight size={18} />
                                </a>

                            </div>

                        </motion.article>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Insights;