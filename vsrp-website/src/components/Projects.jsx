
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import handsHoldingImage from "../assets/images/Hands Holding Molded Components.png";
import industrialControlBoxImage from "../assets/images/Rugged Five-Button Industrial Control Box.png";
import "./Projects.css";

const projects = [
    {
        id: 1,
        image: handsHoldingImage,
        title: "Custom Extrusion Solution",
        description:
            "A specialised rubber extrusion profile engineered to meet strict performance and dimensional requirements.",
        tags: ["MINING", "EPDM", "EXTRUSION", "CONVEYOR SYSTEM"],
    },
    {
        id: 2,
        image: industrialControlBoxImage,
        title: "Industrial Control Components",
        description:
            "A specialised rubber extrusion profile engineered to meet strict performance and dimensional requirements.",
        tags: ["MINING", "EPDM", "EXTRUSION", "CONVEYOR SYSTEM"],
    },
    {
        id: 3,
        image: industrialControlBoxImage,
        title: "Molded Rubber Components",
        description:
            "Engineered rubber components designed for demanding industrial applications.",
        tags: ["MINING", "EPDM", "MOULDED", "INDUSTRIAL"],
    },
];

const Projects = () => {
    return (
        <section className="projects-section">
            <div className="projects-container">

                {/* Header */}
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2>
                        Wherever Precision Is
                        <br />
                        Needed, <span>VSRP Delivers.</span>
                    </h2>

                    <a href="#projects" className="projects-view-all">
                        <span>VIEW ALL PROJECTS</span>

                        <span className="projects-arrow">
                            <ArrowRight size={20} />
                        </span>
                    </a>
                </motion.div>

                {/* Project Cards */}
                <div className="projects-slider">
                    <div className="projects-track">
                        {projects.map((project, index) => (
                            <motion.article
                                className="project-card"
                                key={project.id}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.12,
                                }}
                            >
                                {/* Image */}
                                <div className="project-image-wrapper">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                    />

                                    <a href="#project" className="project-view-link">
                                        VIEW PROJECT
                                        <ArrowRight size={16} />
                                    </a>

                                    {/* Tags */}
                                    <div className="project-tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="project-content">
                                    <h3>{project.title}</h3>

                                    <p>{project.description}</p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;